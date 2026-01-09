import { motion } from "framer-motion";

export const TraiboxLogo = ({ className = "h-8 w-8" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Outer hexagon */}
    <motion.path
      d="M20 2L36.66 11V29L20 38L3.34 29V11L20 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    {/* Inner network nodes */}
    <motion.circle
      cx="20"
      cy="11"
      r="2.5"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.8 }}
    />
    <motion.circle
      cx="11"
      cy="24"
      r="2.5"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.9 }}
    />
    <motion.circle
      cx="29"
      cy="24"
      r="2.5"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
    />
    {/* Connecting lines */}
    <motion.path
      d="M20 11L11 24M20 11L29 24M11 24L29 24"
      stroke="currentColor"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 1.1 }}
    />
    {/* Center node */}
    <motion.circle
      cx="20"
      cy="20"
      r="3"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1.4 }}
    />
  </motion.svg>
);
