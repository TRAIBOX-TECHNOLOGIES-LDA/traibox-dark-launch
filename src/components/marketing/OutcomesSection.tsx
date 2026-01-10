import { motion } from "framer-motion";
import { Zap, Eye, Scale, FileCheck } from "lucide-react";

const outcomes = [
  {
    icon: Zap,
    title: "Faster execution",
    desc: "Move from intent to action without rework.",
  },
  {
    icon: Eye,
    title: "Fewer surprises",
    desc: "Issues show up early, with clear next steps.",
  },
  {
    icon: Scale,
    title: "Better options",
    desc: "Compare routes and offers with transparent reasons.",
  },
  {
    icon: FileCheck,
    title: "Audit-ready by default",
    desc: "Evidence is produced as you work.",
  },
];

export const OutcomesSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-primary mb-4">
            What TRAIBOX does
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Run the full trade flow with clarity.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
                <outcome.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {outcome.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {outcome.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
