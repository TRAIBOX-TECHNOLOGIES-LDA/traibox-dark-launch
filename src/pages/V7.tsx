import { useEffect, useState } from 'react';
import '@/components/v7/v7.css';
import { Connect, Conversion, EngineSection, Hero, Journey, Nav, Network, Platform, Trust } from '@/components/v7/Sections';

export default function V7() {
  const [font, setFont] = useState<'editorial' | 'inter'>('editorial');
  useEffect(() => {
    document.title = 'TRAIBOX V7 — Make trade flow. Everywhere.';
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap';
    document.head.appendChild(l);
    return () => l.remove();
  }, []);
  const toAccess = () => document.getElementById('access')?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className={`v7-site font-${font}`}>
      <Nav onAccess={toAccess} />
      <main>
        <Hero onAccess={toAccess} /><EngineSection /><Journey /><Network /><Platform /><Connect /><Trust /><Conversion />
      </main>
      <button className="v7-fonttoggle" onClick={() => setFont(font === 'editorial' ? 'inter' : 'editorial')} aria-label="Compare heading typography">
        Headings: {font === 'editorial' ? 'Editorial' : 'Inter'}
      </button>
    </div>
  );
}
