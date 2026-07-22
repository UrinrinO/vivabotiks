"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactFormState } from "@/app/contact/actions";
import { contactPage } from "@/content/contact";
import { cn } from "@/lib/cn";

const initialState: ContactFormState = { status: "idle", message: "" };

const fieldCls =
  "w-full border border-border bg-bg px-4 py-3 text-base text-ink placeholder:text-ink-soft/50 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent";
const labelCls = "block font-heading text-sm font-semibold uppercase tracking-widest text-ink";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const { form } = contactPage;

  return (
    <form action={formAction} className="space-y-6">
      {/* Honeypot — hidden from humans, tempting to bots */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />
      <div>
        <label htmlFor="contact-name" className={labelCls}>
          {form.nameLabel}
        </label>
        <input id="contact-name" name="name" type="text" required className={cn(fieldCls, "mt-2")} />
      </div>
      <div>
        <label htmlFor="contact-email" className={labelCls}>
          {form.emailLabel}
        </label>
        <input id="contact-email" name="email" type="email" required className={cn(fieldCls, "mt-2")} />
      </div>
      <div>
        <label htmlFor="contact-message" className={labelCls}>
          {form.messageLabel}
        </label>
        <textarea id="contact-message" name="message" rows={5} required className={cn(fieldCls, "mt-2")} />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 bg-ink px-6 py-3 font-heading text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink/90 disabled:translate-y-0 disabled:opacity-60"
      >
        {pending ? form.sending : form.submitLabel}
      </button>
      <p
        aria-live="polite"
        className={cn(
          "text-sm",
          state.status === "sent" && "text-accent",
          state.status === "error" && "text-ink",
        )}
      >
        {state.message}
      </p>
    </form>
  );
}
