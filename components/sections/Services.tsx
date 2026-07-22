import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
        {services.map((service, i) => (
          <Reveal key={service.number} delay={i * 0.08} scale>
            <Link
              href={service.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-sm"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 rounded-full bg-[#04060c]/70 px-2.5 py-1 font-heading text-xs text-white backdrop-blur">
                  {service.number}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-heading text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-ink-soft">{service.description}</p>
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
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
