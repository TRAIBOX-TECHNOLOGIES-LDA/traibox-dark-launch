import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Plug, 
  Zap, 
  Database, 
  CreditCard, 
  Shield, 
  FileText, 
  Globe, 
  Truck,
  ShoppingCart,
  Building2,
  Brain,
  BarChart3
} from "lucide-react";

const integrations = [
  {
    category: "ERP & Business Systems",
    icon: Database,
    description: "Connect your core business data",
    partners: ["SAP", "Oracle", "NetSuite", "Microsoft Dynamics"],
  },
  {
    category: "E-commerce & Marketplaces",
    icon: ShoppingCart,
    description: "Sync orders and inventory",
    partners: ["Shopify", "Amazon", "Alibaba", "Magento"],
  },
  {
    category: "Banking & Payments",
    icon: CreditCard,
    description: "Execute and track payments",
    partners: ["SWIFT", "SEPA", "Wise Business", "Stripe"],
  },
  {
    category: "Trade Finance",
    icon: Building2,
    description: "Access funding options",
    partners: ["Tradeteq", "Stenn", "Drip Capital", "Modifi"],
  },
  {
    category: "Compliance & Risk",
    icon: Shield,
    description: "Automated verification",
    partners: ["ComplyAdvantage", "Refinitiv", "Dow Jones", "Chainalysis"],
  },
  {
    category: "Logistics & Freight",
    icon: Truck,
    description: "Track and coordinate shipments",
    partners: ["Flexport", "Freightos", "project44", "Portcast"],
  },
  {
    category: "Documents & eDocs",
    icon: FileText,
    description: "Digital trade documents",
    partners: ["DocuSign", "Bolero", "essDOCS", "CargoX"],
  },
  {
    category: "Market Intelligence",
    icon: BarChart3,
    description: "Data-driven decisions",
    partners: ["Bloomberg", "S&P Global", "IHS Markit", "Dun & Bradstreet"],
  },
];

export const IntegrationsSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-4">
            <Plug className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">Ecosystem</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Plug into your existing stack
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            TRAIBOX connects the tools you already use — ERPs, e-commerce, logistics, payments, and compliance systems.
          </p>
        </motion.div>

        {/* AI orchestration highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-6 text-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <Brain className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">AI-Orchestrated</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Our AI layer understands your workflows, normalizes messy data, and coordinates tasks across all connected systems automatically.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <integration.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-foreground truncate">{integration.category}</h4>
                  <p className="text-[11px] text-muted-foreground">{integration.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {integration.partners.map((partner) => (
                  <span
                    key={partner}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60"
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
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              Pre-built connectors
            </span>
            <span className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              REST & GraphQL APIs
            </span>
            <span className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              Webhooks & events
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
