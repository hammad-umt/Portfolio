import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import StickyWhatsapp from "@/components/StickyWhatsapp";
import ScrollFade from "@/components/ui/AnimateOnScroll";

export default function HomePage() {
  return (
    <>
      <main>
        <Navbar />
        <HeroSection />

        <ScrollFade>
          <AboutMe />
        </ScrollFade>

        <ScrollFade>
          <Experience />
        </ScrollFade>

        <ScrollFade>
          <Projects />
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
        <Footer />
      </main>
    </>
  );
}
