import { motion } from "framer-motion";
import { FileCheck, Lock, Link as LinkIcon } from "lucide-react";

export const ProofsSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.05] to-transparent p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileCheck className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Proof you can verify.
              </h2>
            </div>
            
            <p className="text-white/70 mb-6">
              Every critical action creates a record: what happened, when, and why. 
              Export an audit pack anytime. Optionally anchor integrity proofs to a ledger — 
              never sensitive data.
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <FileCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Audit packs</p>
                  <p className="text-xs text-white/70 leading-relaxed">Exportable records with receipts and reasoning.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">No PII on-chain</p>
                  <p className="text-xs text-white/70 leading-relaxed">Sensitive data stays off public ledgers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <LinkIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Ledger anchoring</p>
                  <p className="text-xs text-white/70 leading-relaxed">Optional integrity proofs for verification.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
