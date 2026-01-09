import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "TRAIBOX transformed how we handle cross-border compliance. What used to take days now happens in hours, with full audit trails.",
    author: "Maria Santos",
    role: "Head of Trade Finance",
    company: "European Logistics Group",
  },
  {
    quote: "The explainable AI is a game-changer. Our compliance team finally trusts automated decisions because they can see the reasoning.",
    author: "Henrik Larsson",
    role: "Chief Compliance Officer",
    company: "Nordic Trade Partners",
  },
  {
    quote: "One platform for the entire deal lifecycle. Partner qualification, funding, payments, proofs — all connected and auditable.",
    author: "Ana Rodriguez",
    role: "Operations Director",
    company: "Iberian Import Co.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Trusted by trade professionals
          </h2>
          <p className="text-muted-foreground">
            See how teams are transforming their trade operations with TRAIBOX.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 transition-all duration-300 hover:border-primary/30"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-sm text-foreground/90 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
