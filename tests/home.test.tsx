import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { hero, testimonials, faqs, finalCta } from "@/content/home";

describe("Home page", () => {
  it("composes all sections in order", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1, name: hero.headline })).toBeInTheDocument();
    // Quote is wrapped in typographic quotes in the blockquote, so match as a substring.
    expect(screen.getByText(testimonials[0].quote, { exact: false })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: faqs[0].question })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: finalCta.headline })).toBeInTheDocument();
  });
});
