import { useV6 } from './ExperienceContext';
import { V6Button } from './V6Button';
import { Brand } from './Brand';
import { Rows } from './Rows';

export function CompanySection() {
 const ctx = useV6();
 return (
<section className="dark" id="company"><div className="wrap section cta"><div className="mono">Building the next era of trade</div><h2>Less work.<br />More business.</h2><p>Bring a real deal to TRAIBOX. Request early access to try the private beta, or become an early partner and help shape the product around the way your business works.</p><div className="actions cta-actions"><V6Button className="btn light" data-access="" onClick={() => ctx.openAccess(false)}>Request early access ↗</V6Button><V6Button className="btn outline partner-btn" data-access="" data-partner="" onClick={() => ctx.openAccess(true)}>Become an early partner ↗</V6Button></div><div className="mono reference-inline-3">Private beta in preparation</div></div><footer className="wrap footer"><div><a className="word" href="#home" onClick={() => ctx.setMenuOpen(false)}><Brand light={true} compact={false} /></a><div className="small reference-inline-4">Make trade flow. Everywhere.</div></div><div className="mono">© 2026 TRAIBOX / Website concept</div><a className="footer-integration" href="#integrations" onClick={() => ctx.setMenuOpen(false)}>Integrations ↗</a></footer></section>
 );
}
