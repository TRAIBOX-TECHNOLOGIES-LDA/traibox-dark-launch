import { useV6 } from './ExperienceContext';
import { V6Button } from './V6Button';
import { Brand } from './Brand';
import { Rows } from './Rows';

export function MemorySection() {
 const ctx = useV6();
 return (
<section className="section"><div className="wrap two"><div><div className="mono">05 / Continuous intelligence</div><h2>Never start from zero.</h2><p>Your team already knows a great deal about the way you do business. TRAIBOX is designed to keep the useful details from each transaction close at hand for the next.</p><div className="features"><details className="feature" open><summary>Intelligence in context</summary><p>Work with relevant information about your business, counterparties, markets and commercial conditions.</p></details><details className="feature"><summary>Trade Passport</summary><p>Reuse relevant company information and supporting evidence with controlled disclosure.</p></details><details className="feature"><summary>Payments &amp; Finance</summary><p>Coordinate settlement and financing through relevant providers.</p></details><details className="feature"><summary>Evidence &amp; traceability</summary><p>Organize requirements, approvals and supporting records.</p></details></div></div><div className="memory"><div className="mono">Your business intelligence</div><div className="layers"><div className="stack"><div className="layer">Context</div></div><div className="stack"><div className="layer">Evidence</div><div className="layer">Context</div></div><div className="stack"><div className="layer">Decisions</div><div className="layer">Evidence</div><div className="layer">Context</div></div><div className="stack"><div className="layer">Outcomes</div><div className="layer">Decisions</div><div className="layer">Evidence</div><div className="layer">Context</div></div></div><div className="labels mono"><span>TX 01</span><span>TX 02</span><span>TX 03</span><span>TX 04</span></div><div className="small">Illustrative accumulation of reusable, business-specific context.</div></div></div></section>
 );
}
