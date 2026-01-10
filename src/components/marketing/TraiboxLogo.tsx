import { motion } from "framer-motion";

interface TraiboxLogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

export const TraiboxLogo = ({ 
  className = "h-8 w-8", 
  showText = false,
  textClassName = "text-xl font-semibold tracking-tight"
}: TraiboxLogoProps) => (
  <div className="flex items-center gap-2.5">
    <motion.div
      className={`${className} rounded-md bg-primary flex items-center justify-center`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <span className="text-primary-foreground font-bold text-[0.6em]" style={{ fontSize: '60%' }}>
        T
      </span>
    </motion.div>
    {showText && (
      <motion.span
        className={`${textClassName} text-foreground`}
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        style={{ letterSpacing: '0.02em' }}
      >
        TRAIBOX
      </motion.span>
    )}
  </div>
);
