import { useEffect, useRef } from 'react';
import css from '@/components/v14/v14.css.txt?raw';
import markup from '@/components/v14/v14-content.html?raw';
import engine from '@/components/v14/v14-engine.js.txt?raw';
import { runEngine } from '@/components/v14/runEngine';
import { submitEnquiry } from '@/components/v14/submitEnquiry';

const FONTS = 'https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..600&family=JetBrains+Mono:wght@400;500&family=Unbounded:wght@500..800&display=swap';

export default function V14() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const html = document.documentElement;
    const prevClass = html.className;
    const prevTitle = document.title;
    html.className = 'js';
    document.title = 'TRAIBOX — The Agentic Trade Engine';
    const font = Object.assign(document.createElement('link'), { rel: 'stylesheet', href: FONTS });
    const style = document.createElement('style');
    style.dataset.v14 = '';
    style.textContent = css + '\n.form-error{color:#b3261e;font-size:13px;margin-top:12px}';
    document.head.append(font, style);
    if (root.current) root.current.innerHTML = markup;
    let dispose = () => {};
    try { dispose = runEngine(engine, submitEnquiry); } catch (e) { console.error('V14 engine failed', e); }
    return () => {
      dispose();
      if (root.current) root.current.innerHTML = '';
      style.remove(); font.remove();
      html.className = prevClass; document.title = prevTitle;
    };
  }, []);
  return <div ref={root} className="v14-site" />;
}
