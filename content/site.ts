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

export const footerContent = {
  blurb:
    "Vivabotiks is an AI-powered software company. We design, build, and maintain intelligent products for businesses across Africa and beyond.",
  services: [
    "AI & Automation",
    "Software Development",
    "Data Analytics",
    "3D Design & Animation",
  ],
  // PLACEHOLDER contact details — replace with real ones before launch
  contact: {
    email: "hello@vivabotiks.com",
    phone: "+234 000 000 0000",
    location: "Lagos, Nigeria",
  },
  hours: "Mon–Fri, 9am–6pm WAT", // PLACEHOLDER
  // PLACEHOLDER socials — replace hrefs with real profiles before launch
  socials: [
    { label: "X", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  copyrightName: "Vivabotiks",
};
