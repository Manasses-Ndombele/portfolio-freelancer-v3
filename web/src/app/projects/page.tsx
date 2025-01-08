import type { Metadata } from "next";
import HomeLinkContainer from "@/components/HomeLinkContainer";
import ProjectsMainCopy from "@/components/ProjectsMainCopy";
import SearchContainer from "@/components/SearchContainer";
import ProjectsContainer from "@/components/ProjectsContainer";
import ModalProject from "@/components/ModalProject";
import { FilterProvider } from "@/context/FilterProjectContext";

export const metadata: Metadata = {
  title: "Manassés Ndombele | Projetos",
};

export default function Projects() {
  return (
    <FilterProvider>
      <main id="main-projects">
        <HomeLinkContainer />
        <ProjectsMainCopy />
        <SearchContainer />
        <ProjectsContainer />
        <ModalProject />
      </main>
    </FilterProvider>
  );
}
