import type { MetadataRoute } from "next";
import { navLinks, siteMeta } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((link) => ({
    url: `${siteMeta.url}${link.href === "/" ? "" : link.href}`,
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.7,
  }));
}
