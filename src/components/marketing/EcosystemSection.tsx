import { motion } from "framer-motion";
import { Plug, Globe, Webhook } from "lucide-react";

export const EcosystemSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Plug className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Connect your existing stack.
              </h2>
            </div>
            
            <p className="text-muted-foreground mb-6">
              TRAIBOX connects to ERPs, marketplaces, logistics tools, banking/PSPs, and compliance 
              providers via APIs, webhooks, and events. No rip-and-replace required.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Globe className="h-4 w-4 text-primary" />
                REST & GraphQL APIs
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Webhook className="h-4 w-4 text-primary" />
                Webhooks & events
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {["ERP", "E-commerce", "Logistics", "Banking", "PSPs", "Compliance"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
