import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Building2, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "./Section";
import { CTASection } from "./CTASection";
import { FAQ } from "./FAQ";
import { Divider } from "./Divider";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    description: "For small teams exploring trade automation",
    price: "Free",
    period: "",
    highlight: false,
    features: [
      "Up to 50 deals/month",
      "1 trade corridor",
      "Basic compliance checks",
      "Email support",
      "API access",
      "Standard exports",
    ],
    cta: "Get started",
    ctaLink: "/request-access",
  },
  {
    name: "Challenger",
    icon: Building2,
    description: "For growing organizations with advanced needs",
    price: "Custom",
    period: "",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Unlimited deals",
      "Unlimited corridors",
      "Full compliance suite",
      "Access to funding",
      "Payment methods",
      "Blockchain security",
      "Dedicated support + SLA",
      "SSO & RBAC",
      "Custom integrations",
      "Dedicated success manager",
    ],
    cta: "Contact sales",
    ctaLink: "/request-access",
  },
];

const comparisonFeatures = [
  { name: "Deals per month", starter: "50", challenger: "Unlimited" },
  { name: "Trade corridors", starter: "1", challenger: "Unlimited" },
  { name: "Team members", starter: "3", challenger: "Unlimited" },
  { name: "KYC/AML checks", starter: "Basic", challenger: "Full suite" },
  { name: "Sanctions screening", starter: "✓", challenger: "✓" },
  { name: "ESG/CBAM reporting", starter: "—", challenger: "✓" },
  { name: "Access to funding", starter: "—", challenger: "✓" },
  { name: "Payment methods", starter: "Basic", challenger: "Full suite" },
  { name: "Blockchain security", starter: "—", challenger: "✓" },
  { name: "Proof anchoring", starter: "—", challenger: "✓" },
  { name: "API access", starter: "✓", challenger: "✓" },
  { name: "Webhooks", starter: "—", challenger: "✓" },
  { name: "Custom integrations", starter: "—", challenger: "✓" },
  { name: "SSO/SAML", starter: "—", challenger: "✓" },
  { name: "SLA", starter: "—", challenger: "Custom" },
  { name: "Support", starter: "Email", challenger: "Dedicated" },
];

export const PricingPage = () => {
  return (
    <div className="pt-24 md:pt-32">
      <Section
        id="pricing"
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        subtitle="Start with a free trial. Scale as you grow. No hidden fees."
      >
        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-6 md:p-8 transition-all duration-300 ${
                plan.highlight
                  ? "border-primary/50 bg-primary/5 scale-[1.02] shadow-xl shadow-primary/10"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                  plan.highlight ? "bg-primary/20 text-primary" : "bg-white/10 text-muted-foreground"
                }`}>
                  <plan.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <Link
                to={plan.ctaLink}
                className={`flex items-center justify-center gap-2 w-full rounded-xl py-3 text-sm font-medium transition ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white/10 text-foreground hover:bg-white/20"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs font-medium text-foreground mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "text-primary" : "text-muted-foreground"
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
        >
          <div className="p-6 border-b border-white/10">
            <h3 className="text-xl font-semibold text-foreground">Compare plans</h3>
            <p className="text-sm text-muted-foreground mt-1">
              See which plan is right for your business
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-sm font-medium text-foreground">Feature</th>
                  <th className="text-center py-4 px-6 text-sm font-medium text-foreground">Starter</th>
                  <th className="text-center py-4 px-6 text-sm font-medium text-primary bg-primary/5">Challenger</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr key={feature.name} className={i % 2 === 0 ? "bg-white/[0.01]" : ""}>
                    <td className="py-3 px-6 text-sm text-muted-foreground">{feature.name}</td>
                    <td className="py-3 px-6 text-sm text-center text-muted-foreground">{feature.starter}</td>
                    <td className="py-3 px-6 text-sm text-center text-foreground bg-primary/5">{feature.challenger}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </Section>

      <Divider />
      <FAQ />
      <Divider />
      <CTASection />
    </div>
  );
};
