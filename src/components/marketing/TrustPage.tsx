import { motion } from "framer-motion";
import { Shield, Lock, FileCheck2, Check, Cpu, Users } from "lucide-react";
import { Section } from "./Section";
import { Card } from "./Card";
import { CTASection } from "./CTASection";
import { Newsletter } from "./Newsletter";
import { Divider } from "./Divider";

const trustBlocks = [
  {
    icon: Shield,
    title: "Security-first by design",
    desc: "Access controls, secrets hygiene, and operational guardrails built in from day one.",
    bullets: ["RBAC/ABAC", "mTLS + vault-backed secrets", "Least-privilege ops"],
  },
  {
    icon: Lock,
    title: "Privacy that holds up",
    desc: "Data minimization, EU residency defaults, and clear retention policies.",
    bullets: ["No PII on-chain", "Residency profiles", "DSAR-ready exports"],
  },
  {
    icon: FileCheck2,
    title: "Audit-ready outputs",
    desc: "Every step produces evidence. Every decision keeps its reasons.",
    bullets: ["Export bundles", "Deterministic proofs", "Verification tooling"],
  },
];

export const TrustPage = () => {
  return (
    <>
      <Section
        id="trust"
        eyebrow="Trust"
        title="Security is not a feature. It's the foundation."
        subtitle="Built from the ground up to meet the requirements of the world's most regulated industries."
      >
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {trustBlocks.map((t, i) => (
            <Card key={t.title} icon={t.icon} title={t.title} desc={t.desc} bullets={t.bullets} index={i} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Operational readiness</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Launch checklists, incident comms templates, and support tiers are defined early — so pilots don't
              become fragile one-offs.
            </p>
            <ul className="space-y-2">
              {["SLO-driven release gates", "Status page and incident lifecycle", "DR drills and backup verification"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Cpu className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Responsible AI</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              AI helps users move faster — but the system stays explainable, auditable, and safe.
            </p>
            <ul className="space-y-2">
              {["Confidence + fallbacks", "Human-in-the-loop for edge cases", "Evidence attached to outputs"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      <Divider />
      <Newsletter />
      <Divider />
      <CTASection />
    </>
  );
};
