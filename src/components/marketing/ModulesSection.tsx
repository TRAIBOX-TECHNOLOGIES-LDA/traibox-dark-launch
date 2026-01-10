import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  Banknote, 
  CreditCard, 
  ShieldCheck, 
  FileCheck2, 
  Settings 
} from "lucide-react";

const modules = [
  {
    icon: LayoutDashboard,
    name: "Home / My Space",
    tagline: "Your command center for trades, tasks, and status.",
    bullets: [
      "Create new trades via chat or uploads",
      "Track progress across all stages",
      "See what needs attention now",
    ],
  },
  {
    icon: Users,
    name: "My Network",
    tagline: "Find and compare verified partners across domains.",
    bullets: [
      "Partner discovery with fit scoring",
      "LEI/vLEI identity verification",
      "Trust signals and corridor coverage",
    ],
  },
  {
    icon: Banknote,
    name: "Finance",
    tagline: "Request, compare, and accept funding options.",
    bullets: [
      "Multiple product types supported",
      "Sustainable Trade Finance signals",
      "Clear reasons for each offer",
    ],
  },
  {
    icon: CreditCard,
    name: "Payments",
    tagline: "Execute payments and track outcomes.",
    bullets: [
      "Route selection with cost estimates",
      "Status tracking through completion",
      "Reconciliation and exports",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Compliance",
    tagline: "Run checks and get clear answers with evidence.",
    bullets: [
      "KYC/KYB, AML, sanctions screening",
      "Export controls and jurisdiction flags",
      "Downloadable reports for audits",
    ],
  },
  {
    icon: FileCheck2,
    name: "Proofs",
    tagline: "Export complete proof packs and verify integrity.",
    bullets: [
      "Deterministic bundles with hashes",
      "Verifiable without platform access",
      "Optional ledger anchoring",
    ],
  },
  {
    icon: Settings,
    name: "Admin",
    tagline: "Manage org access, profiles, and integrations.",
    bullets: [
      "Role-based access controls",
      "Deployment profile settings",
      "API keys and webhook configs",
    ],
  },
];

export const ModulesSection = () => {
  return (
    <section id="modules" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-primary mb-4">
            Modules
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What users see in the app
          </h2>
          <p className="text-muted-foreground">
            A small set of simple modules. Complex work happens under the hood.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {modules.map((module, i) => (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <module.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{module.name}</h3>
              </div>
              
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                {module.tagline}
              </p>
              
              <ul className="space-y-2">
                {module.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-white/60">
                    <span className="w-1 h-1 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
