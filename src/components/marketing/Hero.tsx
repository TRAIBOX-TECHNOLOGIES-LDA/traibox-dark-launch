import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Lock, Shield, Sparkles } from "lucide-react";
import { BRAND } from "@/lib/constants";

export const Hero = () => {
  const timelineSteps = [
    { title: "Trade captured", desc: "Chat or upload docs. TRAIBOX structures the deal." },
    { title: "Partners shortlisted", desc: "Network signals + constraints produce a shortlist." },
    { title: "Compliance cleared", desc: "KYC/AML, sanctions, ESG/CBAM where applicable." },
    { title: "Funding offered", desc: "Funding options with clear reasons and terms." },
    { title: "Payment executed", desc: "Routes, execution, tracking, and reconciliation." },
    { title: "Proofs exported", desc: "Audit pack with deterministic proofs and verification." },
  ];

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div className="max-w-xl">
            {/* Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {["AI-first workspace", "Compliance-ready", "Payments + finance", "Audit proofs"].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6"
            >
              {BRAND.tagline}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              {BRAND.name} is the operating layer for modern trade: one place to run a deal end-to-end — from
              intent to partners, compliance, funding, payments, and verifiable proof.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Link
                to="/request-access"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
              >
                Request access
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={BRAND.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Launch app
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Feature bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid gap-4"
            >
              {[
                { icon: Sparkles, title: "Explainable by default", desc: "Every decision keeps its reasons and evidence attached." },
                { icon: Shield, title: "Built for change", desc: "Add rails, rules, and partners without rewriting the core." },
                { icon: Lock, title: "Audit-ready outputs", desc: "Exports and proofs designed for real compliance workflows." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Timeline + Trust cards */}
          <div className="space-y-6">
            {/* Timeline card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm font-medium text-foreground">Deal timeline (example)</p>
                <span className="text-xs text-muted-foreground">PT ↔ ES pilot</span>
              </div>
              <div className="space-y-4">
                {timelineSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {i < timelineSteps.length - 1 && <div className="w-px h-8 bg-white/10 mt-1" />}
                    </div>
                    <div className="pb-2">
                      <p className="text-sm font-medium text-foreground">{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trust cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium text-foreground">Trust built-in</p>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Privacy-first data handling, EU residency by design, and verifiable proofs — without putting
                  sensitive data on-chain.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["EU data residency", "No PII on-chain", "Audit exports"].map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium text-foreground">Operationally real</p>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Release gates tied to reliability targets, clear incident comms, and a launch checklist designed
                  for pilots → GA.
                </p>
                <a href="#trust" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                  See trust & operations <ArrowRight className="h-3 w-3" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
