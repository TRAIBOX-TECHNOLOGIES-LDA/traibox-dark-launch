import { motion } from "framer-motion";
import { Map, Users, Banknote, Shield, FileCheck2, Building2 } from "lucide-react";
import { Section } from "./Section";
import { Card } from "./Card";

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
        className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 max-w-2xl mx-auto text-center"
      >
        <h3 className="text-lg font-semibold text-foreground mb-3">AI-first interface (across every module)</h3>
        <p className="text-sm text-muted-foreground mb-4">
          The chat layer helps users move faster: capture messy inputs, explain decisions, and guide next steps.
          It's not a separate product area — it's how the whole app feels.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["Chat + forms", "Explainability", "Safe fallbacks"].map((tag) => (
            <span key={tag} className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
