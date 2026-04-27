import Layout from "./components/Layout";
import AboutSection from "./pages/AboutSection";
import ContactSection from "./pages/ContactSection";
import HeroSection from "./pages/HeroSection";
import ProjectsSection from "./pages/ProjectsSection";
import SkillsSection from "./pages/SkillsSection";
import TimelineSection from "./pages/TimelineSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
    </Layout>
  );
}
