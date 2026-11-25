import { useV6 } from './ExperienceContext';
import { V6Button } from './V6Button';
import { Brand } from './Brand';
import { Rows } from './Rows';

export function IntegrationsExperience() {
 const ctx = useV6();
 return (
<section className="section stack-section" id="integrations"><div className="wrap"><div className="mono">CONNECTED BY DESIGN / INTEGRATIONS</div><div className="intro"><h2>Keep your stack.<br />Connect the work.</h2><p>TRAIBOX is designed to connect with the systems you already use — ERPs, CRMs, marketplaces, logistics tools, banks, payment providers and compliance services. Through APIs, webhooks and events, information can travel with the deal. No rip-and-replace required.</p></div><div className="stack-flow"><div className="stack-sources"><V6Button data-stack="0" aria-pressed={ctx.stack === 0} className={"" + (ctx.stack === 0 ? " active" : "")} onClick={() => ctx.setStack(0)}>ERP &amp; CRM</V6Button><V6Button data-stack="1" aria-pressed={ctx.stack === 1} className={"" + (ctx.stack === 1 ? " active" : "")} onClick={() => ctx.setStack(1)}>Marketplaces</V6Button><V6Button data-stack="2" aria-pressed={ctx.stack === 2} className={"" + (ctx.stack === 2 ? " active" : "")} onClick={() => ctx.setStack(2)}>Logistics</V6Button><V6Button data-stack="3" aria-pressed={ctx.stack === 3} className={"" + (ctx.stack === 3 ? " active" : "")} onClick={() => ctx.setStack(3)}>Banks &amp; PSPs</V6Button><V6Button data-stack="4" aria-pressed={ctx.stack === 4} className={"" + (ctx.stack === 4 ? " active" : "")} onClick={() => ctx.setStack(4)}>Compliance</V6Button></div><div className="stack-link"><span>APIs · WEBHOOKS · EVENTS</span><i></i></div><div className="stack-core"><b>TRAIBOX</b><span>Shared deal context</span></div><div className="stack-output"><div className="mono">EXAMPLE / PLANNED CONNECTIVITY</div><h3 id="stack-title">{ctx.stackData[0]}</h3><p id="stack-desc">{ctx.stackData[1]}</p></div></div><p className="small">Conceptual integrations; availability depends on provider access, permissions and implementation.</p></div></section>
 );
}
