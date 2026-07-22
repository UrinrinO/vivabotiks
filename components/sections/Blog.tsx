import Image from "next/image";
import { blogIntro, posts } from "@/content/marketing";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Blog() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow={blogIntro.eyebrow} title={blogIntro.title} />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <Tag>{post.category}</Tag>
                    <span className="text-xs text-ink-soft">{post.date}</span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
                  <span className="mt-4 font-heading text-sm font-medium text-accent">Read more</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
