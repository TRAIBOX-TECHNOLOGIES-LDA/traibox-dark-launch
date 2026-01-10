import { motion } from "framer-motion";

interface TraiboxLogoProps {
  className?: string;
}

export const TraiboxLogo = ({ 
  className = "h-24"
}: TraiboxLogoProps) => (
  <motion.img
    src="/trai-box.png"
    alt="Traibox Logo"
    className={className}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  />
);
