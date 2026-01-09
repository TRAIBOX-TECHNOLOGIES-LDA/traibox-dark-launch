import { BRAND } from "@/lib/constants";
import { Divider } from "./Divider";

export const Footer = () => (
  <footer className="pb-8">
    <Divider />
    <div className="container mx-auto px-6 pt-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href={BRAND.docsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">
            Docs
          </a>
          <span>•</span>
          <a href={BRAND.appUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">
            App
          </a>
          <span>•</span>
          <a href="#trust" className="hover:text-foreground transition">
            Trust
          </a>
        </div>
      </div>
    </div>
  </footer>
);
