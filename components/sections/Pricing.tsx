"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { pricing, pricingIntro } from "@/content/marketing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Toggle } from "@/components/ui/Toggle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Pricing() {
  const [period, setPeriod] = useState("Monthly");
  const annual = period === "Annual";

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col items-center">
        <SectionHeading
          eyebrow={pricingIntro.eyebrow}
          title={pricingIntro.title}
          intro={pricingIntro.description}
          align="center"
        />
        <div className="mt-8 flex items-center gap-3">
          <Toggle options={["Monthly", "Annual"]} value={period} onChange={setPeriod} />
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Save 20% annually</span>
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {pricing.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "flex h-full flex-col rounded-3xl border bg-surface p-8",
              tier.popular ? "border-accent shadow-sm" : "border-border",
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg font-semibold text-ink">{tier.name}</h3>
              {tier.popular && (
                <span className="rounded-full bg-ink px-3 py-1 font-heading text-xs font-medium text-white">Popular</span>
              )}
            </div>
            <p className="mt-4 font-heading text-4xl font-bold text-ink">
              ${annual ? tier.annual : tier.monthly}
              <span className="text-base font-normal text-ink-soft">/mo</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{tier.blurb}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-ink-soft">
                  <Check aria-hidden className="size-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              href={tier.cta.href}
              variant={tier.popular ? "primary" : "ghost"}
              className="mt-8 w-full justify-center"
              star={tier.popular}
            >
              {tier.cta.label}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
