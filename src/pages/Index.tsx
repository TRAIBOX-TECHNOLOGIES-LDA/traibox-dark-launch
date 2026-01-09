import { useMemo, useState } from "react";
import { TopNav } from "@/components/marketing/TopNav";
import { HomePage } from "@/components/marketing/HomePage";
import { PlatformPage } from "@/components/marketing/PlatformPage";
import { ModulesPage } from "@/components/marketing/ModulesPage";
import { SolutionsPage } from "@/components/marketing/SolutionsPage";
import { TrustPage } from "@/components/marketing/TrustPage";
import { ResourcesPage } from "@/components/marketing/ResourcesPage";
import { CompanyPage } from "@/components/marketing/CompanyPage";
import { Footer } from "@/components/marketing/Footer";

type PageKey = "home" | "platform" | "modules" | "solutions" | "trust" | "resources" | "company";

const Index = () => {
  const [page, setPage] = useState<PageKey>("home");

  const content = useMemo(() => {
    switch (page) {
      case "platform":
        return <PlatformPage />;
      case "modules":
        return <ModulesPage />;
      case "solutions":
        return <SolutionsPage />;
      case "trust":
        return <TrustPage />;
      case "resources":
        return <ResourcesPage />;
      case "company":
        return <CompanyPage />;
      case "home":
      default:
        return <HomePage />;
    }
  }, [page]);

  return (
    <div className="min-h-screen bg-background">
      <TopNav page={page} setPage={setPage} />
      
      <main className="pt-16 md:pt-20">
        {content}

        {/* Trust anchor for navigation from other pages */}
        {page !== "trust" && (
          <div id="trust" className="scroll-mt-24">
            <TrustPage />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
