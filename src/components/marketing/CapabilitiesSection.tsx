import { motion } from "framer-motion";
import { MessageSquare, Users, ShieldCheck, Banknote, CreditCard, FileCheck } from "lucide-react";

const capabilities = [
  {
    icon: MessageSquare,
    title: "AI capture",
    desc: "Chat or upload docs — TRAIBOX structures the trade plan.",
  },
  {
    icon: Users,
    title: "Partner network",
    desc: "Find and qualify counterparties with trust signals.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    desc: "KYC/AML, sanctions, export controls, ESG/CBAM checks.",
  },
  {
    icon: Banknote,
    title: "Finance",
    desc: "Request and compare funding offers in minutes.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    desc: "Route, execute, track, and reconcile across rails.",
  },
  {
    icon: FileCheck,
    title: "Proofs",
    desc: "Export audit packs + optional ledger anchoring.",
  },
];

export const CapabilitiesSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-primary mb-4">
            Core capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Everything you need, nothing you don't.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                <cap.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {cap.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
