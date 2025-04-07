import Link from "next/link";
import type { Metadata } from "next";
import SearchArea from "@/components/SearchArea";
import ProjectsContainer from "@/components/ProjectsContainer";
import ModalProject from "@/components/ModalProject";
import { IoHomeSharp } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Manassés Ndombele | Projetos",
};

export default function Projects() {
  return (
    <main>
      <div id="home-link-area">
        <Link href="/">
          <IoHomeSharp />
        </Link>
      </div>
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
