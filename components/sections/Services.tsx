import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";
import { RevealImage } from "@/components/ui/RevealImage";
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
      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.number} delay={i * 0.08} scale>
            <Link href={service.href} className="group flex h-full flex-col">
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
