import { hero } from "@/content/home";
import { Marquee } from "@/components/ui/Marquee";
import { PixelDissolve } from "@/components/ui/PixelDissolve";

export function TextMarquee() {
  return (
    // Top of the mid-page dark band: dark squares dissolve over the light
    // section above so the light->dark boundary reads as a fade, not a cut.
    <section>
      <PixelDissolve to="var(--color-ink)" />
      <div className="bg-ink py-6">
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
      </div>
    </section>
  );
}
