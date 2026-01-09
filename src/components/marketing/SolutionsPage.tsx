import { motion } from "framer-motion";
import { Briefcase, Globe, Banknote, Building2, ArrowRight, Target } from "lucide-react";
import { Section } from "./Section";
import { Card } from "./Card";
import { CTASection } from "./CTASection";

const solutions = [
  {
    icon: Briefcase,
    title: "Importers & exporters",
    desc: "Run deals faster, with fewer surprises. Make audits boring again.",
    bullets: ["Partner qualification", "Funding + payment execution", "Proof packs for auditors"],
  },
  {
    icon: Globe,
    title: "Logistics & freight",
    desc: "One collaboration layer across shippers, forwarders, and carriers.",
    bullets: ["Shared deal context", "Compliance visibility", "Event-driven updates"],
  },
  {
    icon: Banknote,
    title: "Banks & fintech",
    desc: "Offer finance where it matters — inside the trade workflow.",
    bullets: ["Structured deal inputs", "Transparent risk signals", "Evidence bundles"],
  },
  {
    icon: Building2,
    title: "Enterprise compliance",
    desc: "Prove decisions with evidence, and keep controls consistent across teams.",
    bullets: ["Audit trails", "Exports", "Operational readiness"],
  },
];

export const SolutionsPage = () => {
  return (
    <>
      <Section
        id="solutions"
        eyebrow="Solutions"
        title="Built for different parts of the trade ecosystem"
        subtitle="Whether you're moving goods, financing deals, or ensuring compliance."
      >
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {solutions.map((s, i) => (
            <Card key={s.title} icon={s.icon} title={s.title} desc={s.desc} bullets={s.bullets} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Start narrow, then expand</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            We recommend starting with a single corridor and a single set of users. Once the full flow is stable,
            expand coverage — new rails, new markets, new compliance rules — without resetting the system.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-primary hover:underline group">
            See implementation guide <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </Section>

      <CTASection />
    </>
  );
};
