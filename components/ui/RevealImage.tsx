"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type RevealImageProps = {
  src: string;
  alt?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

// A full-bleed image that scale-settles into place on scroll (1.12 -> 1). The
// scroll-in settle lives on the motion wrapper; the hover zoom lives on the
// <Image> itself so the two transforms compose instead of fighting. Under
// prefers-reduced-motion it renders a static image.
export function RevealImage({ src, alt = "", sizes, className, priority }: RevealImageProps) {
  const reduce = useReducedMotion();

  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {reduce ? (
        image
      ) : (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.12 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {image}
        </motion.div>
      )}
    </div>
  );
}
