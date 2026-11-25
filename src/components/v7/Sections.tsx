import { lazy, Suspense, useRef, useState, type ReactNode } from 'react';
import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import symbolWhite from '@/assets/brand/symbol-white.asset.json';
import wordmarkWhite from '@/assets/brand/wordmark-white.asset.json';
import { AccessFields } from '@/components/v6/AccessForm';
import { HUBS, KIND_COLOR, useCalm, useWebGL } from './useV7';
import { LAYERS } from './Engine3D';

const Globe3D = lazy(() => import('./Globe3D'));
const Engine3D = lazy(() => import('./Engine3D'));

const Tag = ({ children }: { children: ReactNode }) => <span className="v7-tag">{children}</span>;
const Illustrative = () => <span className="v7-illus">Illustrative</span>;

function Lazy3D({ children, fallback }: { children: ReactNode; fallback: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, margin: '200px' });
  const gl = useWebGL();
  return <div ref={ref} className="v7-canvas">{gl === false ? fallback : seen && gl ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}</div>;
}

const GlobeFallback = () => (
  <svg viewBox="0 0 400 400" className="v7-fallback" aria-hidden="true">
    <circle cx="200" cy="200" r="150" fill="none" stroke="hsl(var(--v7-titanium) / .4)" />
    {[30, 60, 90, 120].map((r) => <ellipse key={r} cx="200" cy="200" rx={r} ry="150" fill="none" stroke="hsl(var(--v7-titanium) / .15)" />)}
    <path d="M90 230 Q200 60 310 180" fill="none" stroke={KIND_COLOR.info} /><path d="M120 300 Q220 200 300 260" fill="none" stroke={KIND_COLOR.value} />
  </svg>
);

export function Nav({ onAccess }: { onAccess: () => void }) {
  return (
    <header className="v7-nav">
      <a href="#top" aria-label="TRAIBOX home"><img src={wordmarkWhite.url} alt="TRAIBOX" height={18} /></a>
      <nav aria-label="Sections">{[['engine', 'Engine'], ['journey', 'Flow'], ['network', 'Network'], ['platform', 'Platform'], ['connect', 'Connect']].map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
      <div className="v7-nav-cta"><a href="/app" className="v7-link">Sign in</a><button className="v7-btn" onClick={onAccess}>Request early access</button></div>
    </header>
  );
}

export function Hero({ onAccess }: { onAccess: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const calm = useCalm();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const titleY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-30%']);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.86]);
  const titleOp = useTransform(scrollYProgress, (v) => Math.max(0, Math.min(1, 1 - (v - 0.25) / 0.25)));
  const cardY = useTransform(scrollYProgress, [0.35, 0.7], [120, 0]);
  const cardRot = useTransform(scrollYProgress, [0.35, 0.7], [18, 0]);
  const cardOp = useTransform(scrollYProgress, (v) => Math.max(0, Math.min(1, (v - 0.35) / 0.15)));
  const steps = ['Intent captured', 'Partner verified', 'Terms agreed', 'Funding selected', 'Payment routed', 'Proof issued'];
  const [step, setStep] = useState(calm ? 6 : 0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => !calm && setStep(Math.max(0, Math.min(6, Math.round((v - 0.5) / 0.4 * 6)))));
  return (
    <section ref={ref} id="top" className="v7-hero">
      <div className="v7-sticky">
        <div className="v7-hero-globe"><Lazy3D fallback={<GlobeFallback />}><Globe3D progress={calm ? undefined : scrollYProgress} calm={calm} /></Lazy3D></div>
        <motion.div className="v7-hero-copy" style={calm ? undefined : { y: titleY, scale: titleScale, opacity: titleOp }}>
          <Tag>TRAIBOX · Trade Intelligence</Tag>
          <h1 className="v7-display">Make trade flow.<br /><em>Everywhere.</em></h1>
          <p>One engine connects your partners, compliance, funding, payments and proof, so every trade runs as one flow.</p>
          <div className="v7-row"><button className="v7-btn" onClick={onAccess}>Request early access</button><a className="v7-link" href="#engine">See the engine ↓</a></div>
        </motion.div>
        <motion.div className="v7-deal" style={calm ? undefined : { y: cardY, rotateX: cardRot, opacity: cardOp }} aria-label="Example deal">
          <div className="v7-deal-head"><span>Deal · Madrid → São Paulo</span><Illustrative /></div>
          <div className="v7-deal-parties"><div><small>Seller</small>Iberia Foods S.L.</div><div className="v7-arrow">⟶</div><div><small>Buyer</small>Café Verde Ltda.</div></div>
          <ol>{steps.map((s, i) => <li key={s} className={i < step ? 'done' : i === step ? 'now' : ''}><span />{s}</li>)}</ol>
        </motion.div>
        <div className="v7-scrollhint" aria-hidden="true">Scroll to zoom into a trade</div>
      </div>
    </section>
  );
}

export function EngineSection() {
  const [explode, setExplode] = useState(0.35);
  const [xray, setXray] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <section id="engine" className="v7-engine">
      <div className="v7-wrap v7-split">
        <div>
          <Tag>02 · The Agentic Trade Engine</Tag>
          <h2 className="v7-display v7-h2">Five layers.<br />One motion.</h2>
          <p className="v7-lead">Built from the geometry of our symbol. Pull it apart to see what runs underneath every trade.</p>
          <div className="v7-controls">
            <label>Exploded view<input type="range" min={0} max={1} step={0.01} value={explode} onChange={(e) => setExplode(+e.target.value)} aria-label="Exploded view amount" /></label>
            <button className={`v7-chip ${xray ? 'on' : ''}`} aria-pressed={xray} onClick={() => setXray(!xray)}>X-ray {xray ? 'on' : 'off'}</button>
          </div>
          <ul className="v7-layers" role="listbox" aria-label="Engine layers">
            {LAYERS.map((l, i) => (
              <li key={l.id} role="option" aria-selected={active === i} tabIndex={0} onFocus={() => setActive(i)} onMouseEnter={() => setActive(i)} className={active === i ? 'on' : ''}>
                <span className="v7-num">0{i + 1}</span><div><strong>{l.name}</strong>{active === i && <p>{l.line}</p>}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="v7-engine-stage">
          <Lazy3D fallback={<div className="v7-fallback-stack">{LAYERS.map((l, i) => <div key={l.id} style={{ transform: `translateY(${(i - 2) * (20 + explode * 40)}px)` }} />)}</div>}>
            <Engine3D explode={explode} xray={xray} active={active} onHover={setActive} />
          </Lazy3D>
          <span className="v7-caption">Conceptual model · Drag the slider · Hover a layer</span>
        </div>
      </div>
    </section>
  );
}

const STAGES = [
  { word: 'TRADE', title: 'Start from intent.', body: 'Say what you want to buy or sell. TRAIBOX finds verified partners and frames the deal.' },
  { word: 'FLOW', title: 'Everything moves together.', body: 'Checks, documents, funding and payment run in one sequence, with humans approving what matters.' },
  { word: 'GROW', title: 'Trust compounds.', body: 'Every completed trade adds proof to your Trade Passport and opens new corridors.' },
];

export function Journey() {
  const ref = useRef<HTMLElement>(null);
  const calm = useCalm();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [stage, setStage] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setStage(Math.min(2, Math.floor(v * 3))));
  const draw = useTransform(scrollYProgress, [0.25, 0.6], [0, 1]);
  const spread = useTransform(scrollYProgress, [0.6, 1], [0.4, 1]);
  const tilt = useTransform(scrollYProgress, [0, 1], [24, -8]);
  const rail = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const outer = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({ x: 200 + Math.cos(i * 0.785) * 150, y: 200 + Math.sin(i * 0.785) * 150 }));
  return (
    <section ref={ref} id="journey" className="v7-journey" style={calm ? { height: 'auto' } : undefined}>
      <div className={calm ? '' : 'v7-sticky'}>
        <div className="v7-wrap v7-journey-grid">
          <div className="v7-words" aria-hidden="true">
            {STAGES.map((s, i) => <div key={s.word} className={`v7-word ${i === stage ? 'on' : i < stage ? 'past' : ''}`}>{s.word}<span>.</span></div>)}
            <div className="v7-rail"><motion.div style={{ height: rail }} /></div>
          </div>
          <motion.svg viewBox="0 0 400 400" className="v7-journey-svg" style={calm ? undefined : { rotateX: tilt }} role="img" aria-label="A single intent becomes an orchestrated flow, then a growing network">
            <circle cx="200" cy="200" r="10" fill="hsl(var(--v7-glacier))" />
            {[0, 1, 2, 3].map((i) => <motion.path key={i} d={`M200 200 Q ${200 + (i - 1.5) * 90} ${120 + i * 20} ${80 + i * 80} ${i % 2 ? 320 : 90}`} fill="none" stroke={Object.values(KIND_COLOR)[i % 3]} strokeWidth="1.5" style={{ pathLength: calm ? 1 : draw }} />)}
            {outer.map((p, i) => <motion.circle key={i} cx={200} cy={200} r="5" fill="hsl(var(--v7-champagne))" style={calm ? { x: p.x - 200, y: p.y - 200 } : { x: useTransform(spread, (s) => (p.x - 200) * s), y: useTransform(spread, (s) => (p.y - 200) * s), opacity: useTransform(scrollYProgress, (v) => Math.max(0, Math.min(1, (v - 0.55) / 0.15))) }} />)}
          </motion.svg>
          <div className="v7-stage-copy" aria-live="polite">
            {(calm ? STAGES : [STAGES[stage]]).map((s) => <div key={s.word}><Tag>{s.word}</Tag><h3 className="v7-display">{s.title}</h3><p>{s.body}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Network() {
  const calm = useCalm();
  const [hub, setHub] = useState<string>('mad');
  const h = HUBS.find((x) => x.id === hub)!;
  return (
    <section id="network" className="v7-network">
      <div className="v7-wrap">
        <Tag>04 · Networks of trust</Tag>
        <h2 className="v7-display v7-h2">Not shipments.<br />Decisions moving.</h2>
        <div className="v7-network-grid">
          <div className="v7-globe-big"><Lazy3D fallback={<GlobeFallback />}><Globe3D interactive calm={calm} active={hub} onHub={setHub} /></Lazy3D></div>
          <aside>
            <ul className="v7-legend">{(['info', 'decision', 'value'] as const).map((k) => <li key={k}><span style={{ background: KIND_COLOR[k] }} />{{ info: 'Information', decision: 'Decisions', value: 'Value' }[k]}</li>)}</ul>
            <div className="v7-hubs" role="tablist" aria-label="Business hubs">{HUBS.map((x) => <button key={x.id} role="tab" aria-selected={x.id === hub} className={`v7-chip ${x.id === hub ? 'on' : ''}`} onClick={() => setHub(x.id)}>{x.name}</button>)}</div>
            <div className="v7-story"><small>{h.name}</small><p>{h.story}</p><Illustrative /></div>
            <p className="v7-caption">Drag the globe to rotate. Select a hub.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

const PILLARS = ['Trade', 'Intelligence', 'Network', 'Finance', 'Clearance'] as const;

function PillarUI({ p }: { p: (typeof PILLARS)[number] }) {
  if (p === 'Trade') return <div className="ui"><div className="ui-row head"><b>Deal room · Olive oil, 2 containers</b><span className="pill ok">Terms agreed</span></div>{[['Incoterm', 'CIF Santos'], ['Price', 'Agreed in chat'], ['Documents', '4 of 5 ready'], ['Next', 'Buyer confirms delivery window']].map(([a, b]) => <div className="ui-row" key={a}><span>{a}</span><span>{b}</span></div>)}</div>;
  if (p === 'Intelligence') return <div className="ui"><div className="ui-row head"><b>Risk brief</b><span className="pill">Contextual AI</span></div><p className="ui-note">Counterparty has three completed trades in the network and verified registration. One sanctions screen pending refresh.</p><div className="ui-row"><span>Suggested action</span><span>Refresh screen before payment</span></div><div className="ui-row"><span>Confidence</span><span>Explained, not scored</span></div></div>;
  if (p === 'Network') return <div className="ui"><div className="ui-row head"><b>Partner graph</b><span className="pill ok">Verified</span></div><svg viewBox="0 0 300 120" className="ui-graph">{[[40, 60], [150, 30], [150, 90], [260, 60], [210, 15]].map(([x, y], i) => <g key={i}><line x1="150" y1="60" x2={x} y2={y} stroke="currentColor" opacity=".3" /><circle cx={x} cy={y} r="6" fill="currentColor" /></g>)}<circle cx="150" cy="60" r="10" fill="hsl(var(--v7-glacier))" /></svg></div>;
  if (p === 'Finance') return <div className="ui"><div className="ui-row head"><b>Funding offers</b><span className="pill">Compare</span></div>{[['Lender A', 'Invoice finance', '30 days'], ['Lender B', 'Pre-shipment', '45 days'], ['Lender C', 'Receivables', '60 days']].map(([a, b, c], i) => <div className={`ui-row ${i === 0 ? 'pick' : ''}`} key={a}><span>{a}</span><span>{b}</span><span>{c}</span></div>)}</div>;
  return <div className="ui"><div className="ui-row head"><b>Clearance checklist</b><span className="pill warn">1 approval needed</span></div>{[['KYB verified', 'ok'], ['Sanctions screening', 'ok'], ['Export documents', 'ok'], ['Payment release · human approval', 'warn']].map(([a, s]) => <div className="ui-row" key={a}><span>{a}</span><span className={`pill ${s}`}>{s === 'ok' ? 'Done' : 'Waiting'}</span></div>)}</div>;
}

export function Platform() {
  const [tab, setTab] = useState<(typeof PILLARS)[number]>('Trade');
  const lines: Record<string, string> = { Trade: 'Run the deal in one room.', Intelligence: 'AI that explains itself.', Network: 'Know who you are dealing with.', Finance: 'Funding and payments, compared.', Clearance: 'Compliance before money moves.' };
  return (
    <section id="platform" className="v7-platform">
      <div className="v7-wrap">
        <Tag>05 · Platform</Tag>
        <h2 className="v7-display v7-h2">Five pillars.<br />One workspace.</h2>
        <div className="v7-tabs" role="tablist" aria-label="Platform pillars">{PILLARS.map((p) => <button key={p} role="tab" aria-selected={tab === p} className={tab === p ? 'on' : ''} onClick={() => setTab(p)}>{p}</button>)}</div>
        <div className="v7-window" role="tabpanel">
          <div className="v7-window-bar"><i /><i /><i /><span>traibox · {tab.toLowerCase()}</span><Illustrative /></div>
          <motion.div key={tab} initial={{ rotateY: -8, x: 24 }} animate={{ rotateY: 0, x: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }} className="v7-window-body">
            <div className="v7-window-side"><h3 className="v7-display">{lines[tab]}</h3></div><PillarUI p={tab} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Connect() {
  const tools = ['ERP', 'E-commerce', 'Email', 'Banking', 'Logistics', 'Compliance', 'Accounting', 'CRM'];
  return (
    <section id="connect" className="v7-connect">
      <div className="v7-wrap v7-split">
        <div><Tag>06 · Connectivity</Tag><h2 className="v7-display v7-h2">Keep your stack.<br />Connect the work.</h2><p className="v7-lead">TRAIBOX plugs into the tools you already use. Connect once, and every trade reads from the same source.</p></div>
        <div className="v7-orbit" role="img" aria-label="Your tools connect into the TRAIBOX engine">
          <img src={symbolWhite.url} alt="" className="v7-orbit-core" />
          {tools.map((t, i) => <span key={t} className="v7-orbit-item" style={{ ['--a' as string]: `${i * 45}deg` }}>{t}</span>)}
        </div>
      </div>
    </section>
  );
}

export function Trust() {
  const items = [['Access', 'Role and attribute-based permissions.'], ['Transport', 'mTLS between every service.'], ['Evidence', 'Exportable audit bundles per trade.'], ['Residency', 'EU data residency by default.'], ['Privacy', 'DSAR-ready exports. No PII on-chain.'], ['Ledger', 'Optional anchoring for independent proof.']];
  return (
    <section className="v7-trust"><div className="v7-wrap"><Tag>07 · Security posture</Tag><h2 className="v7-display v7-h2">Designed to be checked.</h2>
      <div className="v7-trust-grid">{items.map(([a, b]) => <div key={a}><small>{a}</small><p>{b}</p></div>)}</div>
      <p className="v7-caption">These are design commitments for the platform in development, not certifications.</p></div></section>
  );
}

export function Conversion() {
  const [interest, setInterest] = useState<'early_access' | 'design_partner'>('early_access');
  return (
    <section id="access" className="v7-convert">
      <div className="v7-wrap v7-split">
        <div><Tag>08 · Early access</Tag><h2 className="v7-display v7-h2">Be early to<br />the new flow.</h2>
          <div className="v7-row"><button className={`v7-chip ${interest === 'early_access' ? 'on' : ''}`} onClick={() => setInterest('early_access')}>Request early access</button><button className={`v7-chip ${interest === 'design_partner' ? 'on' : ''}`} onClick={() => setInterest('design_partner')}>Become an early partner</button></div>
        </div>
        <div className="v7-access" key={interest}><AccessFields initialInterest={interest} /></div>
      </div>
      <footer className="v7-foot"><img src={wordmarkWhite.url} alt="TRAIBOX" height={14} /><span>Trade Intelligence</span><a href="/">View V6</a></footer>
    </section>
  );
}
