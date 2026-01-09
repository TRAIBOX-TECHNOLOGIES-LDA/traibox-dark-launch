import { motion } from "framer-motion";
import { Check, LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets?: string[];
  index?: number;
}

export const Card = ({ icon: Icon, title, desc, bullets, index = 0 }: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.04]"
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
    {bullets && bullets.length > 0 && (
      <ul className="mt-4 space-y-2 pl-16">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-white/70">
            <Check className="h-4 w-4 text-primary flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);
