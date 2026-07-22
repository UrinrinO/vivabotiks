import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Blog } from "@/components/sections/Blog";
import { posts, blogIntro } from "@/content/marketing";

describe("Blog", () => {
  it("renders the intro and every post title", () => {
    render(<Blog />);
    expect(screen.getByRole("heading", { name: blogIntro.title })).toBeInTheDocument();
    for (const p of posts) expect(screen.getByText(p.title)).toBeInTheDocument();
  });

  it("renders each post's category and date meta", () => {
    render(<Blog />);
    for (const p of posts) {
      expect(screen.getByText(p.category)).toBeInTheDocument();
      expect(screen.getByText(p.date)).toBeInTheDocument();
    }
  });
});
