import type { MetadataRoute } from "next";
import { navCta, navLinks, siteMeta } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // The contact page lives behind the CTA rather than the nav, so include it explicitly.
  const hrefs = [...new Set([...navLinks.map((l) => l.href), navCta.href])];
  return hrefs.map((href) => ({
    url: `${siteMeta.url}${href === "/" ? "" : href}`,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.7,
  }));
}
