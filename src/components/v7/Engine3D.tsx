import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Edges, Environment, Lightformer, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export const LAYERS = [
  { id: 'interfaces', name: 'Interfaces', line: 'Your ERP, e-commerce, email and banking plug in once.' },
  { id: 'agents', name: 'Agents', line: 'Contextual AI reads intent, prepares documents and proposes next steps.' },
  { id: 'policy', name: 'Policy & Compliance', line: 'Rules, checks and human approvals run before anything moves.' },
  { id: 'rails', name: 'Finance Rails', line: 'Funding offers and multi-rail payments, chosen per trade.' },
  { id: 'proof', name: 'Proof Ledger', line: 'Every step leaves verifiable evidence. No personal data on-chain.' },
];

function Stack({ explode, xray, active, onHover }: { explode: number; xray: boolean; active: number; onHover: (i: number) => void }) {
  const g = useRef<THREE.Group>(null);
  const plates = useRef<THREE.Group[]>([]);
  useFrame((_, d) => {
    const dt = Math.min(d, 0.05);
    if (g.current) g.current.rotation.y += dt * 0.12;
    plates.current.forEach((p, i) => {
      if (!p) return;
      const target = (2 - i) * (0.16 + explode * 0.42) + (i === active ? 0.06 : 0);
      p.position.y = THREE.MathUtils.lerp(p.position.y, target, 1 - Math.exp(-dt * 6));
    });
  });
  const tints = ['#cfd6dc', '#9fb6c6', '#7e93a3', '#c9b48c', '#e9e4d8'];
  return (
    <group ref={g} rotation={[0.5, 0.6, 0]}>
      {LAYERS.map((l, i) => (
        <group key={l.id} ref={(el) => { if (el) plates.current[i] = el; }} onPointerOver={(e) => { e.stopPropagation(); onHover(i); }}>
          <RoundedBox args={[1.6, 0.12, 1.6]} radius={0.04} smoothness={3}>
            <meshPhysicalMaterial color={tints[i]} metalness={xray ? 0 : 0.75} roughness={0.28} transparent opacity={xray ? 0.14 : 1} transmission={xray ? 0.6 : 0} />
            <Edges color={i === active ? '#8fd0f0' : xray ? '#9fc4dc' : '#2a3440'} />
          </RoundedBox>
          {i === 0 && (
            <group position={[0, 0.1, 0]}>
              <mesh position={[0, 0, -0.42]}><boxGeometry args={[1.1, 0.08, 0.2]} /><meshStandardMaterial color="#2f8fd0" metalness={0.4} roughness={0.3} /></mesh>
              <mesh position={[0, 0, 0.12]}><boxGeometry args={[0.22, 0.08, 0.9]} /><meshStandardMaterial color="#2f8fd0" metalness={0.4} roughness={0.3} /></mesh>
            </group>
          )}
          {xray && i < 4 && [-0.5, 0.5].map((x) => [-0.5, 0.5].map((z) => (
            <mesh key={`${x}${z}`} position={[x, -0.25 - explode * 0.2, z]}><cylinderGeometry args={[0.006, 0.006, 0.3 + explode * 0.84]} /><meshBasicMaterial color="#8fd0f0" /></mesh>
          )))}
        </group>
      ))}
    </group>
  );
}

export default function Engine3D(props: { explode: number; xray: boolean; active: number; onHover: (i: number) => void }) {
  return (
    <Canvas camera={{ position: [0, 1.2, 4.2], fov: 38 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => gl.domElement.parentElement?.setAttribute('data-scene-ready', 'true')}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 5, 2]} intensity={1.6} />
      <Environment resolution={128}>
        <Lightformer intensity={2} position={[0, 5, 0]} scale={[10, 10, 1]} />
        <Lightformer intensity={1} color="#9cc7e0" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 1, 1]} />
        <Lightformer intensity={0.8} color="#e6cfa0" position={[5, 1, 1]} rotation-y={-Math.PI / 2} scale={[20, 1, 1]} />
      </Environment>
      <Stack {...props} />
    </Canvas>
  );
}
