import { useEffect } from 'react';
import { ExperienceProvider, useV6 } from './ExperienceContext';
import { Navigation } from './Navigation';
import { HeroExperience } from './HeroExperience';
import { OpportunitySection } from './OpportunitySection';
import { PlatformExperience } from './PlatformExperience';
import { ArchitectureExperience } from './ArchitectureExperience';
import { JourneyExperience } from './JourneyExperience';
import { IntegrationsExperience } from './IntegrationsExperience';
import { DealWalkthrough } from './DealWalkthrough';
import { MemorySection } from './MemorySection';
import { TrustSection } from './TrustSection';
import { SolutionsExperience } from './SolutionsExperience';
import { CompanySection } from './CompanySection';
import { AccessDialog } from './AccessForm';
import './reference.css';
import './adaptations.css';

function WebsiteContent() {
  const ctx = useV6();
  useEffect(() => {
    const elements = document.querySelectorAll('.v6-site section');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('motion-offscreen', !entry.isIntersecting)));
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <div className={`v6-site${ctx.motionPaused ? ' motion-paused' : ''}`}>
    <Navigation />
    <main id="home"><HeroExperience /><OpportunitySection /><PlatformExperience /><ArchitectureExperience /><JourneyExperience /><IntegrationsExperience /><DealWalkthrough /><MemorySection /><TrustSection /><SolutionsExperience /><CompanySection /></main>
    <AccessDialog />
  </div>;
}
export default function Website() { return <ExperienceProvider><WebsiteContent /></ExperienceProvider>; }