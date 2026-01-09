import { motion } from "framer-motion";
import { TrendingUp, Clock, Shield, FileCheck } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "10x", label: "Faster deal processing" },
  { icon: Clock, value: "80%", label: "Reduction in manual work" },
  { icon: Shield, value: "100%", label: "Audit trail coverage" },
  { icon: FileCheck, value: "24/7", label: "Compliance monitoring" },
];

export const Stats = () => {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <motion.p
                className="text-3xl md:text-4xl font-semibold text-foreground mb-1"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
