import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  ArrowRight, 
  Check, 
  FileText, 
  Users, 
  Shield, 
  Banknote, 
  CreditCard, 
  FileCheck,
  ChevronRight
} from "lucide-react";

const demoSteps = [
  {
    id: "capture",
    title: "Capture Deal",
    icon: FileText,
    description: "Upload documents or chat to create a structured deal",
    details: [
      "Invoice: €125,000 electronics shipment",
      "Route: Lisbon → Barcelona",
      "Buyer: TechDistrib S.L.",
      "Payment terms: 60 days net",
    ],
    status: "Document parsed • Deal created",
  },
  {
    id: "partners",
    title: "Find Partners",
    icon: Users,
    description: "Network signals surface qualified matches",
    details: [
      "3 logistics providers matched",
      "2 financing options available",
      "Trust scores: 85-92%",
      "All EU-compliant verified",
    ],
    status: "Partner shortlist ready",
  },
  {
    id: "compliance",
    title: "Run Compliance",
    icon: Shield,
    description: "KYC/AML, sanctions, ESG checks with evidence",
    details: [
      "KYC: ✓ Verified (ComplyAdvantage)",
      "Sanctions: ✓ Clear (Refinitiv)",
      "ESG/CBAM: ✓ Low risk",
      "Export controls: ✓ No restrictions",
    ],
    status: "All checks passed",
  },
  {
    id: "funding",
    title: "Get Funding",
    icon: Banknote,
    description: "Compare offers and select financing",
    details: [
      "Offer A: 2.8% • 45 days • €125k",
      "Offer B: 3.1% • 60 days • €125k",
      "Offer C: 2.5% • 30 days • €100k",
      "Selected: Offer A (best terms)",
    ],
    status: "Funding confirmed",
  },
  {
    id: "payment",
    title: "Execute Payment",
    icon: CreditCard,
    description: "Route, execute, and track payment",
    details: [
      "Route: SEPA Instant → ES",
      "Amount: €125,000.00",
      "Fee: €12.50 (0.01%)",
      "ETA: 10 seconds",
    ],
    status: "Payment completed",
  },
  {
    id: "proof",
    title: "Export Proofs",
    icon: FileCheck,
    description: "Generate verifiable audit pack",
    details: [
      "Audit bundle: 24 documents",
      "Hash anchored: 0x7f3a...",
      "Verification: One-click verify",
      "Export: PDF + JSON available",
    ],
    status: "Proofs generated",
  },
];

export const InteractiveDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setActiveStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= demoSteps.length) {
        setIsPlaying(false);
        clearInterval(interval);
      } else {
        setActiveStep(step);
      }
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-4">
          <Play className="h-4 w-4 text-primary" />
          <span className="text-xs text-muted-foreground">Interactive Demo</span>
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-3">
          See a deal flow in action
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Watch how TRAIBOX takes a deal from capture to verified proof in minutes.
        </p>
        <button
          onClick={handlePlay}
          disabled={isPlaying}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition"
        >
          {isPlaying ? (
            <>
              <span className="animate-pulse">Running demo...</span>
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              Run demo
            </>
          )}
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
          {demoSteps.map((step, i) => (
            <button
              key={step.id}
              onClick={() => !isPlaying && setActiveStep(i)}
              className="flex flex-col items-center gap-2 min-w-[80px] group"
            >
              <div
                className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  i <= activeStep
                    ? "border-primary bg-primary/20 text-primary"
                    : "border-white/20 bg-white/5 text-muted-foreground"
                }`}
              >
                {i < activeStep ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <step.icon className="h-5 w-5" />
                )}
                {i < demoSteps.length - 1 && (
                  <div
                    className={`absolute left-full top-1/2 w-[calc(100%-2.5rem)] h-0.5 -translate-y-1/2 transition-colors duration-500 ${
                      i < activeStep ? "bg-primary" : "bg-white/10"
                    }`}
                    style={{ width: "40px", marginLeft: "4px" }}
                  />
                )}
              </div>
              <span
                className={`text-[10px] font-medium transition-colors ${
                  i === activeStep ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active step detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                {(() => {
                  const StepIcon = demoSteps[activeStep].icon;
                  return <StepIcon className="h-7 w-7 text-primary" />;
                })()}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  {demoSteps[activeStep].title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {demoSteps[activeStep].description}
                </p>
              </div>
            </div>

            {/* Simulated output */}
            <div className="rounded-xl bg-black/30 border border-white/10 p-4 mb-4 font-mono text-xs">
              {demoSteps[activeStep].details.map((detail, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 text-white/70 mb-1 last:mb-0"
                >
                  <ChevronRight className="h-3 w-3 text-primary" />
                  {detail}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-muted-foreground">{demoSteps[activeStep].status}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0 || isPlaying}
            className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition"
          >
            ← Previous
          </button>
          <span className="text-xs text-muted-foreground">
            Step {activeStep + 1} of {demoSteps.length}
          </span>
          <button
            onClick={() => setActiveStep(Math.min(demoSteps.length - 1, activeStep + 1))}
            disabled={activeStep === demoSteps.length - 1 || isPlaying}
            className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition"
          >
            Next →
          </button>
        </div>
      </div>
    </motion.div>
  );
};
