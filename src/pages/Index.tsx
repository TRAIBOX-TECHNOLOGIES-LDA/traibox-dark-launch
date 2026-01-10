import { useMemo, useState } from "react";
import { TopNav } from "@/components/marketing/TopNav";
import { HomePage } from "@/components/marketing/HomePage";
import { PlatformPage } from "@/components/marketing/PlatformPage";
import { ModulesPage } from "@/components/marketing/ModulesPage";
import { SolutionsPage } from "@/components/marketing/SolutionsPage";
import { TrustPage } from "@/components/marketing/TrustPage";
import { ResourcesPage } from "@/components/marketing/ResourcesPage";
import { CompanyPage } from "@/components/marketing/CompanyPage";
import { PricingPage } from "@/components/marketing/PricingPage";
import { Footer } from "@/components/marketing/Footer";
import { AnnouncementBar } from "@/components/marketing/AnnouncementBar";
import { PageTransition } from "@/components/marketing/PageTransition";

type PageKey = "home" | "platform" | "modules" | "solutions" | "trust" | "resources" | "company" | "pricing";

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
      case "pricing":
        return <PricingPage />;
      case "home":
      default:
        return <HomePage />;
    }
  }, [page]);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <TopNav page={page} setPage={setPage} />
      
      <main className="pt-16 md:pt-20">
        <PageTransition pageKey={page}>
          {content}

          {/* Trust anchor for navigation from other pages */}
          {page !== "trust" && (
            <div id="trust" className="scroll-mt-24">
              <TrustPage />
            </div>
          )}
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
