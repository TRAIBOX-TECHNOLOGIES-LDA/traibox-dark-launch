import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Alex Mercer",
    role: "CEO & Co-founder",
    bio: "Previously led product at global trade finance platform. 15+ years in enterprise software.",
    avatar: "AM",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Chen",
    role: "CTO & Co-founder",
    bio: "Former engineering lead at fintech unicorn. Deep expertise in distributed systems.",
    avatar: "SC",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Schmidt",
    role: "Head of Compliance",
    bio: "Ex-regulator with 20 years in trade compliance. Led policy teams across EU institutions.",
    avatar: "MS",
    linkedin: "#",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product",
    bio: "Built products at leading logistics platforms. Obsessed with operational excellence.",
    avatar: "ER",
    linkedin: "#",
    twitter: "#",
  },
];

export const TeamSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h3 className="text-xl font-semibold text-foreground text-center mb-8">Leadership Team</h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center hover:border-primary/30 transition-all duration-300"
          >
            {/* Avatar */}
            <div className="relative mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
              <span className="text-xl font-semibold text-primary">{member.avatar}</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Info */}
            <h4 className="text-sm font-semibold text-foreground mb-1">{member.name}</h4>
            <p className="text-xs text-primary mb-3">{member.role}</p>
            <p className="text-xs text-muted-foreground mb-4 line-clamp-3">{member.bio}</p>

            {/* Social */}
            <div className="flex items-center justify-center gap-2">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
                >
                  <Linkedin className="h-4 w-4 text-muted-foreground" />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
                >
                  <Twitter className="h-4 w-4 text-muted-foreground" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
