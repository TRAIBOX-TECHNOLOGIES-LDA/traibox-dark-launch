import { motion } from "framer-motion";
import { Map, Code2, Network, Blocks, Shield, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "./Section";
import { Card } from "./Card";
import { CTASection } from "./CTASection";

const blocks = [
  {
    icon: Map,
    title: "One operating layer",
    desc: "A consistent workflow across deals — capture, decide, execute, prove.",
    bullets: ["Standardized states", "Predictable fallbacks", "Export-ready outcomes"],
  },
  {
    icon: Code2,
    title: "APIs that match the product",
    desc: "Stable contracts for trade, compliance, finance, payments, and proofs.",
    bullets: ["Idempotent operations", "SSE events", "Clear schemas"],
  },
  {
    icon: Network,
    title: "Network intelligence",
    desc: "Signals and constraints to shortlist partners with transparency.",
    bullets: ["Identity + trust signals", "Cold-start paths", "Explainable ranking"],
  },
  {
    icon: Blocks,
    title: "Proof layer",
    desc: "Deterministic proofs + optional anchoring to verify integrity.",
    bullets: ["No PII on-chain", "Verifier tooling", "Audit exports"],
  },
];

export const PlatformPage = () => {
  return (
    <>
      <Section
        id="platform"
        eyebrow="Platform"
        title="Built for the complexity of global trade"
        subtitle="A single operating layer that handles capture, decisions, execution, and proof generation."
      >
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {blocks.map((b, i) => (
            <Card key={b.title} icon={b.icon} title={b.title} desc={b.desc} bullets={b.bullets} index={i} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">What teams ship faster with TRAIBOX</h3>
            <ul className="space-y-3">
              {[
                "A shared workflow and vocabulary across product, ops, and engineering.",
                "Clear integration points for providers (banks, compliance vendors, networks).",
                "Exports and proof packs designed for audits and counterparties.",
                "Release readiness gates linked to reliability targets — not vibes.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Designed for trust</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Data minimization, audit trails, and deterministic proofs are part of the product, not a late add-on.
            </p>
            <ul className="space-y-2 mb-6">
              {["EU residency defaults", "No silent failures", "Evidence attached to decisions"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/request-access"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline group"
            >
              Get started <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </Section>

      <CTASection />
    </>
  );
};
