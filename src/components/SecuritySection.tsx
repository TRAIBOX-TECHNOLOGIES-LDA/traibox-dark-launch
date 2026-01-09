import { Shield, Lock, Eye, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Zero Trust Architecture",
    description: "Every access request is fully authenticated, authorized, and encrypted."
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Data encrypted at rest and in transit with AES-256 and TLS 1.3."
  },
  {
    icon: Eye,
    title: "Complete Audit Trail",
    description: "Comprehensive logging of all data access and system operations."
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    description: "Built for FedRAMP, SOC 2 Type II, HIPAA, and GDPR compliance."
  }
];

export const SecuritySection = () => {
  return (
    <section id="security" className="py-24 md:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">Security</p>
          <h2 className="section-heading mb-6">
            Security is not a feature. It's the foundation.
          </h2>
          <p className="section-subheading mx-auto">
            TRAIBOX is built from the ground up to meet the security requirements of 
            the world's most sensitive organizations.
          </p>
        </div>

        {/* Security features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((item) => (
            <div key={item.title} className="card-premium text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
