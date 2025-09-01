import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import StickyWhatsapp from "@/components/StickyWhatsapp";
import ScrollFade from "@/components/ui/AnimateOnScroll";
export default function HomePage() {
  return (
    <>
      <Navbar />

      <ScrollFade>
        <HeroSection />
      </ScrollFade>
      <ScrollFade>
        <AboutMe />
      </ScrollFade>
      <ScrollFade>
        <Skills />
      </ScrollFade>
      <ScrollFade>
        <Education />
      </ScrollFade>
      <ScrollFade>
        <Contact />
      </ScrollFade>
      <StickyWhatsapp />
    </>
  );
}
