import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import StickyWhatsapp from "@/components/StickyWhatsapp";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <StickyWhatsapp/>
    </>
  );
}
