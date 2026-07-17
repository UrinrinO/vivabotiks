import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { stats, processSteps, processIntro } from "@/content/home";

describe("Stats", () => {
  it("renders all four stat labels", () => {
    render(<Stats />);
    for (const s of stats) expect(screen.getByText(s.label)).toBeInTheDocument();
  });
});

describe("Process", () => {
  it("renders intro and all five steps", () => {
    render(<Process />);
    expect(screen.getByRole("heading", { name: processIntro.title })).toBeInTheDocument();
    for (const step of processSteps) {
      expect(screen.getByText(step.title)).toBeInTheDocument();
      expect(screen.getByText(step.description)).toBeInTheDocument();
    }
  });
});
