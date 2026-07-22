import { ArrowUpRight } from "lucide-react";
import { blogIntro, posts } from "@/content/marketing";
import { PixelDissolve } from "@/components/ui/PixelDissolve";
import { Reveal } from "@/components/ui/Reveal";
import { RevealImage } from "@/components/ui/RevealImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Blog() {
  return (
    <section>
      {/* White why-us section above dissolves into this surface band */}
      <PixelDissolve />
      <div className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow={blogIntro.eyebrow} title={blogIntro.title} />
        </Reveal>
        <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08} scale>
              <article className="group flex h-full flex-col">
                <RevealImage
                  src={post.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="aspect-[4/5] w-full"
                />
                <div className="mt-6 flex items-center gap-3">
                  <Tag>{post.category}</Tag>
                  <span className="text-xs text-ink-soft">{post.date}</span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4 border-b border-border pb-5">
                  <h3 className="font-heading text-xl font-semibold text-ink sm:text-2xl">
                    {post.title}
                  </h3>
                  <ArrowUpRight
                    aria-hidden
                    className="mt-1 size-5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
