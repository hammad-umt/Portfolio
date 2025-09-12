import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import StickyWhatsapp from "@/components/StickyWhatsapp";
import ScrollFade from "@/components/ui/AnimateOnScroll";
import Cursor from "@/components/Cursor";
export default function HomePage() {
  return (
    <>
      <Cursor/>
      <main className="cursor-none">
      <Navbar />
      <section id="home">
      <ScrollFade>
        <HeroSection />
      </ScrollFade>
      </section>
      <section id="about">
      <ScrollFade>
        <AboutMe />
      </ScrollFade>
      </section>
      <section id="skills">
      <ScrollFade>
        <Skills />
      </ScrollFade>
      </section>
      <section id="education">
      <ScrollFade>
        <Education />
      </ScrollFade>
      </section>
      <section id="projects">
      <ScrollFade>
      <Projects/>
      </ScrollFade>
      </section>
      
      <section id="contact">
      <ScrollFade>
        <Contact />
      </ScrollFade>
      </section>
      <StickyWhatsapp />
      <Footer/>
      </main>
    </>
  );
}
