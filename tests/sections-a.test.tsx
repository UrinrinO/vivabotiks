import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Services } from "@/components/sections/Services";
import { AboutBlock } from "@/components/sections/AboutBlock";
import { services, about } from "@/content/home";

describe("Services", () => {
  it("renders all four service cards with titles and first bullets", () => {
    render(<Services />);
    for (const s of services) {
      expect(screen.getByText(s.title)).toBeInTheDocument();
      expect(screen.getByText(s.description)).toBeInTheDocument();
      expect(screen.getByText(s.bullets[0])).toBeInTheDocument();
    }
  });
});

describe("AboutBlock", () => {
  it("renders headline, paragraphs, and checks", () => {
    render(<AboutBlock />);
    expect(screen.getByRole("heading", { name: about.headline })).toBeInTheDocument();
    for (const p of about.paragraphs) expect(screen.getByText(p)).toBeInTheDocument();
    for (const c of about.checks) expect(screen.getByText(c)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: about.cta.label })).toHaveAttribute("href", about.cta.href);
  });

  it("renders the motif words", () => {
    render(<AboutBlock />);
    for (const word of about.motif) expect(screen.getByText(word)).toBeInTheDocument();
  });
});
