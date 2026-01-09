import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Lock, Shield, Sparkles } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { AnimatedBackground } from "./AnimatedBackground";

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
      <AnimatedBackground />

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
              {["AI-first workspace", "Compliance-ready", "Payments + finance", "Audit proofs"].map((pill, i) => (
                <motion.span
                  key={pill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur-sm"
                >
                  {pill}
                </motion.span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6"
            >
              {BRAND.tagline}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8"
            >
              {BRAND.name} is the operating layer for modern trade: one place to run a deal end-to-end — from
              intent to partners, compliance, funding, payments, and verifiable proof.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Link
                to="/request-access"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-medium text-black hover:bg-white/90 transition shadow-lg shadow-white/10"
              >
                Request access
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={BRAND.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition backdrop-blur-sm"
              >
                Launch app
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Feature bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid gap-4"
            >
              {[
                { icon: Sparkles, title: "Explainable by default", desc: "Every decision keeps its reasons and evidence attached." },
                { icon: Shield, title: "Built for change", desc: "Add rails, rules, and partners without rewriting the core." },
                { icon: Lock, title: "Audit-ready outputs", desc: "Exports and proofs designed for real compliance workflows." },
              ].map((item, i) => (
                <motion.div 
                  key={item.title} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Timeline + Trust cards */}
          <div className="space-y-6">
            {/* Timeline card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm font-medium text-foreground">Deal timeline (example)</p>
                <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">PT ↔ ES pilot</span>
              </div>
              <div className="space-y-1">
                {timelineSteps.map((step, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                  >
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                      >
                        <Check className="w-3 h-3 text-primary" />
                      </motion.div>
                      {i < timelineSteps.length - 1 && <div className="w-px h-8 bg-white/10 mt-1" />}
                    </div>
                    <div className="pb-2">
                      <p className="text-sm font-medium text-foreground">{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Trust cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium text-foreground">Trust built-in</p>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Privacy-first data handling, EU residency by design, and verifiable proofs — without putting
                  sensitive data on-chain.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["EU data residency", "No PII on-chain", "Audit exports"].map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/60 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium text-foreground">Operationally real</p>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Release gates tied to reliability targets, clear incident comms, and a launch checklist designed
                  for pilots → GA.
                </p>
                <a href="#trust" className="inline-flex items-center gap-1 text-xs text-primary hover:underline group">
                  See trust & operations <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
