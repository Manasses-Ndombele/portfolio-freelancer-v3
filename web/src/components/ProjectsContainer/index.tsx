"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import { data } from "@/data/projects";
import { useProjectFilter } from "@/context/FilterProjectContext";
import { useProject } from "@/context/ProjectContext";
import { useLoading } from "@/context/LoadingDataContext";
import "@/styles/components/projects-container.scss";

export default function ProjectsContainer() {
  const { filter } = useProjectFilter();
  const params = useSearchParams();
  const { openProject } = useProject();
  const { defineLoading } = useLoading();
  useEffect(() => {
    const projectCards = document.querySelectorAll("div.project-card.card-b");
    projectCards.forEach((card) => {
      card.classList.remove("card-hidden");
      const tags = card.querySelector("p.tags");
      if (!tags?.classList.contains(filter) && filter !== "all") {
        card.classList.add("card-hidden");
      } else if (filter === "all") {
        card.classList.remove("card-hidden");
      }
    });
  }, [filter]);

  useEffect(() => {
    const project_id = params.get("project_id");
    const isProjectIdValid: boolean = project_id !== null || project_id !== "";
    if (isProjectIdValid && Number(project_id) > 0) {
      const pos = Number(project_id) - 1;
      openProject({
        projectTitle: data[pos].name,
        projectDescription: data[pos].description,
        projectGithub: data[pos].github,
        projectLink: data[pos].link,
      });

      defineLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
