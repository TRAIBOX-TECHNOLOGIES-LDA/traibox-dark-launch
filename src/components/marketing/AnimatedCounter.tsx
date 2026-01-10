import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  delay?: number;
}

export const AnimatedCounter = ({ value, className, delay = 0 }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState("");
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  // Parse the value to extract number and suffix
  const parseValue = (val: string) => {
    const match = val.match(/^(\d+\.?\d*)(.*)/);
    if (match) {
      return { number: parseFloat(match[1]), suffix: match[2] };
    }
    // Handle special cases like "24/7"
    return { number: 0, suffix: val };
  };

  const { number, suffix } = parseValue(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    // Special case for non-numeric values
    if (number === 0 && suffix === value) {
      const timeout = setTimeout(() => {
        setDisplayValue(value);
      }, delay);
      return () => clearTimeout(timeout);
    }

    const duration = 2000;
    const startDelay = delay;
    let startTime: number;
    let animationFrame: number;

    const startAnimation = () => {
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = easeOutQuart * number;
        
        // Format based on original value format
        const isInteger = Number.isInteger(number);
        const formatted = isInteger 
          ? Math.round(currentCount).toString()
          : currentCount.toFixed(1);
        
        setDisplayValue(formatted + suffix);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    };

    const timeout = setTimeout(startAnimation, startDelay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, number, suffix, value, delay]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 1000, type: "spring", stiffness: 100 }}
    >
      {displayValue || "0"}
    </motion.span>
  );
};
