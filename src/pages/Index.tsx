import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import InteractiveSection from "@/components/portfolio/InteractiveSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import JourneySection from "@/components/portfolio/JourneySection";
import MiniLabSection from "@/components/portfolio/MiniLabSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <InteractiveSection />
      <SkillsSection />
      <JourneySection />
      <MiniLabSection />
      <ContactSection />
    </div>
  );
};

export default Index;
