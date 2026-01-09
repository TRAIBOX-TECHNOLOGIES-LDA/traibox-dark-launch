import { Check } from "lucide-react";

const features = [
  "Petabyte-scale data processing",
  "Multi-cloud deployment options",
  "Advanced ML/AI integration",
  "Real-time collaboration tools",
  "Custom ontology modeling",
  "Automated data lineage",
  "Role-based access control",
  "API-first architecture",
  "Version-controlled workflows"
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      {/* Divider */}
      <div className="divider-gradient mb-24" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">Features</p>
            <h2 className="section-heading mb-6">
              Built for enterprise complexity
            </h2>
            <p className="section-subheading mb-10">
              Every feature is designed to handle the most demanding operational environments, 
              from defense and intelligence to commercial enterprises.
            </p>

            {/* Feature list */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-secondary-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="card-premium aspect-square flex items-center justify-center relative overflow-hidden">
              {/* Abstract data visualization */}
              <div className="absolute inset-0 opacity-30">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute border border-primary/30 rounded-full"
                    style={{
                      width: `${(i + 1) * 80}px`,
                      height: `${(i + 1) * 80}px`,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-light text-primary">∞</span>
                </div>
                <p className="text-muted-foreground text-sm">Infinite Scale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
