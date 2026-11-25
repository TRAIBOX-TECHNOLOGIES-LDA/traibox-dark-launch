import { useV6 } from './ExperienceContext';
import { V6Button } from './V6Button';
import { Brand } from './Brand';
import { Rows } from './Rows';

export function JourneyExperience() {
 const ctx = useV6();
 return (
<section className="section journey" id="how-it-works" data-active-flow={ctx.flow}><div className="wrap"><div className="mono">04 / How it works</div><h2>Trade. Flow. Grow.</h2><p>Start with what you have. Get the deal done. Put what you learn to work on the next one.</p><div className="steps journey-tabs"><V6Button data-flow="0" aria-pressed={ctx.flow === 0} className={"" + (ctx.flow === 0 ? " active" : "")} onClick={() => ctx.setFlow(0)}><span className="mono">01 / Capture &amp; understand</span><h3>TRADE<span>↗</span></h3><p>Know your deal.</p></V6Button><V6Button data-flow="1" aria-pressed={ctx.flow === 1} className={"" + (ctx.flow === 1 ? " active" : "")} onClick={() => ctx.setFlow(1)}><span className="mono">02 / Verify, coordinate &amp; settle</span><h3>FLOW<span>→</span></h3><p>Make it happen.</p></V6Button><V6Button data-flow="2" aria-pressed={ctx.flow === 2} className={"" + (ctx.flow === 2 ? " active" : "")} onClick={() => ctx.setFlow(2)}><span className="mono">03 / Prove &amp; reuse</span><h3>GROW<span>↗</span></h3><p>Build on every deal.</p></V6Button></div><div className="two workflowdetail"><div><h3 id="flowtitle">{ctx.flowData[0]}</h3><p id="flowdesc">{ctx.flowData[1]}</p></div><div className="data"><div className="mono" id="flowlabel">{ctx.flowData[2]}</div><div id="flowrows"><Rows items={ctx.flowData[3]} /></div></div></div><div className="journey-foot"><span className="mono">ONE ENGINE / ONE CONTINUOUS TRANSACTION</span><V6Button className="btn outline" id="journey-next" onClick={() => ctx.setFlow((ctx.flow + 1) % 3)}>{['Next: FLOW →', 'Next: GROW →', 'Start again ↺'][ctx.flow]}</V6Button></div></div></section>
 );
}
