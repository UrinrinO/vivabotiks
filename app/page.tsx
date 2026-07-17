import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AboutBlock } from "@/components/sections/AboutBlock";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutBlock />
      <Stats />
      <Process />
      <Testimonials />
      <Faq />
      <FinalCta />
    </main>
  );
}
