import { motion } from "framer-motion";
import { ArrowRight, Plug, Zap, Database, CreditCard, Shield, FileText, Globe, Truck } from "lucide-react";

const integrations = [
  {
    category: "Banking & Payments",
    icon: CreditCard,
    partners: ["SWIFT", "SEPA", "Wise Business", "Stripe"],
  },
  {
    category: "Compliance Providers",
    icon: Shield,
    partners: ["ComplyAdvantage", "Refinitiv", "Dow Jones", "Chainalysis"],
  },
  {
    category: "Trade Finance",
    icon: Database,
    partners: ["Tradeteq", "Stenn", "Drip Capital", "Modifi"],
  },
  {
    category: "Logistics & Freight",
    icon: Truck,
    partners: ["Flexport", "Freightos", "project44", "Portcast"],
  },
  {
    category: "Document Management",
    icon: FileText,
    partners: ["DocuSign", "Bolero", "essDOCS", "CargoX"],
  },
  {
    category: "Market Data",
    icon: Globe,
    partners: ["Bloomberg", "S&P Global", "IHS Markit", "Refinitiv"],
  },
];

export const IntegrationsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-4">
          <Plug className="h-4 w-4 text-primary" />
          <span className="text-xs text-muted-foreground">Ecosystem</span>
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-3">
          Connect with your existing tools
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          TRAIBOX integrates with leading providers across banking, compliance, trade finance, and logistics.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration, i) => (
          <motion.div
            key={integration.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <integration.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">{integration.category}</h4>
                <p className="text-xs text-muted-foreground">{integration.partners.length} integrations</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {integration.partners.map((partner) => (
                <span
                  key={partner}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/60"
                >
                  {partner}
                </span>
              ))}
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
          <Zap className="h-4 w-4" />
          View all integrations
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </motion.div>
  );
};
