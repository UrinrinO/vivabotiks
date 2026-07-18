"use client";

import { cn } from "@/lib/cn";

type ToggleProps = {
  options: [string, string];
  value: string;
  onChange: (value: string) => void;
};

export function Toggle({ options, value, onChange }: ToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-border bg-surface p-1">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={value === option}
          onClick={() => onChange(option)}
          className={cn(
            "rounded-full px-5 py-2 font-heading text-sm font-medium transition-colors",
            value === option ? "bg-ink text-white" : "text-ink-soft hover:text-ink",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
