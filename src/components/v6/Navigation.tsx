import { useV6 } from './ExperienceContext';
import { V6Button } from './V6Button';
import { Brand } from './Brand';
import { Rows } from './Rows';

export function Navigation() {
 const ctx = useV6();
 return (
<header className="header"><div className="wrap nav"><a className="word" href="#home" onClick={() => ctx.setMenuOpen(false)}><Brand light={false} compact={false} /></a><nav id="nav" aria-label="Main navigation" className={`navlinks${ctx.menuOpen ? " open" : ""}`}><a href="#platform" onClick={() => ctx.setMenuOpen(false)}>Platform</a><a href="#architecture" onClick={() => ctx.setMenuOpen(false)}>Architecture</a><a href="#how-it-works" onClick={() => ctx.setMenuOpen(false)}>How it works</a><a href="#solutions" onClick={() => ctx.setMenuOpen(false)}>Solutions</a><a href="#company" onClick={() => ctx.setMenuOpen(false)}>Company</a></nav><V6Button aria-label="Toggle menu" className="menu" aria-expanded={ctx.menuOpen} onClick={() => ctx.setMenuOpen(!ctx.menuOpen)} aria-controls="nav">☰</V6Button><V6Button className="btn" data-access="" onClick={() => ctx.openAccess(false)}>Request early access ↗</V6Button></div></header>
 );
}
