import { Hero } from "./Hero";
import { Divider } from "./Divider";
import { ProblemSection } from "./ProblemSection";
import { OutcomesSection } from "./OutcomesSection";
import { CapabilitiesSection } from "./CapabilitiesSection";
import { HowItWorks } from "./HowItWorks";
import { EcosystemSection } from "./EcosystemSection";
import { ProofsSection } from "./ProofsSection";
import { FAQ } from "./FAQ";
import { CTASection } from "./CTASection";

export const HomePage = () => {
  return (
    <>
      <Hero />

      <Divider />
      <section id="problem">
        <ProblemSection />
      </section>
      
      <Divider />
      <section id="outcomes">
        <OutcomesSection />
      </section>

      <Divider />
      <section id="capabilities">
        <CapabilitiesSection />
      </section>

      <Divider />
      <section id="how-it-works">
        <HowItWorks />
      </section>

      <Divider />
      <section id="ecosystem">
        <EcosystemSection />
      </section>

      <Divider />
      <section id="proofs">
        <ProofsSection />
      </section>

      <Divider />
      <section id="faq">
        <FAQ />
      </section>

      <Divider />
      <section id="cta">
        <CTASection />
      </section>
    </>
  );
};
