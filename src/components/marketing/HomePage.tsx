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
      <ProblemSection />
      
      <Divider />
      <OutcomesSection />

      <Divider />
      <CapabilitiesSection />

      <Divider />
      <HowItWorks />

      <Divider />
      <EcosystemSection />

      <Divider />
      <ProofsSection />

      <Divider />
      <FAQ />

      <Divider />
      <CTASection />
    </>
  );
};
