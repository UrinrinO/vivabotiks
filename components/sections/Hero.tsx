import { hero } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-bg pt-32 pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] size-[34rem] rounded-full bg-accent-bright/15 blur-3xl [animation:glow-drift_16s_ease-in-out_infinite]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[3fr_2fr]">
        <div>
          <Tag>AI-powered software company</Tag>
          <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{hero.subline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} star>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* Abstract dashboard mock — pure CSS, no imagery */}
        <div aria-hidden className="relative mx-auto hidden h-80 w-full max-w-sm lg:block">
          <div className="absolute inset-0 rounded-3xl border border-border bg-surface shadow-sm" />
          <div className="absolute left-6 top-6 right-6 flex items-center gap-2">
            <span className="size-3 rounded-full bg-accent-bright" />
            <span className="size-3 rounded-full bg-ink/15" />
            <span className="size-3 rounded-full bg-ink/15" />
          </div>
          <div className="absolute left-6 right-6 top-16 h-24 rounded-2xl bg-gradient-to-tr from-accent/20 via-surface-2 to-bg" />
          <div className="absolute left-6 top-44 h-3 w-40 rounded-full bg-ink/10" />
          <div className="absolute left-6 top-52 h-3 w-28 rounded-full bg-ink/10" />
          <div className="absolute bottom-6 left-6 right-6 flex gap-3">
            <div className="h-16 flex-1 rounded-xl bg-surface-2" />
            <div className="h-16 flex-1 rounded-xl bg-accent/15" />
            <div className="h-16 flex-1 rounded-xl bg-surface-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
