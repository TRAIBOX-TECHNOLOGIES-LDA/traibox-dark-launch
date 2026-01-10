import { motion } from "framer-motion";
import { Rocket, Flag, Globe, Sparkles, Target } from "lucide-react";

const milestones = [
  {
    year: "2023",
    quarter: "Q4",
    title: "Founded",
    description: "TRAIBOX founded with seed funding to reimagine trade infrastructure.",
    icon: Rocket,
    status: "completed",
  },
  {
    year: "2024",
    quarter: "Q1",
    title: "First Pilot",
    description: "Launched pilot corridor between Portugal and Spain with early partners.",
    icon: Flag,
    status: "completed",
  },
  {
    year: "2024",
    quarter: "Q3",
    title: "EU Expansion",
    description: "Expanded to 5 EU corridors with compliance certification.",
    icon: Globe,
    status: "completed",
  },
  {
    year: "2025",
    quarter: "Q1",
    title: "Platform GA",
    description: "General availability with full compliance, finance, and proof modules.",
    icon: Sparkles,
    status: "current",
  },
  {
    year: "2025",
    quarter: "H2",
    title: "Global Reach",
    description: "Expansion to APAC and Americas corridors, enterprise tier launch.",
    icon: Target,
    status: "upcoming",
  },
];

export const Timeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h3 className="text-xl font-semibold text-foreground text-center mb-10">Our Journey</h3>
      
      <div className="relative max-w-3xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2 hidden md:block" />

        <div className="space-y-8">
          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-center gap-6 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div
                  className={`inline-block rounded-xl border p-5 transition-all duration-300 ${
                    milestone.status === "current"
                      ? "border-primary/50 bg-primary/10"
                      : milestone.status === "completed"
                      ? "border-white/10 bg-white/[0.02]"
                      : "border-white/5 bg-white/[0.01]"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary">
                      {milestone.year} {milestone.quarter}
                    </span>
                    {milestone.status === "current" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-medium text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        Now
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{milestone.title}</h4>
                  <p className="text-xs text-muted-foreground">{milestone.description}</p>
                </div>
              </div>

              {/* Center icon */}
              <div
                className={`hidden md:flex flex-shrink-0 h-12 w-12 rounded-full border-2 items-center justify-center z-10 transition-all ${
                  milestone.status === "current"
                    ? "border-primary bg-primary/20 text-primary"
                    : milestone.status === "completed"
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-white/20 bg-white/5 text-muted-foreground"
                }`}
              >
                <milestone.icon className="h-5 w-5" />
              </div>

              {/* Spacer for alignment */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
