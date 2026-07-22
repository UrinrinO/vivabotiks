import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "./globals.css";
import { siteMeta } from "@/content/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const encodeSans = Encode_Sans({ subsets: ["latin"], variable: "--font-encode-sans" });

export const metadata: Metadata = {
  title: { default: siteMeta.title, template: `%s | ${siteMeta.name}` },
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url),
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    siteName: siteMeta.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={encodeSans.variable}>
      <body>
        <Navbar />
        {/* The page scrolls over the fixed, full-height footer beneath it; the
            bottom margin equals the footer height so it is fully revealed at
            the end of the scroll. */}
        <div className="relative z-10 mb-[100svh] bg-bg">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
