import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Check, MapPin, Linkedin, Twitter } from "lucide-react";
import { Section } from "./Section";
import { BRAND } from "@/lib/constants";
import { CTASection } from "./CTASection";
import { Newsletter } from "./Newsletter";
import { Divider } from "./Divider";

import { Timeline } from "./Timeline";
import { Careers } from "./Careers";

export const CompanyPage = () => {
  return (
    <div className="pt-24 md:pt-32">
      <Section
        id="company"
        eyebrow="Company"
        title="Building the future of trade infrastructure"
        subtitle="We're on a mission to make global trade feel local."
      >
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Mission</h3>
            <p className="text-muted-foreground mb-6">
              Make trade frictionless and safe — by turning complex workflows into a single, verifiable operating
              layer.
            </p>

            <h4 className="text-sm font-semibold text-foreground mb-3">What we believe</h4>
            <ul className="space-y-3">
              {[
                "Customer safety first — no silent failures.",
                "Explainable ops — decisions leave an audit trail.",
                "Built for change — add rails and rules without rewrites.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <p className="text-muted-foreground mb-6">
              Want a pilot corridor or partner integration? Reach out.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:hello@traibox.com"
                className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white hover:bg-white/10 transition group"
              >
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" /> hello@traibox.com
                </span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                to="/request-access"
                className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-medium text-black hover:bg-white/90 transition group"
              >
                Request access
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={BRAND.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white hover:bg-white/10 transition group"
              >
                Launch app
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Location and social */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-1">Headquarters</h4>
              <p className="text-xs text-muted-foreground">
                Europe (EU data residency by default)
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <h4 className="text-sm font-semibold text-foreground mb-3">Follow us</h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
              >
                <Twitter className="h-5 w-5 text-muted-foreground" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "DPA / SLA", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>

        <Divider />
        <Timeline />
        <Divider />
        <Careers />
      </Section>

      <Divider />
      <Newsletter />
      <Divider />
      <CTASection />
    </div>
  );
};
