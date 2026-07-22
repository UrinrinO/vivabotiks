import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";
import { aboutPage } from "@/content/about";

describe("About page", () => {
  it("renders the page title and story", () => {
    render(<AboutPage />);
    expect(screen.getByRole("heading", { level: 1, name: aboutPage.title })).toBeInTheDocument();
    for (const p of aboutPage.story.paragraphs) {
      expect(screen.getByText(p)).toBeInTheDocument();
    }
  });

  it("renders the team section with callouts and the leadership note", () => {
    render(<AboutPage />);
    expect(screen.getByRole("heading", { name: aboutPage.team.title })).toBeInTheDocument();
    for (const c of aboutPage.team.callouts) {
      expect(screen.getByText(c.title)).toBeInTheDocument();
    }
    expect(screen.getByText(aboutPage.team.note)).toBeInTheDocument();
  });

  it("renders every lifecycle step", () => {
    render(<AboutPage />);
    for (const step of aboutPage.lifecycle.steps) {
      expect(screen.getByText(step.title)).toBeInTheDocument();
    }
  });

  it("renders the celebrating stat checks and the closing band", () => {
    render(<AboutPage />);
    for (const check of aboutPage.celebrating.checks) {
      expect(screen.getByText(check)).toBeInTheDocument();
    }
    expect(screen.getByRole("heading", { name: aboutPage.closing.title })).toBeInTheDocument();
    expect(screen.getByText(aboutPage.closing.paragraph)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: aboutPage.closing.cta.label })).toHaveAttribute(
      "href",
      aboutPage.closing.cta.href,
    );
  });
});
