import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pricing } from "@/components/sections/Pricing";
import { pricing } from "@/content/marketing";

describe("Pricing", () => {
  it("shows monthly prices by default and switches to annual", async () => {
    render(<Pricing />);
    expect(screen.getByText(new RegExp(`\\$${pricing[0].monthly}`))).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Annual" }));
    expect(screen.getByText(new RegExp(`\\$${pricing[0].annual}`))).toBeInTheDocument();
  });
  it("marks exactly one tier popular", () => {
    render(<Pricing />);
    expect(screen.getByText("Popular")).toBeInTheDocument();
  });
});
