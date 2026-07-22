// About page copy — company voice, no personal names. Team/lifecycle wording
// carried over from the previous site (lightly cleaned); review before launch.
export type LifecycleStep = { number: string; title: string; description: string };
export type TeamCallout = { title: string; description: string };

export const aboutPage = {
  metaTitle: "About",
  title: "About Vivabotiks",
  breadcrumb: "About",
  metaDescription: "About Vivabotiks, an AI-powered software company in Cardiff, Wales.",

  story: {
    eyebrow: "Our story",
    title: "Software that lives up to its name",
    paragraphs: [
      "Vivabotiks takes its name from “living robots”: software with intelligence built in. Systems that learn, adapt, and quietly do the heavy lifting. We are an AI-first software company registered in Wales, working from the USW Startup Stiwdio in Cardiff.",
      "We engineer intelligent systems end to end. That starts with AI and machine learning, runs through the data platforms that feed them, and finishes with the production software people actually use. When a project calls for it, we extend the same thinking to connected devices and robotics.",
      "Most of our work lives where the stakes are high: healthcare, aviation, and financial services. Regulated industries shape how we build, so governance, privacy, and reliability are part of the first architecture diagram, not a patch at the end.",
    ],
  },

  celebrating: {
    eyebrow: "Celebrating",
    stat: { value: 42, suffix: "+", label: "years of combined leadership experience" },
    paragraph:
      "We build AI-powered systems that streamline operations and unlock growth: machine-learning platforms, data pipelines, and the production software around them. Engineered for organisations that need results they can trust.",
    checks: [
      "LLM and machine-learning platforms",
      "Real-time data pipelines",
      "Cloud-native software and DevOps",
      "Connected devices and robotics",
    ],
  },

  closing: {
    title: "Let's transform how your business works",
    // PLACEHOLDER — review wording
    paragraph:
      "Bring us the process that slows your team down, or the idea you have not had time to build. We will scope it together, design the right system, and ship software that earns its keep.",
    cta: { label: "Start your project", href: "/contact" },
  },

  team: {
    eyebrow: "The team",
    title: "Skilled professionals with vast experience",
    paragraphs: [
      "Our team has a wide range of skills and experience, and we are always looking for new challenges. We are committed to providing the best possible service to our clients, and we believe that our work should speak for itself. If you are looking for a team of software developers who can deliver the latest technology solutions, reach out and we will be glad to have a chat with your team.",
    ],
    note: "Every executive is a University of South Wales graduate. Between them they hold multiple awards and more than 42 years of experience.",
    callouts: [
      {
        title: "Experienced professionals",
        description: "Our team is composed of professionals with vast experience.",
      },
      {
        title: "Free consultation",
        description: "Contact us today to discuss your next software project.",
      },
      {
        title: "Plain-spoken partnership",
        description: "No jargon and no surprises. You always know what we are building, why, and how far along it is.",
      },
      {
        title: "Support beyond launch",
        description: "We stay on after go-live, with monitoring, maintenance, and steady improvements.",
      },
    ] satisfies TeamCallout[],
  },

  lifecycle: {
    eyebrow: "How we work",
    title: "Project lifecycle",
    description:
      "For every project we take on, a dedicated team works with the client from the idea stage through deployment and maintenance.",
    steps: [
      {
        number: "01",
        title: "Ideation & planning",
        description: "A client comes up with ideas and we begin project planning and fine tuning.",
      },
      {
        number: "02",
        title: "Architecture design",
        description: "A UI/UX team designs sketches and a complete interactive UI for the project.",
      },
      {
        number: "03",
        title: "Coding & development",
        description: "Front-end and back-end engineers develop a functional software codebase.",
      },
      {
        number: "04",
        title: "Testing",
        description: "We run performance tests with the client to ensure the software meets requirements.",
      },
      {
        number: "05",
        title: "Maintenance",
        description: "We oversee maintenance, cybersecurity policy management, and bug fixing.",
      },
    ] satisfies LifecycleStep[],
  },

};
