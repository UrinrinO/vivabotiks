import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "@/components/ui/Accordion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const items = [
  { question: "Q1", answer: "A1" },
  { question: "Q2", answer: "A2" },
];

describe("Accordion", () => {
  it("opens the first item by default and toggles others", async () => {
    render(<Accordion items={items} />);
    expect(screen.getByRole("button", { name: "Q1" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("A1")).toBeVisible();
    await userEvent.click(screen.getByRole("button", { name: "Q2" }));
    expect(screen.getByRole("button", { name: "Q2" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "Q1" })).toHaveAttribute("aria-expanded", "false");
  });
});

describe("AnimatedCounter", () => {
  it("renders a numeric value with suffix", () => {
    render(<AnimatedCounter value={95} suffix="%" />);
    expect(screen.getByText(/%$/)).toBeInTheDocument();
  });
});
