export type NavLink = { label: string; href: string };

export const siteMeta = {
  name: "Vivabotiks",
  title: "Vivabotiks — AI-Powered Software Company",
  description:
    "Vivabotiks builds intelligent software: AI & automation, custom development, data analytics, and 3D design for ambitious businesses.",
  url: "https://vivabotiks.co.uk", // PLACEHOLDER — confirm production domain before launch
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

export const navCta = { label: "Start your project", href: "/contact" };

// Google Form the contact page links out to (from the previous site).
export const contactFormUrl = "https://forms.gle/i1QK6pVN63NJCPF87";

// Footer recreates the previous site's footer: big headline with an amber
// highlight, the six service links, and the email/address/phone columns.
export const footerContent = {
  headline: { pre: "Best", highlight: "Software Agency", post: "for Your Project" },
  services: [
    "Web Development",
    "Mobile App Development",
    "Data Analytics & IOT",
    "Enterprise Solutions",
    "UI/UX Designs",
    "3D Designs & Animation",
  ],
  contact: {
    email: "info@vivabotiks.co.uk",
    phone: "07931 046 771",
    addressLines: ["USW Startup Stiwdio", "Cardiff, Wales"],
  },
  copyrightName: "Vivabotiks Limited",
};
