import { layers, useV6 } from './ExperienceContext';
import { Rows } from './Rows';

export function ArchitectureStory() {
  const ctx = useV6();
  return <>{layers.map((layer, index) => <article className={`walk-card${ctx.layer === index ? ' current' : ''}`} id={`walk-step-${index}`} data-story={index} key={layer[0]}>
    <span className="mono">{layer[0]}</span><h3>{layer[1]}</h3><p>{layer[2]}</p>
    <div className="sample"><div className="mono">{layer[3]}</div><Rows items={layer[4]} states={false} /></div>
    <div className="outcome">{layer[5]}</div>
  </article>)}</>;
}