import { logosIntro, partners } from "@/content/marketing";
import { Marquee } from "@/components/ui/Marquee";
import { PixelDissolve } from "@/components/ui/PixelDissolve";

export function LogoMarquee() {
  return (
    <section className="bg-bg pb-16">
      {/* Surface-tinted about section above dissolves into this white band */}
      <PixelDissolve flip to="var(--color-surface)" />
      <p className="mx-auto mb-10 mt-8 max-w-6xl px-6 text-center text-sm text-ink-soft">
        {logosIntro.title}
      </p>
      <Marquee duration={32}>
        {partners.map((p) => (
          <span
            key={p.name}
            className="mx-10 whitespace-nowrap font-heading text-2xl font-semibold text-ink-soft/45"
          >
            {p.name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
