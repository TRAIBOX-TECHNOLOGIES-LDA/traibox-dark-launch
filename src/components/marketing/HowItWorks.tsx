import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Users, Shield, Banknote, FileCheck2, Zap } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: MessageSquare,
    title: "Capture",
    description: "Start with chat or documents. TRAIBOX structures the deal automatically.",
  },
  {
    icon: Users,
    title: "Match",
    description: "Network intelligence surfaces the right partners with transparent signals.",
  },
  {
    icon: Shield,
    title: "Comply",
    description: "KYC/AML, sanctions, and export controls with explainable outcomes.",
  },
  {
    icon: Banknote,
    title: "Finance",
    description: "Compare funding options and execute payments in one workflow.",
  },
  {
    icon: FileCheck2,
    title: "Prove",
    description: "Generate audit packs with deterministic, verifiable proofs.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Zap className="h-3 w-3 text-primary" />
            How it works
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            From intent to proof in one flow
          </h2>
          <p className="text-muted-foreground">
            Every deal follows the same structured path — capture, match, comply, finance, prove.
          </p>
        </motion.div>

        {/* Desktop flow */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 mb-4">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-background border border-white/10 flex items-center justify-center"
                      whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                      transition={{ duration: 0.2 }}
                    >
                      <step.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    {i < steps.length - 1 && (
                      <ArrowRight className="absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile flow */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02]"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-primary font-medium">Step {i + 1}</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
