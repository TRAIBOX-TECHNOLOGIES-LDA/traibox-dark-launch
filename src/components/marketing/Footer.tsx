import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { Divider } from "./Divider";
import { TraiboxLogo } from "./TraiboxLogo";

const footerLinks = {
  Product: [
    { label: "Overview", href: "#" },
    { label: "Platform", href: "#" },
    { label: "Modules", href: "#" },
    { label: "Solutions", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "mailto:hello@traibox.com" },
  ],
  Resources: [
    { label: "Documentation", href: BRAND.docsUrl },
    { label: "API Reference", href: BRAND.docsUrl + "/api" },
    { label: "Status", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export const Footer = () => (
  <footer className="pt-16 pb-8">
    <Divider />
    <div className="container mx-auto px-6 pt-12">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="mb-4">
            <TraiboxLogo className="h-7 w-7" showText textClassName="text-base font-semibold tracking-tight" />
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

        {/* Links */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-wider">{category}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
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
          <span className="text-white/20">•</span>
          <a href="#trust" className="hover:text-foreground transition">
            Trust
          </a>
        </div>
      </div>
    </div>
  </footer>
);
