import type { Metadata } from "next";
import HomeLinkContainer from "@/components/HomeLinkContainer";
import ProjectsMainCopy from "@/components/ProjectsMainCopy";
import SearchContainer from "@/components/SearchContainer";
import ProjectsContainer from "@/components/ProjectsContainer";
import ModalProject from "@/components/ModalProject";

export const metadata: Metadata = {
  title: "Manassés Ndombele | Projetos",
};

export default function Projects() {
  return (
    <main>
      <HomeLinkContainer />
      <ProjectsMainCopy />
      <SearchContainer />
      <ProjectsContainer />
      <ModalProject
        projectTitle="Emagrecimento Sem Segredos"
        projectDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          harum, ex quasi rem quisquam maiores libero quas aliquam voluptas
          omnis distinctio facere blanditiis facilis odio. Amet labore doloribus
          ab quia."
        projectGithub="https://github.com"
        projectLink="https://emagrecimento-sem-segredos.vercel.app/"
      />
    </main>
  );
}
