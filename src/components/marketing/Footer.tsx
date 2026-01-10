import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { Divider } from "./Divider";

type PageKey = "home" | "platform" | "solutions" | "pricing" | "trust" | "company" | "resources" | "blog";

interface FooterProps {
  setPage?: (page: PageKey) => void;
}

export const Footer = ({ setPage }: FooterProps) => {
  const handleNavClick = (page: PageKey) => {
    if (setPage) {
      setPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="pt-16 pb-8">
      <Divider />
      <div className="container mx-auto px-6 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img src="/web-app-manifest-512x512.png" alt="Traibox Logo" className="h-32" />
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              {BRAND.tagline}
            </p>
            <Link
              to="/request-access"
              className="inline-flex items-center gap-2 text-xs text-primary hover:underline"
            >
              Get started <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {[
                { label: "Overview", page: "home" as PageKey },
                { label: "Platform", page: "platform" as PageKey },
                { label: "Solutions", page: "solutions" as PageKey },
                { label: "Pricing", page: "pricing" as PageKey },
                { label: "Trust", page: "trust" as PageKey },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About", page: "company" as PageKey },
                { label: "Resources", page: "resources" as PageKey },
                { label: "Blog", page: "blog" as PageKey },
                { label: "Contact", href: "mailto:hello@traibox.com" },
              ].map((link) => (
                <li key={link.label}>
                  {'href' in link ? (
                    <a
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.page)}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Security", page: "trust" as PageKey },
              ].map((link) => (
                <li key={link.label}>
                  {'page' in link ? (
                    <button
                      onClick={() => handleNavClick(link.page)}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Divider />
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href={BRAND.docsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">
              Docs
            </a>
            <span className="text-white/20">•</span>
            <a href={BRAND.appUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">
              App
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
