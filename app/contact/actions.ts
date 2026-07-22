"use server";

import { Resend } from "resend";
import { contactPage } from "@/content/contact";
import { footerContent } from "@/content/site";

export type ContactFormState = { status: "idle" | "sent" | "error"; message: string };

export async function sendContactMessage(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Honeypot: humans never see this field, so a value means a bot. Pretend success.
  if (String(formData.get("company_website") ?? "") !== "") {
    return { status: "sent", message: contactPage.form.success };
  }

  if (!name || !message || !/.+@.+\..+/.test(email)) {
    return { status: "error", message: contactPage.form.invalid };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Credentials land in the env file later; fail politely until then.
    return { status: "error", message: contactPage.form.unavailable };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Vivabotiks <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? footerContent.contact.email,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    return { status: "sent", message: contactPage.form.success };
  } catch {
    return { status: "error", message: contactPage.form.failure };
  }
}
