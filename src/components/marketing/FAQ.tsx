import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is TRAIBOX?",
    answer: "TRAIBOX is the operating layer for modern trade — a single platform to run deals end-to-end, from intent and partner matching through compliance, funding, payments, and verifiable proof generation.",
  },
  {
    question: "How does TRAIBOX handle compliance?",
    answer: "We provide built-in KYC/AML, sanctions screening, export controls, and ESG/CBAM checks. Every decision is explainable with evidence attached, designed for real compliance workflows and audits.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. TRAIBOX is built with security-first architecture including RBAC/ABAC, mTLS, vault-backed secrets, and EU data residency by default. We never put sensitive PII on-chain.",
  },
  {
    question: "How do proofs work?",
    answer: "TRAIBOX generates deterministic audit packs with cryptographic proofs. You can optionally anchor proofs to a ledger for additional verification, but sensitive data never leaves your control.",
  },
  {
    question: "Can I start with a pilot?",
    answer: "Yes! We recommend starting with a single corridor (e.g., PT↔ES) to validate the full flow, then expanding. The core platform stays stable as you add new markets and rules.",
  },
  {
    question: "What integrations are available?",
    answer: "TRAIBOX provides stable APIs for trade, compliance, finance, payments, and proofs. We maintain Postman/Insomnia collections and deployment profiles for quick partner integration.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about TRAIBOX.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/[0.02]"
              >
                <span className="text-sm font-medium text-foreground pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
