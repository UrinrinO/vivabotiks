import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Blog } from "@/components/sections/Blog";
import { FinalCta } from "@/components/sections/FinalCta";
import { articlesPage } from "@/content/articles";

export const metadata: Metadata = {
  title: articlesPage.metaTitle,
  description: articlesPage.metaDescription,
};

export default function ArticlesPage() {
  return (
    <main>
      <PageHero title={articlesPage.title} breadcrumb={articlesPage.breadcrumb} />
      <Blog />
      <FinalCta />
    </main>
  );
}
