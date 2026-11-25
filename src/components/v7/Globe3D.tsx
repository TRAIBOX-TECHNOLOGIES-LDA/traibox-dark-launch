import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import type { MotionValue } from 'framer-motion';
import { ARCS, HUBS, KIND_COLOR } from './useV7';

function toVec(lat: number, lon: number, r = 1) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
}

function Scene({ progress, calm, active, onHub }: { progress?: MotionValue<number>; calm: boolean; active?: string; onHub?: (id: string) => void }) {
  const group = useRef<THREE.Group>(null);
  const packets = useRef<THREE.Mesh[]>([]);
  const dots = useMemo(() => {
    const n = 2600; const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2; const r = Math.sqrt(1 - y * y); const t = i * 2.399963;
      arr.set([Math.cos(t) * r, y, Math.sin(t) * r], i * 3);
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(arr, 3)); return g;
  }, []);
  const hubPos = useMemo(() => Object.fromEntries(HUBS.map((h) => [h.id, toVec(h.lat, h.lon, 1.01)])), []);
  const curves = useMemo(() => ARCS.map((arc) => {
    const a = hubPos[arc.a], b = hubPos[arc.b];
    const mid = a.clone().add(b).multiplyScalar(0.5); mid.normalize().multiplyScalar(1 + a.distanceTo(b) * 0.38);
    const c = new THREE.QuadraticBezierCurve3(a, mid, b);
    return { ...arc, curve: c, points: c.getPoints(48) };
  }), [hubPos]);

  useFrame(({ camera, clock }, delta) => {
    const dt = Math.min(delta, 0.05);
    const p = progress?.get() ?? 0;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 3.3 - p * 0.7, 0.08);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.25 - p * 0.2, 0.08);
    camera.lookAt(0, 0, 0);
    if (group.current && !calm) group.current.rotation.y += dt * 0.06;
    const t = clock.elapsedTime;
    packets.current.forEach((m, i) => {
      if (!m) return; const c = curves[i % curves.length];
      const k = calm ? 0.5 : ((t * 0.12 + i * 0.137) % 1);
      m.position.copy(c.curve.getPoint(k));
    });
  });

  return (
    <group ref={group} rotation={[0.35, -1.6, 0]}>
      <mesh><sphereGeometry args={[0.985, 64, 64]} /><meshStandardMaterial color="#0b1622" roughness={0.9} metalness={0.1} /></mesh>
      <points geometry={dots}><pointsMaterial size={0.009} color="#9db7c9" transparent opacity={0.55} sizeAttenuation /></points>
      {curves.map((c, i) => (
        <Line key={i} points={c.points} color={KIND_COLOR[c.kind]} lineWidth={1} transparent opacity={active && c.a !== active && c.b !== active ? 0.15 : 0.6} />
      ))}
      {curves.flatMap((c, i) => [0, 1].map((j) => (
        <mesh key={`${i}-${j}`} ref={(m) => { if (m) packets.current[i + j * curves.length] = m; }}>
          <sphereGeometry args={[0.014, 10, 10]} /><meshBasicMaterial color={KIND_COLOR[c.kind]} />
        </mesh>
      )))}
      {HUBS.map((h) => (
        <mesh key={h.id} position={hubPos[h.id]} onClick={(e) => { e.stopPropagation(); onHub?.(h.id); }}
          onPointerOver={() => (document.body.style.cursor = onHub ? 'pointer' : '')} onPointerOut={() => (document.body.style.cursor = '')}>
          <sphereGeometry args={[active === h.id ? 0.034 : 0.022, 16, 16]} />
          <meshBasicMaterial color={active === h.id ? '#f1dcb2' : '#e8eef2'} />
        </mesh>
      ))}
    </group>
  );
}

export default function Globe3D({ progress, calm = false, interactive = false, active, onHub }: { progress?: MotionValue<number>; calm?: boolean; interactive?: boolean; active?: string; onHub?: (id: string) => void }) {
  return (
    <Canvas camera={{ position: [0, 0.25, 3.3], fov: 40 }} dpr={[1, 1.75]} frameloop={calm ? 'demand' : 'always'} gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => gl.domElement.parentElement?.setAttribute('data-scene-ready', 'true')}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 4]} intensity={1.4} color="#cfe4f2" />
      <directionalLight position={[-4, -1, -2]} intensity={0.6} color="#d9bb86" />
      <Scene progress={progress} calm={calm} active={active} onHub={onHub} />
      {interactive && <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />}
    </Canvas>
  );
}
