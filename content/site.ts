export type NavLink = { label: string; href: string };

export const siteMeta = {
  name: "Vivabotiks",
  title: "Vivabotiks — AI-Powered Software Company",
  description:
    "Vivabotiks builds intelligent software: AI & automation, custom development, data analytics, and 3D design for ambitious businesses.",
  url: "https://vivabotiks.com", // PLACEHOLDER — confirm production domain before launch
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

export const footerContent = {
  blurb:
    "Vivabotiks is an AI-powered software company. We design, build, and maintain intelligent products for businesses across Africa and beyond.",
  services: [
    "AI & Automation",
    "Software Development",
    "Data Analytics",
    "3D Design & Animation",
  ],
  contact: {
    email: "info@vivabotiks.com",
    email2: "contact@vivabotiks.com",
    phone: "+234 803 050 1670",
    phone2: "+234 916 546 8417",
    location: "Polystar building, Maruwa bus stop, Lekki",
  },
  hours: "Mon–Fri, 9am–6pm WAT", // PLACEHOLDER — confirm real hours
  // PLACEHOLDER socials — replace hrefs with real profiles before launch
  socials: [
    { label: "X", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  copyrightName: "Vivabotiks",
};
