import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
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
  const { story, celebrating, imageCta, team, lifecycle } = aboutPage;
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

      {/* Celebrating */}
      <section className="bg-ice">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <Reveal>
            <Tag>{celebrating.eyebrow}</Tag>
            <div className="mt-6 flex items-center gap-6">
              <p className="font-heading text-7xl font-bold text-ink">
                <AnimatedCounter value={celebrating.stat.value} suffix={celebrating.stat.suffix} />
              </p>
              <p className="max-w-[14rem] border-l border-border pl-6 text-base text-ink-soft">
                {celebrating.stat.label}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-ink-soft">{celebrating.paragraph}</p>
            <ul className="mt-6 space-y-3">
              {celebrating.checks.map((check) => (
                <li key={check} className="flex items-center gap-3 text-sm font-medium text-ink">
                  <Check aria-hidden className="size-4 shrink-0 text-accent" />
                  {check}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section>
        <PixelDissolve from="var(--color-ice)" />
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

      <LogoMarquee />

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

      <CaseStudies />

      {/* Full-bleed image band with a single call to action */}
      <section className="relative flex h-96 items-center justify-center overflow-hidden">
        <Image
          src={imageCta.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <Reveal className="relative z-10 px-6 text-center">
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            {imageCta.title}
          </h2>
          <Link
            href={imageCta.href}
            className="mt-8 inline-flex items-center gap-2 bg-white px-6 py-3 font-heading text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
          >
            {imageCta.label}
          </Link>
        </Reveal>
      </section>

    </main>
  );
}
