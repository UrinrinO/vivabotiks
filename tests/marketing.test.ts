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
