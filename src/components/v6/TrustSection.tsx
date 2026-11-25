import { useV6 } from './ExperienceContext';
import { V6Button } from './V6Button';
import { Brand } from './Brand';
import { Rows } from './Rows';

export function TrustSection() {
 const ctx = useV6();
 return (
<section className="section subtle"><div className="wrap two"><div><div className="mono">06 / Trust by design</div><h2>Intelligent. Accountable.</h2><p>Let agents prepare the work. Keep the decisions that matter with your team. See why an action is proposed, review the evidence and decide whether it goes ahead.</p></div><div className="data"><strong>Action review</strong><div className="check"><span>Proposed action</span><b>Request revised terms</b></div><div className="check"><span>Reason</span><span>Payment term mismatch</span></div><div className="check"><span>Supporting evidence</span><span>2 sample documents</span></div><p aria-live="polite" className="small reference-inline-1" id="approval">{ctx.approval}</p><div className="actions"><V6Button className="btn" id="approve" onClick={() => ctx.setApproval('Approved in preview. No external action was executed.')}>Approve in preview</V6Button><V6Button className="btn outline" id="hold" onClick={() => ctx.setApproval('Held for review. No external action was executed.')}>Hold for review</V6Button></div><div className="small reference-inline-2">Simulated approval · No external action</div></div></div></section>
 );
}
