import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LayoutDashboard } from "lucide-react";

const AppPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-6">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
          <LayoutDashboard className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          TRAIBOX Application
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          The full application experience will be available here. For now, explore our marketing site.
        </p>
        <Link to="/">
          <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AppPage;
