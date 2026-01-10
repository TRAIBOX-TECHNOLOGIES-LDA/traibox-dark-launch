import { motion } from "framer-motion";
import { 
  Map, Code2, Network, Blocks, Shield, Check, ArrowRight,
  Home, Users, ShieldCheck, Banknote, CreditCard, FileCheck, Plug, Settings,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "./Section";
import { CTASection } from "./CTASection";
import { Divider } from "./Divider";

const pillars = [
  {
    icon: Sparkles,
    title: "AI-first, human-controlled",
    desc: "The assistant helps, the user decides.",
  },
  {
    icon: Shield,
    title: "Explainable outcomes",
    desc: "Key results include 'why'.",
  },
  {
    icon: FileCheck,
    title: "Evidence by default",
    desc: "Every step produces exportable proof.",
  },
];

const modules = [
  {
    icon: Home,
    name: "Home / My Space",
    oneLiner: "Your deals, tasks, and live status in one place.",
    bullets: ["Dashboard overview", "Active trade tracking", "Task prioritization"],
    outcome: "Always know what needs attention.",
  },
  {
    icon: Users,
    name: "My Network",
    oneLiner: "Partners, verification, trust signals, and relationship graph.",
    bullets: ["Partner discovery", "Trust scoring", "Relationship management"],
    outcome: "Build a network you can rely on.",
  },
  {
    icon: ShieldCheck,
    name: "Compliance",
    oneLiner: "KYC/AML, sanctions, export controls, ESG/CBAM with evidence.",
    bullets: ["Automated screening", "Evidence collection", "Clear action items"],
    outcome: "Stay compliant without the overhead.",
  },
  {
    icon: Banknote,
    name: "Finance",
    oneLiner: "Request offers, compare terms, understand trade-offs.",
    bullets: ["Funding requests", "Offer comparison", "Terms transparency"],
    outcome: "Make informed funding decisions.",
  },
  {
    icon: CreditCard,
    name: "Payments",
    oneLiner: "Choose route, execute, track, reconcile across rails.",
    bullets: ["Multi-rail routing", "Real-time tracking", "Automated reconciliation"],
    outcome: "Payments that just work.",
  },
  {
    icon: FileCheck,
    name: "Proofs",
    oneLiner: "Export audit packs, receipts, decision trails; optional ledger anchoring.",
    bullets: ["Audit pack exports", "Decision reasoning", "Integrity verification"],
    outcome: "Audits become exports, not hunts.",
  },
  {
    icon: Plug,
    name: "Integrations",
    oneLiner: "Connect ERPs, logistics, banking/PSPs, data providers.",
    bullets: ["Pre-built connectors", "REST & GraphQL APIs", "Webhooks & events"],
    outcome: "Work with your existing stack.",
  },
  {
    icon: Settings,
    name: "Admin",
    oneLiner: "Access controls, profiles, logs, exports for operators.",
    bullets: ["Role management", "Audit logs", "Data exports"],
    outcome: "Full control and visibility.",
  },
];

const flowMapping = [
  { step: "Capture", modules: ["My Space"], desc: "Turn messy inputs into structured trade plans." },
  { step: "Verify", modules: ["Compliance", "Network"], desc: "Screen partners and check requirements." },
  { step: "Fund & Settle", modules: ["Finance", "Payments"], desc: "Request funding, route and execute payments." },
  { step: "Prove", modules: ["Proofs", "Admin"], desc: "Export evidence and maintain audit trails." },
];

export const PlatformPage = () => {
  return (
    <div className="pt-24 md:pt-32">
      <Section
        id="platform"
        eyebrow="Platform"
        title="The operating layer for trade workflows."
        subtitle="TRAIBOX coordinates data, decisions, and execution across partners, compliance, finance, and payments — with proof built in."
      >
        {/* What makes it different - 3 pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <pillar.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        <Divider />

        {/* Modules Section */}
        <div className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-primary mb-4">
              User-facing modules
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
              What you see in the app.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each module handles a distinct part of the trade workflow. Use what you need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {modules.map((module, i) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <module.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground mb-1">{module.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{module.oneLiner}</p>
                    <ul className="space-y-1 mb-3">
                      {module.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-white/60">
                          <Check className="h-3 w-3 text-primary flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-primary font-medium">{module.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Divider />

        {/* How modules work together */}
        <div className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
              One flow, many modules.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The 4-step flow maps to specific modules at each stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {flowMapping.map((flow, i) => (
              <motion.div
                key={flow.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-5 rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-3">
                  {i + 1}
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{flow.step}</h3>
                <div className="flex flex-wrap justify-center gap-1 mb-3">
                  {flow.modules.map((mod) => (
                    <span key={mod} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {mod}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">{flow.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Regional-ready */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Map className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Regional-ready by design.</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Configure rollouts by region — data residency, rails, compliance sources — without rewriting the product.
            </p>
            <Link
              to="/request-access"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline group"
            >
              See the platform in action <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </Section>

      <CTASection />
    </div>
  );
};
