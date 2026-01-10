import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Shield, Quote } from "lucide-react";

const caseStudies = [
  {
    company: "TechDistrib Europe",
    industry: "Electronics Distribution",
    logo: "TD",
    corridor: "PT ↔ ES",
    quote: "TRAIBOX reduced our deal processing time from days to hours. The compliance automation alone saved us 20 hours per week.",
    author: "Maria Santos",
    role: "Head of Operations",
    metrics: [
      { label: "Processing time", before: "3 days", after: "2 hours", improvement: "97%" },
      { label: "Compliance costs", before: "€5,000/mo", after: "€800/mo", improvement: "84%" },
      { label: "Deal throughput", before: "50/mo", after: "200/mo", improvement: "4x" },
    ],
  },
  {
    company: "Nordic Fresh Imports",
    industry: "Food & Beverage",
    logo: "NF",
    corridor: "NL ↔ SE",
    quote: "The funding marketplace gave us access to competitive rates we couldn't get elsewhere. Integration took just 2 weeks.",
    author: "Erik Lindgren",
    role: "CFO",
    metrics: [
      { label: "Financing rate", before: "4.2%", after: "2.8%", improvement: "33%" },
      { label: "Integration time", before: "3 months", after: "2 weeks", improvement: "85%" },
      { label: "Partner onboarding", before: "2 weeks", after: "1 day", improvement: "93%" },
    ],
  },
  {
    company: "MedSupply Global",
    industry: "Medical Equipment",
    logo: "MS",
    corridor: "DE ↔ FR",
    quote: "Audit-ready proofs are a game-changer for regulated industries. Our compliance team finally has time for strategic work.",
    author: "Dr. Klaus Weber",
    role: "Compliance Director",
    metrics: [
      { label: "Audit prep time", before: "2 weeks", after: "1 hour", improvement: "99%" },
      { label: "Documentation errors", before: "12%", after: "0.5%", improvement: "96%" },
      { label: "Regulatory findings", before: "8/year", after: "0/year", improvement: "100%" },
    ],
  },
];

export const CaseStudies = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="text-center mb-10">
        <h3 className="text-2xl font-semibold text-foreground mb-3">
          Customer Success Stories
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          See how leading companies are transforming their trade operations with TRAIBOX.
        </p>
      </div>

      <div className="space-y-8">
        {caseStudies.map((study, i) => (
          <motion.div
            key={study.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-primary/30 transition-all duration-300"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left side - Quote */}
              <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-white/10">
                    <span className="text-lg font-bold text-primary">{study.logo}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{study.company}</h4>
                    <p className="text-sm text-muted-foreground">{study.industry}</p>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary mt-1">
                      {study.corridor}
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground italic pl-6 mb-6">
                    "{study.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-xs font-medium text-foreground">
                      {study.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{study.author}</p>
                    <p className="text-xs text-muted-foreground">{study.role}</p>
                  </div>
                </div>
              </div>

              {/* Right side - Metrics */}
              <div className="p-6 md:p-8 bg-white/[0.01]">
                <h5 className="text-sm font-medium text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  Results achieved
                </h5>

                <div className="space-y-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl bg-white/[0.03] border border-white/5 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-muted-foreground">{metric.label}</span>
                        <span className="text-xs font-medium text-green-400">↑ {metric.improvement}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground line-through">{metric.before}</span>
                        <ArrowRight className="h-3 w-3 text-primary" />
                        <span className="text-sm font-semibold text-foreground">{metric.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          View all case studies
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </motion.div>
  );
};
