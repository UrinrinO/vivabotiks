import { stats } from "@/content/home";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="bg-gradient-to-r from-navy-soft/60 via-navy to-navy-soft/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center">
            <p className="font-heading text-4xl font-bold text-accent sm:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm font-medium text-foam/80">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
