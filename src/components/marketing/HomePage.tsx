import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Hero } from "./Hero";
import { Divider } from "./Divider";
import { HowItWorks } from "./HowItWorks";
import { FAQ } from "./FAQ";
import { CTASection } from "./CTASection";
import { DesignedOutcomes } from "./DesignedOutcomes";
import { ModulesSection } from "./ModulesSection";
import { TrustPosture } from "./TrustPosture";
import { ArchitectureSection } from "./ArchitectureSection";
import { ComparisonTable } from "./ComparisonTable";
import { BRAND } from "@/lib/constants";

export const HomePage = () => {
  return (
    <>
      <Hero />

      <Divider />
      <DesignedOutcomes />
      <Divider />

      {/* Architecture - The Operating Layer */}
      <ArchitectureSection />
      <Divider />

      {/* Modules - What users see in the app */}
      <ModulesSection />
      <Divider />

      {/* How it works flow */}
      <HowItWorks />
      <Divider />

      {/* Comparison - Why TRAIBOX */}
      <ComparisonTable />
      <Divider />

      {/* Trust & Security Posture */}
      <TrustPosture />
      <Divider />

      {/* FAQ */}
      <FAQ />
      <Divider />

      {/* Final CTA */}
      <CTASection />
    </>
  );
};
