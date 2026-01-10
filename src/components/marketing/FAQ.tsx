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
    answer: "TRAIBOX is the operating layer for modern trade — a single workspace to run deals end-to-end with clarity, compliance, payments, and proof. Think of it as the coordination layer between your systems, partners, and workflows.",
  },
  {
    question: "Do I need to replace my ERP or TMS?",
    answer: "No. TRAIBOX works with your existing tools. We connect via APIs, webhooks, and events to ERPs, logistics platforms, banking/PSPs, and compliance providers. No rip-and-replace required.",
  },
  {
    question: "How does compliance work?",
    answer: "TRAIBOX provides built-in checks for KYC/AML, sanctions screening, export controls, and ESG/CBAM where applicable. Every decision comes with evidence attached — designed for real audit workflows.",
  },
  {
    question: "How do payments work?",
    answer: "You can route and execute payments via connected banking and PSP rails. TRAIBOX tracks status, handles reconciliation, and gives you visibility across currencies and routes — all in one place.",
  },
  {
    question: "What does 'proof' mean?",
    answer: "Every critical action produces a traceable record: what happened, when, and why. You can export audit packs anytime. Optionally, anchor integrity proofs to a ledger for additional verification — no sensitive data goes on-chain.",
  },
  {
    question: "Can I start with a pilot corridor?",
    answer: "Yes, and we recommend it. Start with a single corridor (e.g., Portugal ↔ Spain) to validate the full flow, then expand to more markets and modules when you're ready.",
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
