"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { services } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";
import { RevealImage } from "@/components/ui/RevealImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PER_PAGE = 2;

export function Services() {
  const reduce = useReducedMotion();
  const pageCount = Math.ceil(services.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const visible = services.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const next = () => setPage((p) => (p + 1) % pageCount);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What we do"
            title="Services built around outcomes"
            intro="Four core capabilities, delivered end to end by a senior team."
          />
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous services"
              className="border border-border p-3 text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowLeft aria-hidden className="size-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next services"
              className="border border-border p-3 text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowRight aria-hidden className="size-5" />
            </button>
          </div>
        </div>
      </Reveal>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: reduce ? 0 : 0.35, ease: "easeOut" }}
          className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2"
        >
          {visible.map((service) => (
            <Link key={service.number} href={service.href} className="group flex h-full flex-col">
              <RevealImage
                src={service.image}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="aspect-[16/10] w-full"
              />
              <div className="mt-6 flex items-start justify-between gap-4 border-b border-border pb-5">
                <h3 className="font-heading text-xl font-semibold text-ink sm:text-2xl">
                  {service.title}
                </h3>
                <ArrowUpRight
                  aria-hidden
                  className="mt-1 size-5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                {service.description}
              </p>
              <ul className="mt-6 flex-1 space-y-2">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-ink-soft">
                    <Check aria-hidden className="size-4 shrink-0 text-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
