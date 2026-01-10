import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Server, Eye, Scale } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    name: "SOC 2 Type II",
    description: "Audited security controls",
    status: "Certified",
  },
  {
    icon: Lock,
    name: "ISO 27001",
    description: "Information security management",
    status: "Certified",
  },
  {
    icon: Scale,
    name: "GDPR",
    description: "EU data protection compliant",
    status: "Compliant",
  },
  {
    icon: Server,
    name: "EU Data Residency",
    description: "Data stays in EU by default",
    status: "Enabled",
  },
  {
    icon: Eye,
    name: "Penetration Tested",
    description: "Regular third-party audits",
    status: "Verified",
  },
  {
    icon: FileCheck,
    name: "PCI DSS",
    description: "Payment data security",
    status: "Compliant",
  },
];

export const SecurityBadges = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-4">
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-xs text-muted-foreground">Certifications</span>
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-3">
          Enterprise-grade security
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          TRAIBOX is built with security and compliance at its core. We maintain industry-leading certifications.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300"
          >
            <div className="mx-auto mb-3 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <cert.icon className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-xs font-semibold text-foreground mb-1">{cert.name}</h4>
            <p className="text-[10px] text-muted-foreground mb-2">{cert.description}</p>
            <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-medium text-green-400">
              {cert.status}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
