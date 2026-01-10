import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, HelpCircle } from "lucide-react";
import { TraiboxLogo } from "@/components/marketing/TraiboxLogo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const suggestions = [
    { icon: Home, label: "Go to Homepage", href: "/", description: "Start fresh from the main page" },
    { icon: Search, label: "Request Access", href: "/request-access", description: "Join the TRAIBOX platform" },
    { icon: HelpCircle, label: "Contact Support", href: "mailto:hello@traibox.com", description: "We're here to help" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[80px]" />
      </div>

      <div className="flex-1 flex items-center justify-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full text-center"
        >
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
            <TraiboxLogo className="h-24" />
          </Link>

          {/* 404 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", damping: 15 }}
            className="mb-8"
          >
            <span className="text-[120px] md:text-[160px] font-bold leading-none bg-gradient-to-b from-foreground to-muted-foreground/50 bg-clip-text text-transparent">
              404
            </span>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-2xl font-semibold text-foreground mb-3">
              Page not found
            </h1>
            <p className="text-muted-foreground mb-2">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-xs text-muted-foreground/60 font-mono mb-8">
              Path: {location.pathname}
            </p>
          </motion.div>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-3 mb-8"
          >
            {suggestions.map((item, i) => (
              <Link
                key={item.label}
                to={item.href}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </Link>
            ))}
          </motion.div>

          {/* Back button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
          </motion.button>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="py-6 text-center text-xs text-muted-foreground relative z-10">
        © {new Date().getFullYear()} TRAIBOX. All rights reserved.
      </div>
    </div>
  );
};

export default NotFound;