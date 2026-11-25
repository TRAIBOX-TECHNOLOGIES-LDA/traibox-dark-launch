import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import data from './demo-data.json';

type HeroData = [string, string, string[], string];
type FlowData = [string, string, string, string[]];
type UseData = [string, string, string, string, string, string, string[], string];
type LayerData = [string, string, string, string, string[], string];
type SolutionData = [string, string, string, string, string[], string];
const stages = data.stages as HeroData[];
const flows = data.flows as FlowData[];
const uses = data.uses as UseData[];
export const layers = data.layers as LayerData[];
const solutions = data.solutions as SolutionData[];

function useExperience() {
  const [stage, setStage] = useState(1);
  const [flow, setFlow] = useState(0);
  const [use, setUse] = useState(0);
  const [layer, setLayer] = useState(0);
  const [solution, setSolution] = useState(0);
  const [scene, setScene] = useState(0);
  const [approved, setApproved] = useState(false);
  const [sceneNote, setSceneNote] = useState('');
  const [scenePlaying, setScenePlaying] = useState(false);
  const [walkPlaying, setWalkPlaying] = useState(false);
  const [globe, setGlobe] = useState(0);
  const [stack, setStack] = useState(0);
  const [motionPaused, setMotionPaused] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [menuOpen, setMenuOpen] = useState(false);
  const [interest, setInterest] = useState('early_access');
  const [approval, setApproval] = useState('Approval required. Nothing is sent automatically.');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastManual = useRef(0);
  const showScene = (next: number) => { setScene(next); setSceneNote(''); setScenePlaying(false); };
  const goLayer = (next: number) => {
    lastManual.current = Date.now();
    const safe = Math.max(0, Math.min(4, next));
    setLayer(safe);
    document.getElementById(`walk-step-${safe}`)?.scrollIntoView({ block: 'center', behavior: motionPaused ? 'instant' : 'smooth' });
  };
  useEffect(() => {
    let frame = 0;
    const scroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (Date.now() - lastManual.current < 1200) return;
        const target = innerHeight * (innerWidth <= 650 ? .76 : .48);
        let best = -1, distance = Infinity;
        document.querySelectorAll<HTMLElement>('[data-story]').forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < innerHeight) {
            const candidate = Math.abs((rect.top + rect.bottom) / 2 - target);
            if (candidate < distance) { distance = candidate; best = index; }
          }
        });
        if (best >= 0) setLayer(best);
      });
    };
    window.addEventListener('scroll', scroll, { passive: true });
    return () => { window.removeEventListener('scroll', scroll); cancelAnimationFrame(frame); };
  }, []);
  useEffect(() => {
    if (!scenePlaying || scene === 3 || scene === 5) { setScenePlaying(false); return; }
    const timer = window.setTimeout(() => { if (!document.hidden) setScene(value => Math.min(5, value + 1)); else setScenePlaying(false); }, 4500);
    return () => clearTimeout(timer);
  }, [scenePlaying, scene]);
  useEffect(() => {
    if (!walkPlaying || layer === 4) { setWalkPlaying(false); return; }
    const timer = window.setTimeout(() => { if (!document.hidden) goLayer(layer + 1); else setWalkPlaying(false); }, 5200);
    return () => clearTimeout(timer);
  }, [walkPlaying, layer]);
  useEffect(() => {
    const svg = document.querySelector<SVGSVGElement>('.globe-art svg');
    const update = () => { if (svg) { if (motionPaused || document.hidden) svg.pauseAnimations(); else svg.unpauseAnimations(); } };
    update(); document.addEventListener('visibilitychange', update);
    const observer = new IntersectionObserver(entries => { const entry = entries[0]; if (svg && entry) { if (!entry.isIntersecting || motionPaused || document.hidden) svg.pauseAnimations(); else svg.unpauseAnimations(); } });
    if (svg) observer.observe(svg);
    return () => { document.removeEventListener('visibilitychange', update); observer.disconnect(); };
  }, [motionPaused]);
  const openAccess = (partner = false) => { setInterest(partner ? 'design_partner' : 'early_access'); dialogRef.current?.showModal(); };
  const nextScene = () => {
    if (scene === 3) setApproved(true);
    if (scene === 5) setApproved(false);
    showScene((scene + 1) % 6);
  };
  const toggleScene = () => {
    if (scene === 3) { setSceneNote('Playback is paused for your decision. Approve or hold for review.'); return; }
    if (scene === 5) { setApproved(false); setScene(0); }
    setScenePlaying(value => !value);
  };
  return {
    stage, setStage, heroData: stages[stage], flow, setFlow, flowData: flows[flow], use, setUse, useData: uses[use],
    layer, setLayer, goLayer, layerData: layers[layer], solution, setSolution, solutionData: solutions[solution],
    scene, showScene, sceneData: data.story[scene], approved, sceneNote, scenePlaying, toggleScene, nextScene,
    resetScene: () => { setApproved(false); showScene(0); },
    holdScene: () => { setApproved(false); setScenePlaying(false); setSceneNote('Held for review. The sample transaction remains at the approval step.'); },
    walkPlaying, setWalkPlaying, globe, setGlobe, globeText: data.texts[globe], globeRoutes: data.routes[globe],
    stack, setStack, stackData: data.stack[stack], motionPaused, setMotionPaused, menuOpen, setMenuOpen,
    interest, setInterest, dialogRef, openAccess, approval, setApproval, shortOut: data.shortOut,
  };
}

type Experience = ReturnType<typeof useExperience>;
const Context = createContext<Experience | null>(null);
export function ExperienceProvider({ children }: { children: ReactNode }) {
  return <Context.Provider value={useExperience()}>{children}</Context.Provider>;
}
export function useV6() {
  const context = useContext(Context);
  if (!context) throw new Error('V6 experiences require their provider');
  return context;
}