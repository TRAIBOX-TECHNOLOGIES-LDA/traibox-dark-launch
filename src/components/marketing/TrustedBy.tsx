import { motion } from "framer-motion";

const logos = [
  { name: "Maersk", width: 120 },
  { name: "DHL", width: 80 },
  { name: "HSBC", width: 100 },
  { name: "Santander", width: 120 },
  { name: "CMA CGM", width: 110 },
  { name: "BNP Paribas", width: 120 },
];

export const TrustedBy = () => {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Trusted by leading organizations
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling logos */}
          <div className="flex items-center gap-16 animate-scroll">
            {[...logos, ...logos].map((logo, i) => (
              <motion.div
                key={`${logo.name}-${i}`}
                className="flex-shrink-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % logos.length) * 0.1 }}
              >
                <div 
                  className="flex items-center justify-center h-12 px-6 rounded-lg bg-white/[0.03] border border-white/5"
                  style={{ minWidth: logo.width }}
                >
                  <span className="text-sm font-semibold text-white/30 tracking-wide">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-xs text-muted-foreground">
            Serving enterprise teams across trade finance, logistics, and compliance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
