"use client";
import React, { useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { data } from "@/data/projects";
import { useProjectFilter } from "@/context/FilterProjectContext";
import "@/styles/components/projects-container.scss";

export default function ProjectsContainer() {
  const { filter } = useProjectFilter();
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
