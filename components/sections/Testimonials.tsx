import { Star } from "lucide-react";
import { testimonials, testimonialsIntro } from "@/content/home";
import { Carousel } from "@/components/ui/Carousel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const slides = testimonials.map((t) => (
    <figure key={t.name + t.company} className="max-w-3xl">
      <div aria-label="5 out of 5 stars" className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} aria-hidden className="size-4 fill-accent text-accent" />
        ))}
      </div>
      <blockquote className="mt-6 font-heading text-2xl font-medium leading-snug text-foam sm:text-3xl">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 text-sm text-mist">
        <span className="font-semibold text-foam">{t.name}</span> — {t.role}, {t.company}
      </figcaption>
    </figure>
  ));

  return (
    <section className="border-y border-foam/10 bg-navy-deep/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow={testimonialsIntro.eyebrow} title={testimonialsIntro.title} />
        </Reveal>
        <div className="mt-12">
          <Carousel label="Client testimonials" slides={slides} />
        </div>
      </div>
    </section>
  );
}
