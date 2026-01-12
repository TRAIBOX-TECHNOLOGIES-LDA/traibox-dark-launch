import { motion } from "framer-motion";
import { ArrowRight, FileInput, ShieldCheck, Wallet, FileCheck, Zap } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  number: number;
  title: string;
  action: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: FileInput,
    number: 1,
    title: "Capture",
    action: "Capture",
    description: "Drop docs, forward an email, or chat. TRAIBOX turns messy inputs into a clean trade plan.",
  },
  {
    icon: ShieldCheck,
    number: 2,
    title: "Verify",
    action: "Verify",
    description: "Run KYC/AML, sanctions, export controls, ESG/CBAM checks with clear outcomes and evidence.",
  },
  {
    icon: Wallet,
    number: 3,
    title: "Fund & Settle",
    action: "Fund & Settle",
    description: "Request funding, compare options, route payments, track status, and reconcile — all in one place.",
  },
  {
    icon: FileCheck,
    number: 4,
    title: "Prove",
    action: "Prove",
    description: "Export an audit pack with receipts and decision reasons. Optional ledger anchoring for integrity.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
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
            Four steps. Full clarity.
          </h2>
          <p className="text-white/70">
            From first conversation to verifiable proof — one flow that handles the complexity.
          </p>
        </motion.div>

        {/* Desktop flow - 4 steps */}
        <div className="hidden lg:block relative mb-16">
          {/* Connection line */}
          <div className="absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          
          <div className="grid grid-cols-4 gap-6">
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
                      className="w-16 h-16 rounded-2xl bg-background border border-white/10 flex items-center justify-center shadow-lg shadow-primary/5"
                      whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                      transition={{ duration: 0.2 }}
                    >
                      <step.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {step.number}
                    </div>
                  </div>
                  <span className="text-xs text-primary uppercase tracking-wider mb-1 font-medium">{step.action}</span>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed">{step.description}</p>
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
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] text-primary uppercase tracking-wider font-medium">{step.action}</span>
                <h3 className="text-sm font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-white/20 flex-shrink-0 mt-4" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-sm text-white/70">
              <span className="text-foreground font-medium">Start with one corridor.</span> Scale when ready.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
