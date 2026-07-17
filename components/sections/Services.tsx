import Link from "next/link";
import { ArrowUpRight, BarChart3, Bot, Box, Code2 } from "lucide-react";
import { services } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";

const icons = [Bot, Code2, BarChart3, Box];

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={service.number} delay={i * 0.08}>
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-2xl border border-foam/10 bg-navy-deep/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
              >
                <div className="flex items-start justify-between">
                  <Icon aria-hidden className="size-8 text-accent" />
                  <span className="font-heading text-sm text-foam/40">{service.number}</span>
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold text-foam">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{service.description}</p>
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
