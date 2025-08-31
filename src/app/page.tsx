import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HeroSection/>
      </section>
      <section id="about">
        <AboutMe />
      </section>
    <section id='education'>
    <Education/>
    </section>
    </>
  );
}
