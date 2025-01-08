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
      <ModalProject />
    </main>
  );
}
