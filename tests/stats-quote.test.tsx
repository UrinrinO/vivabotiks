import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatsQuote } from "@/components/sections/StatsQuote";
import { stats } from "@/content/home";
import { founderQuote } from "@/content/marketing";

describe("StatsQuote", () => {
  it("renders stat labels and the founder name", () => {
    render(<StatsQuote />);
    for (const s of stats) expect(screen.getByText(s.label)).toBeInTheDocument();
    expect(screen.getByText(founderQuote.name)).toBeInTheDocument();
  });
});
