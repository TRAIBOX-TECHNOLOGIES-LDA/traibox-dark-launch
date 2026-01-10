import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type FeatureStatus = boolean | "partial";

interface Feature {
  name: string;
  traibox: FeatureStatus;
  legacy: FeatureStatus;
  spreadsheets: FeatureStatus;
}

const features: Feature[] = [
  { name: "End-to-end deal workflow", traibox: true, legacy: "partial", spreadsheets: false },
  { name: "Integrated compliance checks", traibox: true, legacy: "partial", spreadsheets: false },
  { name: "Real-time partner network", traibox: true, legacy: false, spreadsheets: false },
  { name: "AI-first interface", traibox: true, legacy: false, spreadsheets: false },
  { name: "Funding + payments", traibox: true, legacy: "partial", spreadsheets: false },
  { name: "Verifiable audit proofs", traibox: true, legacy: false, spreadsheets: false },
  { name: "Explainable decisions", traibox: true, legacy: false, spreadsheets: false },
  { name: "API-first architecture", traibox: true, legacy: "partial", spreadsheets: false },
];

const StatusIcon = ({ status }: { status: boolean | "partial" }) => {
  if (status === true) {
    return (
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20">
        <Check className="w-4 h-4 text-green-400" />
      </div>
    );
  }
  if (status === "partial") {
    return (
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/20">
        <Minus className="w-4 h-4 text-yellow-400" />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20">
      <X className="w-4 h-4 text-red-400" />
    </div>
  );
};

export const ComparisonTable = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-primary mb-4">
            Why TRAIBOX
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Compare your options
          </h2>
          <p className="text-muted-foreground">
            See how TRAIBOX stacks up against traditional approaches.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 p-4 md:p-6 border-b border-white/10 bg-white/[0.02]">
            <div className="text-sm font-medium text-muted-foreground">Feature</div>
            <div className="text-center">
              <span className="text-sm font-semibold text-primary">TRAIBOX</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-medium text-muted-foreground">Legacy TMS</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-medium text-muted-foreground">Spreadsheets</span>
            </div>
          </div>

          {/* Rows */}
          {features.map((feature, i) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`grid grid-cols-4 gap-4 p-4 md:p-6 ${
                i < features.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <div className="text-sm text-foreground">{feature.name}</div>
              <div className="flex justify-center">
                <StatusIcon status={feature.traibox} />
              </div>
              <div className="flex justify-center">
                <StatusIcon status={feature.legacy} />
              </div>
              <div className="flex justify-center">
                <StatusIcon status={feature.spreadsheets} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
