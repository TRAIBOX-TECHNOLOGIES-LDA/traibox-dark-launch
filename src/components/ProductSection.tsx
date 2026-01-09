import { Database, Workflow, Shield, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Database,
    title: "Data Integration",
    description: "Connect and harmonize data from any source—structured or unstructured—into a unified operational layer."
  },
  {
    icon: Workflow,
    title: "Intelligent Workflows",
    description: "Automate complex decision-making with AI-powered workflows that adapt to your operational context."
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security with granular access controls, audit logging, and compliance-ready architecture."
  },
  {
    icon: Zap,
    title: "Real-Time Analysis",
    description: "Process and analyze billions of records in real-time with sub-second query performance."
  }
];

export const ProductSection = () => {
  return (
    <section id="product" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">Product</p>
          <h2 className="section-heading mb-6">
            Infrastructure for the world's most critical operations
          </h2>
          <p className="section-subheading">
            TRAIBOX provides the foundational platform that enables organizations to leverage their data 
            for complex, real-world decision-making.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((item, index) => (
            <div key={item.title} className="card-premium group">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
