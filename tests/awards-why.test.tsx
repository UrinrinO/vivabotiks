import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Awards } from "@/components/sections/Awards";
import { WhyUs } from "@/components/sections/WhyUs";
import { awards, awardsIntro, whyUs, whyUsIntro } from "@/content/marketing";

describe("Awards", () => {
  it("renders intro and every award", () => {
    render(<Awards />);
    expect(screen.getByRole("heading", { name: awardsIntro.title })).toBeInTheDocument();
    for (const a of awards) expect(screen.getByText(a.title)).toBeInTheDocument();
  });
});

describe("WhyUs", () => {
  it("renders intro and all six items", () => {
    render(<WhyUs />);
    expect(screen.getByRole("heading", { name: whyUsIntro.title })).toBeInTheDocument();
    for (const w of whyUs) expect(screen.getByText(w.title)).toBeInTheDocument();
  });
});
