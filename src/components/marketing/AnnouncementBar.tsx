import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-b border-primary/20"
      >
        <div className="container mx-auto px-6 py-2.5">
          <div className="flex items-center justify-center gap-3 text-sm">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-muted-foreground">
              <span className="font-medium text-foreground">New:</span>{" "}
              TRAIBOX Platform is now Generally Available.
            </span>
            <Link
              to="/request-access"
              className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
            >
              Get early access
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition"
        >
          <X className="h-4 w-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
