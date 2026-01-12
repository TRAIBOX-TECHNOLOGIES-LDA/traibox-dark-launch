import { motion } from "framer-motion";
import { AlertCircle, FileWarning, Clock, Search } from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    text: "Deals start messy — emails, PDFs, spreadsheets.",
  },
  {
    icon: Clock,
    text: "Compliance is fragmented and slow.",
  },
  {
    icon: AlertCircle,
    text: "Payments fail or get delayed, reconciliation is manual.",
  },
  {
    icon: Search,
    text: "Audits become scavenger hunts.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Trade breaks in the gaps.
          </h2>
          <p className="text-white/70">
            Cross-border transactions involve too many tools, too many handoffs, and too little visibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 p-5 rounded-xl border border-white/10 bg-white/[0.02]"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                <problem.icon className="h-5 w-5 text-red-400" />
              </div>
              <p className="text-sm text-white/70 leading-relaxed pt-2">
                {problem.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
