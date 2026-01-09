import { motion } from "framer-motion";
import { Map, Users, Banknote, Shield, FileCheck2, Building2, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { Card } from "./Card";
import { CTASection } from "./CTASection";

const modules = [
  {
    icon: Map,
    name: "Home / My Space",
    oneLiner: "Your live trade workspace — deals, tasks, and next steps in one view.",
    bullets: ["Deal inbox + timeline", "Alerts, approvals, and handoffs", "Exports and proofs on demand"],
  },
  {
    icon: Users,
    name: "My Network",
    oneLiner: "Find and qualify partners with transparent trust signals.",
    bullets: ["Search + shortlist", "Identity and badges", "Invites and relationship graph"],
  },
  {
    icon: Banknote,
    name: "Finance",
    oneLiner: "Funding + payments together — compare options, execute, reconcile.",
    bullets: ["Funding offers (STF and beyond)", "Payments routing + execution", "Reconciliation and returns"],
  },
  {
    icon: Shield,
    name: "Compliance",
    oneLiner: "KYC/AML, sanctions, export controls, ESG/CBAM — with evidence.",
    bullets: ["Pass/warn/fail outcomes", "Explainable reasons", "Audit-ready reports"],
  },
  {
    icon: FileCheck2,
    name: "Proofs (Ledger)",
    oneLiner: "Verifiable audit packs — deterministic proofs and optional anchoring.",
    bullets: ["Export bundles", "Verification tooling", "No sensitive data on-chain"],
  },
  {
    icon: Building2,
    name: "Settings / Admin",
    oneLiner: "Org control center — roles, access, profiles, integrations.",
    bullets: ["RBAC/ABAC", "Deployment profiles", "Diagnostics + logs"],
  },
];

export const ModulesPage = () => {
  return (
    <>
      <Section
        id="modules"
        eyebrow="Modules"
        title="A complete workspace for trade operations"
        subtitle="Six integrated modules that cover the full lifecycle of a deal."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {modules.map((m, i) => (
            <Card key={m.name} icon={m.icon} title={m.name} desc={m.oneLiner} bullets={m.bullets} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary/5 to-transparent p-8 max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
            <Sparkles className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">AI-first interface (across every module)</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            The chat layer helps users move faster: capture messy inputs, explain decisions, and guide next steps.
            It's not a separate product area — it's how the whole app feels.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Chat + forms", "Explainability", "Safe fallbacks", "Context-aware"].map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs text-primary">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </Section>

      <CTASection />
    </>
  );
};
