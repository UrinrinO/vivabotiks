import type { Metadata } from "next";
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
  const { story, leadership, credentials } = aboutPage;
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

      {/* Leadership */}
      <section>
        <PixelDissolve />
        <div className="bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <Tag>{leadership.eyebrow}</Tag>
              <SectionHeading title={leadership.title} className="mt-4" />
              <div className="mt-8 flex items-center gap-5">
                <span
                  aria-hidden
                  className="flex size-20 items-center justify-center bg-ink font-heading text-3xl font-bold text-accent-bright"
                >
                  {leadership.founder.name[0]}
                </span>
                <span>
                  <span className="block font-heading text-xl font-semibold text-ink">
                    {leadership.founder.name}
                  </span>
                  <span className="block text-sm text-ink-soft">{leadership.founder.role}</span>
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-4">
                {leadership.founder.bio.map((p) => (
                  <p key={p} className="text-base leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
                <p className="border-t border-border pt-4 text-base font-medium text-ink">
                  {leadership.execsNote}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-6xl px-6 py-24">
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
                  {item.year && <span className="font-heading text-sm text-accent">{item.year}</span>}
                </div>
                <p className="mt-1 text-sm text-ink-soft">{item.detail}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <FinalCta />
    </main>
  );
}
