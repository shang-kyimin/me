import AboutMeSection from "@/components/sections/AboutMe.section";
import ContactSection from "@/components/sections/Contact.section";
import HeroSection from "@/components/sections/Hero.section";
import ProjectsSection from "@/components/sections/Projects.section";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
