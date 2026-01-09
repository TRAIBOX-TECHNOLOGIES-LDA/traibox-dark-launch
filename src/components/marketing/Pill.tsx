import { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
}

export const Pill = ({ children }: PillProps) => (
  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
    {children}
  </span>
);
