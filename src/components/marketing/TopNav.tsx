import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X, Network } from "lucide-react";
import { BRAND } from "@/lib/constants";

type PageKey = "home" | "platform" | "modules" | "solutions" | "trust" | "resources" | "company";

interface TopNavProps {
  page: PageKey;
  setPage: (page: PageKey) => void;
}

const links: { key: PageKey; label: string }[] = [
  { key: "home", label: "Overview" },
  { key: "platform", label: "Platform" },
  { key: "modules", label: "Modules" },
  { key: "solutions", label: "Solutions" },
  { key: "trust", label: "Trust" },
  { key: "resources", label: "Resources" },
  { key: "company", label: "Company" },
];

export const TopNav = ({ page, setPage }: TopNavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => setPage("home")} className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Network className="h-5 w-5" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground">{BRAND.name}</p>
              <p className="text-[10px] text-muted-foreground tracking-wide">Trade Intelligence Networks</p>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.key}
                onClick={() => setPage(l.key)}
                className={`px-3 py-2 text-xs rounded-full transition ${
                  page === l.key
                    ? "bg-white text-black"
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
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium text-white/80 hover:text-white transition"
            >
              Launch app <ArrowRight className="h-3 w-3" />
            </a>
            <Link
              to="/request-access"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-medium text-black hover:bg-white/90 transition"
            >
              Request access <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMobileOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-wrap gap-2 mb-4">
              {links.map((l) => (
                <button
                  key={l.key}
                  onClick={() => {
                    setPage(l.key);
                    setIsMobileOpen(false);
                  }}
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
