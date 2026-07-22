import { describe, expect, it } from "vitest";
import { partners, caseStudies, founderQuote, awards, whyUs, pricing, posts } from "@/content/marketing";

describe("marketing content", () => {
  it("has the expected counts", () => {
    expect(partners).toHaveLength(6);
    expect(caseStudies).toHaveLength(3);
    expect(awards).toHaveLength(4);
    expect(whyUs).toHaveLength(6);
    expect(pricing).toHaveLength(3);
    expect(posts).toHaveLength(3);
  });
  it("each post has a real title, date, and image asset", () => {
    expect(posts.map((p) => p.title)).toEqual([
      "Cloud computing & Cybersecurity",
      "Web development in Nigeria",
      "Business and Innovation",
    ]);
    for (const p of posts) {
      expect(p.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(p.image).toMatch(/^\/.+\.(jpg|jpeg|png|webp)$/);
    }
  });
  it("has exactly one popular pricing tier with monthly and annual prices", () => {
    expect(pricing.filter((t) => t.popular)).toHaveLength(1);
    for (const t of pricing) {
      expect(typeof t.monthly).toBe("number");
      expect(typeof t.annual).toBe("number");
      expect(t.features.length).toBeGreaterThan(0);
    }
  });
  it("founder quote has a name", () => {
    expect(founderQuote.name.length).toBeGreaterThan(0);
  });
});
