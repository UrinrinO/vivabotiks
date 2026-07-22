"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
};

const eyebrowCls = "mb-3 font-heading text-sm font-medium uppercase tracking-[0.2em] text-accent";
const titleCls = "font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl";
const introCls = "mt-4 text-base leading-relaxed text-ink-soft sm:text-lg";

export function SectionHeading({ eyebrow, title, intro, align = "left", className }: SectionHeadingProps) {
  const reduce = useReducedMotion();
  const wrapCls = cn("max-w-2xl", align === "center" && "mx-auto text-center", className);

  if (reduce) {
    return (
      <div className={wrapCls}>
        {eyebrow && <p className={eyebrowCls}>{eyebrow}</p>}
        <h2 className={titleCls}>{title}</h2>
        {intro && <p className={introCls}>{intro}</p>}
      </div>
    );
  }

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={wrapCls}
    >
      {eyebrow && (
        <motion.p variants={fadeUp} className={eyebrowCls}>
          {eyebrow}
        </motion.p>
      )}
      <motion.h2 variants={fadeUp} className={titleCls}>
        {title}
      </motion.h2>
      {intro && (
        <motion.p variants={fadeUp} className={introCls}>
          {intro}
        </motion.p>
      )}
    </motion.div>
  );
}
