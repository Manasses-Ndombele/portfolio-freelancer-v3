import type { Metadata } from "next";
import SearchArea from "@/components/SearchArea";
import ProjectsContainer from "@/components/ProjectsContainer";

export const metadata: Metadata = {
  title: "Manassés Ndombele | Projetos",
};

export default function Projects() {
  return (
    <main>
      <div id="main-copy">
        <h1>Todos projetos</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          harum, ex quasi rem quisquam maiores libero quas aliquam voluptas
          omnis distinctio facere blanditiis facilis odio. Amet labore doloribus
          ab quia.
        </p>
        <SearchArea />
      </div>
      <ProjectsContainer />
    </main>
  );
}
