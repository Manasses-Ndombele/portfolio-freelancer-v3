import ProjectCard from "@/components/ProjectCard";
import project1 from "@/assets/project 1.jpg";
import project2 from "@/assets/project 2.jpg";
import project3 from "@/assets/project 3.jpg";
import project4 from "@/assets/project 4.jpg";
import project5 from "@/assets/project 5.jpg";
import project6 from "@/assets/project 6.jpg";
import project7 from "@/assets/project 7.jpg";
import project8 from "@/assets/project 8.jpg";
import project9 from "@/assets/project 9.jpg";

export default function ProjectsContainer() {
  return (
    <div id="projects-container">
      <ProjectCard
        imageSource={project1}
        projectName="Emagrecimento Sem Segredos"
        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil, nesciunt debitis cupiditate libero omnis perspiciatis doloremque voluptatem reprehenderit, illo expedita quae cum commodi voluptate adipisci rerum excepturi, aliquam et?"
        tags={["Site de vendas", "Landing page"]}
        styleClass="card-b"
      />
      <ProjectCard
        imageSource={project2}
        projectName="Emagrecimento Sem Segredos"
        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil, nesciunt debitis cupiditate libero omnis perspiciatis doloremque voluptatem reprehenderit, illo expedita quae cum commodi voluptate adipisci rerum excepturi, aliquam et?"
        tags={["Site de vendas", "Landing page"]}
        styleClass="card-b"
      />
      <ProjectCard
        imageSource={project3}
        projectName="Emagrecimento Sem Segredos"
        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil, nesciunt debitis cupiditate libero omnis perspiciatis doloremque voluptatem reprehenderit, illo expedita quae cum commodi voluptate adipisci rerum excepturi, aliquam et?"
        tags={["Site de vendas", "Landing page"]}
        styleClass="card-b"
      />
      <ProjectCard
        imageSource={project4}
        projectName="Emagrecimento Sem Segredos"
        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil, nesciunt debitis cupiditate libero omnis perspiciatis doloremque voluptatem reprehenderit, illo expedita quae cum commodi voluptate adipisci rerum excepturi, aliquam et?"
        tags={["Site de vendas", "Landing page"]}
        styleClass="card-b"
      />
      <ProjectCard
        imageSource={project5}
        projectName="Emagrecimento Sem Segredos"
        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil, nesciunt debitis cupiditate libero omnis perspiciatis doloremque voluptatem reprehenderit, illo expedita quae cum commodi voluptate adipisci rerum excepturi, aliquam et?"
        tags={["Site de vendas", "Landing page"]}
        styleClass="card-b"
      />
      <ProjectCard
        imageSource={project6}
        projectName="Emagrecimento Sem Segredos"
        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil, nesciunt debitis cupiditate libero omnis perspiciatis doloremque voluptatem reprehenderit, illo expedita quae cum commodi voluptate adipisci rerum excepturi, aliquam et?"
        tags={["Site de vendas", "Landing page"]}
        styleClass="card-b"
      />
      <ProjectCard
        imageSource={project7}
        projectName="Emagrecimento Sem Segredos"
        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil, nesciunt debitis cupiditate libero omnis perspiciatis doloremque voluptatem reprehenderit, illo expedita quae cum commodi voluptate adipisci rerum excepturi, aliquam et?"
        tags={["Site de vendas", "Landing page"]}
        styleClass="card-b"
      />
      <ProjectCard
        imageSource={project8}
        projectName="Emagrecimento Sem Segredos"
        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil, nesciunt debitis cupiditate libero omnis perspiciatis doloremque voluptatem reprehenderit, illo expedita quae cum commodi voluptate adipisci rerum excepturi, aliquam et?"
        tags={["Site de vendas", "Landing page"]}
        styleClass="card-b"
      />
      <ProjectCard
        imageSource={project9}
        projectName="Emagrecimento Sem Segredos"
        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil, nesciunt debitis cupiditate libero omnis perspiciatis doloremque voluptatem reprehenderit, illo expedita quae cum commodi voluptate adipisci rerum excepturi, aliquam et?"
        tags={["Site de vendas", "Landing page"]}
        styleClass="card-b"
      />
    </div>
  );
}
