import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { PixelDissolve } from "@/components/ui/PixelDissolve";
import { Reveal } from "@/components/ui/Reveal";
import { RevealImage } from "@/components/ui/RevealImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { aboutPage } from "@/content/about";

export const metadata: Metadata = {
  title: aboutPage.metaTitle,
  description: aboutPage.metaDescription,
};

export default function AboutPage() {
  const { story, team, lifecycle, credentials } = aboutPage;
  return (
    <main>
      <PageHero title={aboutPage.title} breadcrumb={aboutPage.breadcrumb} />

      {/* Story */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <Reveal>
          <Tag>{story.eyebrow}</Tag>
          <SectionHeading title={story.title} className="mt-4" />
          <div className="mt-6 space-y-4">
            {story.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} scale className="group">
          <RevealImage
            src="/about-office.jpg"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="aspect-[4/3] w-full"
          />
        </Reveal>
      </section>

      {/* Team */}
      <section>
        <PixelDissolve />
        <div className="bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2">
            <Reveal>
              <Tag>{team.eyebrow}</Tag>
              <SectionHeading title={team.title} className="mt-4" />
              <div className="mt-6 space-y-4">
                {team.paragraphs.map((p) => (
                  <p key={p} className="text-base leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
                <p className="border-t border-border pt-4 text-base font-medium text-ink">
                  {team.note}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-6 sm:grid-cols-2">
                {team.callouts.map((c) => (
                  <div key={c.title} className="border border-border bg-bg p-8">
                    <Check aria-hidden className="size-6 text-accent" />
                    <h3 className="mt-5 font-heading text-lg font-semibold text-ink">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <Tag>{lifecycle.eyebrow}</Tag>
          <SectionHeading
            title={lifecycle.title}
            intro={lifecycle.description}
            className="mt-4"
          />
        </Reveal>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {lifecycle.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.06} scale>
              <li>
                <span className="font-heading text-3xl font-bold text-accent-bright">
                  {step.number}
                </span>
                <h3 className="mt-3 border-b border-border pb-3 font-heading text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Credentials */}
      <section>
        <PixelDissolve />
        <div className="bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal>
              <Tag>{credentials.eyebrow}</Tag>
              <SectionHeading title={credentials.title} className="mt-4" />
            </Reveal>
            <ul className="mt-12">
              {credentials.items.map((item) => (
                <li key={item.title} className="border-b border-border py-6 first:border-t">
                  <Reveal>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-heading text-xl font-semibold text-ink">{item.title}</h3>
                      {item.year && (
                        <span className="font-heading text-sm text-accent">{item.year}</span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-ink-soft">{item.detail}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
