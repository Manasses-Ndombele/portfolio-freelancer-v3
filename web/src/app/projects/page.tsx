import type { Metadata } from "next";
import HomeLinkContainer from "@/components/HomeLinkContainer";
import ProjectsMainCopy from "@/components/ProjectsMainCopy";
import SearchContainer from "@/components/SearchContainer";
import ProjectsContainer from "@/components/ProjectsContainer";
import ModalProject from "@/components/ModalProject";
import { FilterProvider } from "@/context/FilterProjectContext";
import MainLoader from "@/components/MainLoader";

export const metadata: Metadata = {
  title: "Manassés Ndombele | Projetos",
};

export default function Projects() {
  return (
    <FilterProvider>
      <MainLoader />
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
