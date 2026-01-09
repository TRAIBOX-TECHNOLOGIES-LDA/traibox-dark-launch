import { motion } from "framer-motion";
import { BookOpen, Code2, Mail, ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { BRAND } from "@/lib/constants";

const resources = [
  {
    icon: BookOpen,
    title: "Docs",
    desc: "Product and integration docs for teams and partners.",
    href: BRAND.docsUrl,
  },
  {
    icon: Code2,
    title: "API",
    desc: "Stable endpoints with clear schemas and events.",
    href: BRAND.docsUrl + "/api",
  },
  {
    icon: Mail,
    title: "Security",
    desc: "Coordinated disclosure, security.txt, and contact channels.",
    href: "https://traibox.com/security",
  },
];

export const ResourcesPage = () => {
  return (
    <Section
      id="resources"
      eyebrow="Resources"
      title="Everything you need to get started"
      subtitle="Documentation, APIs, and security resources for teams and partners."
    >
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {resources.map((r, i) => (
          <motion.a
            key={r.title}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.04]"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <r.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary">
              Open <ArrowRight className="h-4 w-4" />
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 max-w-2xl mx-auto text-center"
      >
        <h3 className="text-lg font-semibold text-foreground mb-3">Partner integrations</h3>
        <p className="text-sm text-muted-foreground mb-4">
          We maintain Postman/Insomnia collections and deployment profiles so partners can validate the happy path
          quickly.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["Postman", "Insomnia", "Profiles", "Exports"].map((tag) => (
            <span key={tag} className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
