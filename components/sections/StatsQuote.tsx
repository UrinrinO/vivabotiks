import { stats } from "@/content/home";
import { founderQuote } from "@/content/marketing";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { PixelDissolve } from "@/components/ui/PixelDissolve";

export function StatsQuote() {
  const initials = founderQuote.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <section className="text-white">
      {/* Top of the dark band: dark squares dissolve over the light section
          above so the light->dark boundary reads as a fade, not a cut. */}
      <PixelDissolve to="#04131E" />
      <div className="relative overflow-hidden bg-[#04131E]">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8rem] top-0 size-[32rem] rounded-full bg-[#2f56ff]/20 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-36 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl font-bold text-accent-bright sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <figure className="border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
            <blockquote className="font-heading text-xl font-medium leading-snug text-white sm:text-2xl">
              “{founderQuote.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <span
                aria-hidden
                className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-bright font-heading text-sm font-bold text-[#04131E]"
              >
                {initials}
              </span>
              <span className="text-sm">
                <span className="block font-semibold text-white">{founderQuote.name}</span>
                <span className="block text-white/60">{founderQuote.role}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
      {/* Bottom of the dark band: white squares dissolve in over the dark tail
          so the dark->light boundary into the section below reads as a fade. */}
      <PixelDissolve className="relative" from="transparent" to="var(--color-bg)" />
      </div>
    </section>
  );
}
