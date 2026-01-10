import { motion } from "framer-motion";
import { 
  MessageSquare, 
  FileSearch, 
  Users, 
  CreditCard, 
  Shield, 
  FileCheck,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: MessageSquare,
    title: "Chat-first interface",
    description: "Capture messy inputs naturally. The AI structures your deal from conversations and documents.",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: FileSearch,
    title: "Smart document processing",
    description: "Upload invoices, contracts, shipping docs. Extract key data automatically with validation.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Users,
    title: "Partner network",
    description: "Find and qualify partners with transparent trust signals. Build your network graph.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: CreditCard,
    title: "Integrated payments",
    description: "Route payments through optimal channels. Track execution and reconciliation in one place.",
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    icon: Shield,
    title: "Real-time compliance",
    description: "KYC/AML, sanctions, export controls checked continuously. Clear pass/fail with evidence.",
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    icon: FileCheck,
    title: "Verifiable proofs",
    description: "Generate audit packs with deterministic proofs. Optional ledger anchoring for extra integrity.",
    color: "from-indigo-500/20 to-violet-500/20",
  },
];

export const FeatureShowcase = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-primary mb-4">
            Core capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Everything you need to run global trade
          </h2>
          <p className="text-muted-foreground text-lg">
            From capturing intent to generating verifiable proofs — all in one connected platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-primary/30 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-primary mb-4 group-hover:bg-white/10 transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/request-access"
            className="group inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            See all features in action
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
