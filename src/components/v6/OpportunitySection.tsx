import { useV6 } from './ExperienceContext';
import { V6Button } from './V6Button';
import { Brand } from './Brand';
import { Rows } from './Rows';

export function OpportunitySection() {
 const ctx = useV6();
 return (
<section className="dark section"><div className="wrap"><div className="intro"><div><div className="mono">01 / The opportunity</div><h2>Doing business is hard enough.<br /><span>The work around it shouldn't be.</span></h2></div><p>Deals start messy: emails, PDFs, spreadsheets and conversations. Then someone has to piece it all together, check the details and keep everyone moving.</p></div><div className="problem"><span className="num">01</span><h3>Trade breaks in the gaps.</h3><p>Your team spends too much time chasing information and passing work from one person or system to another.</p></div><div className="problem"><span className="num">02</span><h3>Uncertainty puts money at risk.</h3><p>Terms change, requirements shift and missing information can become an expensive surprise.</p></div><div className="problem"><span className="num">03</span><h3>Work keeps repeating.</h3><p>What you learned on the last deal is often buried in an inbox or spreadsheet. The next deal starts all over again.</p></div></div></section>
 );
}
