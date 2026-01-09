import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, BadgeCheck, Banknote, FileCheck2 } from "lucide-react";
import { Hero } from "./Hero";
import { Section } from "./Section";
import { Card } from "./Card";
import { Divider } from "./Divider";
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
      <Divider />

      <Section id="pillars" title="One operating layer for modern trade">
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <Card key={p.title} icon={p.icon} title={p.title} desc={p.desc} bullets={p.bullets} index={i} />
          ))}
        </div>
      </Section>

      <Divider />

      {/* Trusted by logos placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-12"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-8 w-24 rounded bg-white/5" />
            ))}
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* CTA section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Start with a corridor. Prove the flow. Expand.
              </h2>
              <p className="text-muted-foreground">
                Launch with one corridor (e.g., PT↔ES), validate the full happy path, then scale coverage. The core stays stable.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {["Pilots → GA", "EU-ready", "Audit exports"].map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/request-access"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
              >
                Request access
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={BRAND.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                View docs
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
