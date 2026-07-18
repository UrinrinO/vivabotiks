import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AboutBlock } from "@/components/sections/AboutBlock";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { TextMarquee } from "@/components/sections/TextMarquee";
import { StatsQuote } from "@/components/sections/StatsQuote";
import { Awards } from "@/components/sections/Awards";
import { WhyUs } from "@/components/sections/WhyUs";
import { Pricing } from "@/components/sections/Pricing";
import { Blog } from "@/components/sections/Blog";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutBlock />
      <LogoMarquee />
      <CaseStudies />
      <TextMarquee />
      <StatsQuote />
      <Awards />
      <WhyUs />
      <Pricing />
      <Blog />
      <Faq />
      <FinalCta />
    </main>
  );
}
