import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/Hero";
import { hero } from "@/content/home";

describe("Hero", () => {
  it("renders headline, subline, and both CTAs from content", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1, name: hero.headline })).toBeInTheDocument();
    expect(screen.getByText(hero.subline)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: hero.primaryCta.label })).toHaveAttribute("href", hero.primaryCta.href);
    expect(screen.getByRole("link", { name: hero.secondaryCta.label })).toHaveAttribute("href", hero.secondaryCta.href);
  });
});
