import { stats } from "@/content/home";
import { founderQuote } from "@/content/marketing";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

export function StatsQuote() {
  const initials = founderQuote.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl font-bold text-ink sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-ink-soft">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <figure className="rounded-3xl border border-border bg-bg p-8 shadow-sm">
            <blockquote className="font-heading text-xl font-medium leading-snug text-ink sm:text-2xl">
              “{founderQuote.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <span
                aria-hidden
                className="flex size-12 items-center justify-center rounded-full bg-ink font-heading text-sm font-bold text-white"
              >
                {initials}
              </span>
              <span className="text-sm">
                <span className="block font-semibold text-ink">{founderQuote.name}</span>
                <span className="block text-ink-soft">{founderQuote.role}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
