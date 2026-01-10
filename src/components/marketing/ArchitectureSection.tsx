import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Layers, 
  Database, 
  ShoppingCart, 
  Truck, 
  CreditCard, 
  Shield, 
  Building2,
  Sparkles,
  Zap,
  Network
} from "lucide-react";

const systemLayers = [
  {
    label: "Your Systems",
    items: [
      { icon: Database, name: "ERP" },
      { icon: ShoppingCart, name: "E-commerce" },
      { icon: Truck, name: "Logistics" },
      { icon: CreditCard, name: "Payments" },
      { icon: Shield, name: "Compliance" },
      { icon: Building2, name: "Banking" },
    ],
  },
];

const capabilities = [
  { label: "Connect", desc: "Parties + tools" },
  { label: "Standardize", desc: "Data + workflows" },
  { label: "Verify", desc: "Compliance + risk" },
  { label: "Orchestrate", desc: "End-to-end" },
];

export const ArchitectureSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Layers className="h-3 w-3 text-primary" />
            Architecture
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            The operating layer for trade
          </h2>
          <p className="text-muted-foreground">
            Not another monolithic platform. TRAIBOX sits between your systems and trading partners, 
            orchestrating what used to require manual coordination.
          </p>
        </motion.div>

        {/* Architecture visualization */}
        <div className="max-w-5xl mx-auto">
          {/* Connected systems row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <p className="text-xs text-muted-foreground text-center mb-4 uppercase tracking-wider">Your systems & partners</p>
            <div className="flex flex-wrap justify-center gap-3">
              {systemLayers[0].items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 hover:border-white/20 transition-colors"
                >
                  <item.icon className="h-4 w-4 text-white/40" />
                  <span className="text-sm text-white/60">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Connection arrows */}
          <div className="flex justify-center my-4">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-1"
            >
              <div className="w-px h-8 bg-gradient-to-b from-white/20 to-primary/50" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/50" />
                <Network className="w-4 h-4 text-primary/50" />
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary/50" />
              </div>
              <div className="w-px h-4 bg-primary/50" />
            </motion.div>
          </div>

          {/* TRAIBOX layer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-3xl blur-xl" />
            
            <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/[0.08] to-primary/[0.02] p-8 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">TRAIBOX Trade Engine</h3>
                  <p className="text-xs text-muted-foreground">AI-orchestrated operating layer</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={cap.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/10"
                  >
                    <p className="text-sm font-medium text-primary mb-1">{cap.label}</p>
                    <p className="text-xs text-muted-foreground">{cap.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Connection arrows down */}
          <div className="flex justify-center my-4">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-1"
            >
              <div className="w-px h-4 bg-primary/50" />
              <Zap className="w-4 h-4 text-primary/50" />
              <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-white/20" />
            </motion.div>
          </div>

          {/* Output row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-muted-foreground text-center mb-4 uppercase tracking-wider">Automated outcomes</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Qualified partners",
                "Compliant deals",
                "Funded transactions",
                "Tracked shipments",
                "Settled payments",
                "Audit proofs",
              ].map((outcome, i) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Modular", desc: "Add or remove capabilities as you grow. No lock-in." },
              { title: "Extensible", desc: "Works with your existing stack. Not a replacement." },
              { title: "Intelligent", desc: "AI orchestration that learns from your workflows." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center p-5 rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <h4 className="text-sm font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
