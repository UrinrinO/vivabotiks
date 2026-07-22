import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ArticlesPage from "@/app/articles/page";
import { articlesPage } from "@/content/articles";
import { posts } from "@/content/marketing";

describe("Articles page", () => {
  it("renders the page title and every article", () => {
    render(<ArticlesPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: articlesPage.title }),
    ).toBeInTheDocument();
    for (const post of posts) {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    }
  });
});
