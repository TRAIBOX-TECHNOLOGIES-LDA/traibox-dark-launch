import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Network, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/constants";

const AppPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-6">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
          <Network className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          {BRAND.name} Application
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          You're being redirected to the {BRAND.name} application.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BRAND.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
          >
            Open App
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/">
            <Button variant="outline" className="border-white/15 text-foreground hover:bg-white/10 rounded-xl">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
