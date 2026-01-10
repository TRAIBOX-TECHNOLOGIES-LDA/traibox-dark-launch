import { motion } from "framer-motion";
import { Clock, Layers, FileCheck } from "lucide-react";

const outcomes = [
  {
    icon: Clock,
    title: "Faster decisions",
    desc: "Turn scattered documents, emails, and spreadsheets into structured trades with clear next steps.",
  },
  {
    icon: Layers,
    title: "Fewer portals",
    desc: "One workspace for compliance, funding, payments, and proofs — no more juggling systems.",
  },
  {
    icon: FileCheck,
    title: "Evidence built-in",
    desc: "Every action produces a traceable record. Audits become exports, not scavenger hunts.",
  },
];

export const DesignedOutcomes = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-primary mb-4">
            Designed outcomes
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What teams actually get
          </h2>
          <p className="text-muted-foreground">
            Built for how trade operations really work — not how software thinks they should.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative text-center p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <outcome.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {outcome.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {outcome.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
