import BrandIntro from "@/components/BrandIntro";
import ServicesContainer from "@/components/ServicesContainer";
import SkillsContainer from "@/components/SkillsContainer";
import ProjectsExamples from "@/components/ProjectsExamples";
import AboutContainer from "@/components/AboutContainer";
import ContactsContainer from "@/components/ContactsContainer";

export default function Home() {
  return (
    <main>
      <BrandIntro />
      <ServicesContainer />
      <SkillsContainer />
      <ProjectsExamples />
      <AboutContainer />
      <ContactsContainer />
    </main>
  );
}
