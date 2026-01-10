import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check } from "lucide-react";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl p-5 shadow-2xl shadow-black/20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-foreground mb-1">We value your privacy</h4>
                <p className="text-xs text-muted-foreground mb-4">
                  We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. 
                  By continuing, you agree to our use of cookies.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleAccept}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition"
                  >
                    <Check className="h-3 w-3" />
                    Accept all
                  </button>
                  <button
                    onClick={handleDecline}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-foreground hover:bg-white/10 transition"
                  >
                    Decline
                  </button>
                  <a
                    href="#"
                    className="text-xs text-muted-foreground hover:text-foreground transition ml-2"
                  >
                    Preferences
                  </a>
                </div>
              </div>
              <button
                onClick={handleDecline}
                className="flex-shrink-0 p-1 text-muted-foreground hover:text-foreground transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
