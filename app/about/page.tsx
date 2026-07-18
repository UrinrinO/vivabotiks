import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { stubBackHome, stubPages } from "@/content/pages";

const page = stubPages.about;

export const metadata: Metadata = { title: page.title, description: page.metaDescription };

export default function AboutPage() {
  return (
    <main>
      <PageHero title={page.title} breadcrumb={page.breadcrumb} />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="max-w-xl text-lg leading-relaxed text-ink-soft">{page.message}</p>
        <Button href={stubBackHome.href} variant="ghost" className="mt-10">
          {stubBackHome.label}
        </Button>
      </div>
    </main>
  );
}
