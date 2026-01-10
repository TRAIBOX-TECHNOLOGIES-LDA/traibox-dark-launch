import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";

const openRoles = [
  {
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Remote (EU)",
    type: "Full-time",
    href: "#",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote (EU)",
    type: "Full-time",
    href: "#",
  },
  {
    title: "Compliance Analyst",
    department: "Operations",
    location: "Lisbon, Portugal",
    type: "Full-time",
    href: "#",
  },
  {
    title: "Developer Relations",
    department: "Engineering",
    location: "Remote (EU)",
    type: "Full-time",
    href: "#",
  },
];

export const Careers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-4">
          <Briefcase className="h-4 w-4 text-primary" />
          <span className="text-xs text-muted-foreground">Join us</span>
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-3">
          Open Positions
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Help us build the future of trade infrastructure. We're looking for exceptional people who want to solve hard problems.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {openRoles.map((role, i) => (
          <motion.a
            key={role.title}
            href={role.href}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300"
          >
            <div>
              <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {role.title}
              </h4>
              <div className="flex items-center gap-4 mt-2">
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Briefcase className="h-3 w-3" />
                  {role.department}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {role.location}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {role.type}
                </span>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-muted-foreground mb-4">
          Don't see a role that fits? We're always looking for talented people.
        </p>
        <a
          href="mailto:careers@traibox.com"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          Send us your resume
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </motion.div>
  );
};
