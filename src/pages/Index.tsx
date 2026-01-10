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
import { BlogPage } from "@/components/marketing/BlogPage";
import { Footer } from "@/components/marketing/Footer";
import { PageTransition } from "@/components/marketing/PageTransition";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { BackToTop } from "@/components/marketing/BackToTop";
import { ScrollProgress } from "@/components/marketing/ScrollProgress";

type PageKey = "home" | "platform" | "modules" | "solutions" | "trust" | "resources" | "company" | "pricing" | "blog";

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
      case "blog":
        return <BlogPage />;
      case "home":
      default:
        return <HomePage />;
    }
  }, [page]);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <TopNav page={page} setPage={setPage} />
      
      <main>
        <PageTransition pageKey={page}>
          {content}
        </PageTransition>
      </main>

      <Footer />
      <BackToTop />
      <CookieConsent />
    </div>
  );
};

export default Index;
