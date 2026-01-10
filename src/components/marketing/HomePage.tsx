import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, BadgeCheck, Banknote, FileCheck2 } from "lucide-react";
import { Hero } from "./Hero";
import { Section } from "./Section";
import { Card } from "./Card";
import { Divider } from "./Divider";
import { HowItWorks } from "./HowItWorks";
import { Testimonials } from "./Testimonials";
import { Stats } from "./Stats";
import { FAQ } from "./FAQ";
import { CTASection } from "./CTASection";
import { TrustedBy } from "./TrustedBy";
import { FeatureShowcase } from "./FeatureShowcase";
import { ComparisonTable } from "./ComparisonTable";
import { InteractiveDemo } from "./InteractiveDemo";
import { Newsletter } from "./Newsletter";
import { ArchitectureSection } from "./ArchitectureSection";
import { IntegrationsSection } from "./IntegrationsSection";
import { BRAND } from "@/lib/constants";

const pillars = [
  {
    icon: Globe,
    title: "From intent to execution",
    desc: "Turn documents and messages into a structured deal you can run — fast.",
    bullets: ["Chat-first capture + uploads", "Clean states and guided workflows", "Every step produces evidence"],
  },
  {
    icon: BadgeCheck,
    title: "Compliance that teams can trust",
    desc: "KYC/AML, sanctions, export controls, ESG/CBAM — with clear outcomes.",
    bullets: ["Explainable results", "Evidence-ready exports", "Designed for audits"],
  },
  {
    icon: Banknote,
    title: "Finance + payments, together",
    desc: "Compare funding options and execute payments in one place — with reconciliation.",
    bullets: ["Funding offers (STF and beyond)", "Payment routing + execution", "Reconciliation pipelines"],
  },
  {
    icon: FileCheck2,
    title: "Proofs that verify",
    desc: "Generate audit packs with deterministic proofs and optional ledger anchoring.",
    bullets: ["Export bundles", "Verifiable integrity", "No sensitive data on-chain"],
  },
];

export const HomePage = () => {
  return (
    <>
      <Hero />
      
      <TrustedBy />

      <Divider />
      <Stats />
      <Divider />

      {/* Architecture - The Operating Layer */}
      <ArchitectureSection />
      <Divider />

      <Section id="pillars" title="One operating layer for modern trade">
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <Card key={p.title} icon={p.icon} title={p.title} desc={p.desc} bullets={p.bullets} index={i} />
          ))}
        </div>
      </Section>

      <Divider />
      <FeatureShowcase />
      <Divider />

      <HowItWorks />
      
      <Divider />

      {/* Integrations */}
      <IntegrationsSection />
      <Divider />

      <Section id="demo" title="Experience the platform">
        <InteractiveDemo />
      </Section>

      <Divider />
      <ComparisonTable />
      <Divider />

      <Testimonials />

      <Divider />
      <FAQ />
      <Divider />

      <Newsletter />
      <Divider />

      <CTASection />
    </>
  );
};
