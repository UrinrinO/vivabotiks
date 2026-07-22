import { logosIntro, partners } from "@/content/marketing";
import { Marquee } from "@/components/ui/Marquee";

export function LogoMarquee() {
  return (
    <section className="border-y border-border bg-bg py-16">
      <p className="mx-auto mb-10 max-w-6xl px-6 text-center text-sm text-ink-soft">
        {logosIntro.title}
      </p>
      <Marquee duration={32}>
        {partners.map((p) => (
          <span
            key={p.name}
            className="mx-10 whitespace-nowrap font-heading text-2xl font-semibold text-ink-soft/45 transition-colors duration-300 hover:text-ink"
          >
            {p.name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
