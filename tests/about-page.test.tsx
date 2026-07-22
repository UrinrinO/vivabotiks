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

  it("renders the founder and the leadership note", () => {
    render(<AboutPage />);
    expect(screen.getByText(aboutPage.leadership.founder.name)).toBeInTheDocument();
    expect(screen.getByText(aboutPage.leadership.founder.role)).toBeInTheDocument();
    expect(screen.getByText(aboutPage.leadership.execsNote)).toBeInTheDocument();
  });

  it("renders every credential", () => {
    render(<AboutPage />);
    for (const item of aboutPage.credentials.items) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
  });
});
