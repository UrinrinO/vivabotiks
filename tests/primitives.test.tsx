import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Marquee } from "@/components/ui/Marquee";
import { LogoChip } from "@/components/ui/LogoChip";
import { CardVisual } from "@/components/ui/CardVisual";
import { Toggle } from "@/components/ui/Toggle";

describe("Marquee", () => {
  it("renders its children (duplicated for loop)", () => {
    render(<Marquee><span>Hello</span></Marquee>);
    expect(screen.getAllByText("Hello").length).toBeGreaterThanOrEqual(1);
  });
});

describe("LogoChip", () => {
  it("exposes the partner name", () => {
    render(<LogoChip initials="NW" name="Northwind" />);
    expect(screen.getByText("Northwind")).toBeInTheDocument();
  });
});

describe("CardVisual", () => {
  it("renders a decorative box", () => {
    const { container } = render(<CardVisual />);
    expect(container.firstChild).toBeTruthy();
  });
});

describe("Toggle", () => {
  it("marks the active option and fires onChange", async () => {
    const onChange = vi.fn();
    render(<Toggle options={["Monthly", "Annual"]} value="Monthly" onChange={onChange} />);
    expect(screen.getByRole("button", { name: "Monthly" })).toHaveAttribute("aria-pressed", "true");
    await userEvent.click(screen.getByRole("button", { name: "Annual" }));
    expect(onChange).toHaveBeenCalledWith("Annual");
  });
});
