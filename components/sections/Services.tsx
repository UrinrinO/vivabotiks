import Link from "next/link";
import { ArrowUpRight, BarChart3, Bot, Box, Check, Code2 } from "lucide-react";
import { services } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Bot, Code2, BarChart3, Box];

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="What we do"
          title="Services built around outcomes"
          intro="Four core capabilities, delivered end to end by a senior team."
        />
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={service.number} delay={i * 0.08}>
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-ink text-white">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <span className="font-heading text-sm text-ink-soft/60">{service.number}</span>
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{service.description}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-ink-soft">
                      <Check aria-hidden className="size-4 shrink-0 text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1 font-heading text-sm font-medium text-accent">
                  Learn more
                  <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
