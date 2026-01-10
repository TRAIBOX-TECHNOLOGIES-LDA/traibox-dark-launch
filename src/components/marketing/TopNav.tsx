import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { TraiboxLogo } from "./TraiboxLogo";

type PageKey = "home" | "platform" | "solutions" | "pricing" | "trust" | "company" | "resources" | "blog";

interface TopNavProps {
  page: PageKey;
  setPage: (page: PageKey) => void;
}

const productLinks: { key: PageKey; label: string }[] = [
  { key: "home", label: "Overview" },
  { key: "platform", label: "Platform" },
  { key: "solutions", label: "Solutions" },
  { key: "pricing", label: "Pricing" },
  { key: "trust", label: "Trust" },
];

const companyLinks: { key: PageKey; label: string }[] = [
  { key: "company", label: "Company" },
  { key: "resources", label: "Resources" },
  { key: "blog", label: "Blog" },
];

const allLinks = [...productLinks, ...companyLinks];

export const TopNav = ({ page, setPage }: TopNavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePageChange = (key: PageKey) => {
    setPage(key);
    setIsMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={() => handlePageChange("home")} 
            className="flex items-center group"
          >
            <TraiboxLogo className="h-24" />
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full p-1">
            {allLinks.map((l) => (
              <button
                key={l.key}
                onClick={() => handlePageChange(l.key)}
                className={`px-4 py-2 text-xs rounded-full transition-all duration-200 ${
                  page === l.key
                    ? "bg-white text-black font-medium"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BRAND.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white/80 hover:text-white transition"
            >
              Launch app <ArrowRight className="h-3 w-3" />
            </a>
            <Link
              to="/request-access"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-medium text-black hover:bg-white/90 transition shadow-lg shadow-white/5"
            >
              Request access <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-foreground p-2 hover:bg-white/10 rounded-lg transition"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMobileOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Product</p>
              <div className="flex flex-wrap gap-2">
                {productLinks.map((l) => (
                  <button
                    key={l.key}
                    onClick={() => handlePageChange(l.key)}
                    className={`px-3 py-2 text-xs rounded-full border transition ${
                      page === l.key
                        ? "border-white/30 bg-white text-black"
                        : "border-white/10 bg-white/5 text-white/70"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Company</p>
              <div className="flex flex-wrap gap-2">
                {companyLinks.map((l) => (
                  <button
                    key={l.key}
                    onClick={() => handlePageChange(l.key)}
                    className={`px-3 py-2 text-xs rounded-full border transition ${
                      page === l.key
                        ? "border-white/30 bg-white text-black"
                        : "border-white/10 bg-white/5 text-white/70"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
              <a
                href={BRAND.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Launch app <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/request-access"
                onClick={() => setIsMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
              >
                Request access <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
