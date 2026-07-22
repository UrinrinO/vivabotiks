"use client";

import { motion, useReducedMotion } from "motion/react";

type RevealProps = { children: React.ReactNode; delay?: number; className?: string; scale?: boolean };

export function Reveal({ children, delay = 0, className, scale = false }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, ...(scale ? { scale: 0.98 } : {}) }}
      whileInView={{ opacity: 1, y: 0, ...(scale ? { scale: 1 } : {}) }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
