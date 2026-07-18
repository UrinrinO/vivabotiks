import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { TextMarquee } from "@/components/sections/TextMarquee";
import { logosIntro } from "@/content/marketing";

describe("LogoMarquee", () => {
  it("renders the intro title", () => {
    render(<LogoMarquee />);
    expect(screen.getByText(logosIntro.title)).toBeInTheDocument();
  });
});

describe("TextMarquee", () => {
  it("renders at least one capability word", () => {
    render(<TextMarquee />);
    expect(screen.getAllByText("AI Automation").length).toBeGreaterThan(0);
  });
});
