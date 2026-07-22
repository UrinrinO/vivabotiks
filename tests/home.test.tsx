import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { hero, finalCta } from "@/content/home";
import { founderQuote } from "@/content/marketing";

describe("Home page", () => {
  it("composes the key sections", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1, name: hero.headline })).toBeInTheDocument();
    expect(screen.getByText(founderQuote.name)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: finalCta.headline })).toBeInTheDocument();
  });
});
