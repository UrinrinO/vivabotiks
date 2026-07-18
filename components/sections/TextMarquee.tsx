import { hero } from "@/content/home";
import { Marquee } from "@/components/ui/Marquee";

export function TextMarquee() {
  return (
    <section className="bg-ink py-6">
      <Marquee duration={24}>
        {hero.ticker.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap px-8 font-heading text-sm uppercase tracking-[0.25em] text-white/70"
          >
            {item}
            <span className="text-accent-bright">★</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
