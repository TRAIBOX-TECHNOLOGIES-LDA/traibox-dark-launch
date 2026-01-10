import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Server, 
  FileCheck, 
  Eye, 
  Link2,
  Globe,
  KeyRound
} from "lucide-react";

const securityPractices = [
  {
    icon: KeyRound,
    title: "RBAC/ABAC access controls",
    desc: "Role and attribute-based permissions. Least privilege by default.",
  },
  {
    icon: Lock,
    title: "mTLS service mesh",
    desc: "Encrypted service-to-service communication. No plaintext internal traffic.",
  },
  {
    icon: FileCheck,
    title: "Audit bundles",
    desc: "Every critical action produces a traceable record with deterministic hashes.",
  },
  {
    icon: Server,
    title: "EU data residency",
    desc: "Data stays in EU by default. Cross-border only where explicit.",
  },
  {
    icon: Eye,
    title: "DSAR-ready exports",
    desc: "Data subject requests handled with structured export and deletion tools.",
  },
  {
    icon: Link2,
    title: "No PII on-chain",
    desc: "Only hashes and proofs anchored. Sensitive data never leaves the platform.",
  },
  {
    icon: Shield,
    title: "Optional ledger anchoring",
    desc: "Verifiable integrity via external chains — when you need it, not by default.",
  },
  {
    icon: Globe,
    title: "Privacy-first design",
    desc: "Data minimization, purpose binding, and encryption at rest and in transit.",
  },
];

export const TrustPosture = () => {
  return (
    <section id="trust-security" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-primary mb-4">
            Trust & Security
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            How we handle your data
          </h2>
          <p className="text-muted-foreground">
            Security and privacy built into the architecture — not bolted on after.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {securityPractices.map((practice, i) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <practice.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                {practice.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {practice.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-muted-foreground max-w-xl mx-auto">
            We're building toward formal certifications. Until then, we tell you exactly what we do 
            and how we do it — no badges we haven't earned.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
