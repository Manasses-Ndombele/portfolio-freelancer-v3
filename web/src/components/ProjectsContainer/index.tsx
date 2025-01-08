import ProjectCard from "@/components/ProjectCard";
import { data } from "@/data/projects";
import "@/styles/components/projects-container.scss";

export default function ProjectsContainer() {
  return (
    <div id="projects-container">
      {data.map((project, index) => (
        <ProjectCard
          key={index}
          imgSrc={project.img}
          projectName={project.name}
          styleClass="card-b"
          projectDescription={project.description}
          projectGithub={project.github}
          projectLink={project.link}
          tags={project.categories}
        />
      ))}
    </div>
  );
}
