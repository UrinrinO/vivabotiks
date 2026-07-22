import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal } from "@/components/ui/Reveal";
import { RevealImage } from "@/components/ui/RevealImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";
import { servicesPage } from "@/content/services";

export const metadata: Metadata = {
  title: servicesPage.metaTitle,
  description: servicesPage.metaDescription,
};

export default function ServicesPage() {
  const { intro, details, closing } = servicesPage;
  return (
    <main>
      <PageHero title={servicesPage.title} breadcrumb={servicesPage.breadcrumb} />

      <section className="mx-auto max-w-6xl px-6 pt-24">
        <Reveal>
          <Tag>{intro.eyebrow}</Tag>
          <SectionHeading title={intro.title} intro={intro.description} className="mt-4" />
        </Reveal>
      </section>

      {/* One row per service, image side alternating */}
      <section className="mx-auto max-w-6xl space-y-24 px-6 py-24">
        {details.map((service, i) => (
          <div
            key={service.number}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            <Reveal scale className={cn("group", i % 2 === 1 && "lg:order-2")}>
              <RevealImage
                src={service.image}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[4/3] w-full"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-heading text-3xl font-bold text-accent-bright">
                {service.number}
              </span>
              <h2 className="mt-3 border-b border-border pb-4 font-heading text-2xl font-semibold text-ink sm:text-3xl">
                {service.title}
              </h2>
              <div className="mt-5 space-y-4">
                {service.paragraphs.map((p) => (
                  <p key={p} className="text-base leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
              <ul className="mt-6 space-y-2">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm font-medium text-ink">
                    <Check aria-hidden className="size-4 shrink-0 text-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </section>

      <FinalCta headline={closing.title} subline={closing.paragraph} cta={closing.cta} />
    </main>
  );
}
