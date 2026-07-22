import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 font-heading text-sm font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{intro}</p>}
    </div>
  );
}
