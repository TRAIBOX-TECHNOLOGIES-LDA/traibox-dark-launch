import { motion } from "framer-motion";
import { TrendingUp, Clock, Shield, FileCheck, Users, Globe2, Zap } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { icon: TrendingUp, value: "10x", label: "Faster deal processing", color: "from-emerald-500/20 to-emerald-500/5" },
  { icon: Clock, value: "80%", label: "Reduction in manual work", color: "from-blue-500/20 to-blue-500/5" },
  { icon: Shield, value: "100%", label: "Audit trail coverage", color: "from-purple-500/20 to-purple-500/5" },
  { icon: FileCheck, value: "24/7", label: "Compliance monitoring", color: "from-amber-500/20 to-amber-500/5" },
];

const additionalStats = [
  { icon: Users, value: "500+", label: "Enterprise clients" },
  { icon: Globe2, value: "45+", label: "Countries served" },
  { icon: Zap, value: "99.9%", label: "Platform uptime" },
];

export const Stats = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative text-center p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={stat.value} delay={i * 100} />
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 py-8 px-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm"
        >
          {additionalStats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-3">
              <stat.icon className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xl md:text-2xl font-semibold text-foreground">
                  <AnimatedCounter value={stat.value} delay={500 + i * 100} />
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
