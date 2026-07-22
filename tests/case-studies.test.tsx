import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { caseStudies, caseStudiesIntro } from "@/content/marketing";

describe("CaseStudies", () => {
  it("renders the intro and every case study", () => {
    const { container } = render(<CaseStudies />);
    expect(screen.getByRole("heading", { name: caseStudiesIntro.title })).toBeInTheDocument();
    const imgHtml = container.innerHTML;
    for (const c of caseStudies) {
      expect(screen.getByText(c.title)).toBeInTheDocument();
      expect(screen.getByText(c.result)).toBeInTheDocument();
      const base = c.image.replace(/^\//, "").replace(/\.jpg$/, "");
      expect(imgHtml).toContain(base);
    }
  });
});
