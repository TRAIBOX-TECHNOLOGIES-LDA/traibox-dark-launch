import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CompanySection = () => {
  return (
    <section id="company" className="py-24 md:py-32 relative">
      {/* Divider */}
      <div className="divider-gradient mb-24" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">Company</p>
          <h2 className="section-heading mb-6">
            Building the future of operational intelligence
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            We partner with organizations that protect and serve. Our mission is to 
            provide the software infrastructure that makes the world's most important 
            institutions more effective.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div>
              <p className="text-4xl md:text-5xl font-semibold gradient-text mb-2">500+</p>
              <p className="text-sm text-muted-foreground">Enterprise Clients</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-semibold gradient-text mb-2">40+</p>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-semibold gradient-text mb-2">99.9%</p>
              <p className="text-sm text-muted-foreground">Uptime SLA</p>
            </div>
          </div>

          {/* CTA */}
          <Link to="/request-access">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
