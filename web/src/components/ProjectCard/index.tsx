"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useProject } from "@/context/ProjectContext";
import { ProjectCardType } from "@/types/ProjectCard";
import "@/styles/components/project-card.scss";

export default function ProjectCard({
  imgSrc,
  projectName,
  tags,
  styleClass,
  projectDescription = "",
  projectGithub = "",
  projectLink = "",
}: ProjectCardType) {
  const { openProject } = useProject();
  return (
    <div className={`project-card ${styleClass}`} >
      <div className="project-img">
        <Image src={imgSrc} alt="Projeto de portfólio" />
      </div>
      <div className="project-description">
        <h4>{projectName}</h4>
        <p className="tags">
          {tags.map((tag, _key) => (
            <span key={`${_key}`} className="tag">
              {tag}
            </span>
          ))}
        </p>
        {styleClass === "card-a" ? (
          <Link href="/projects?project-id=1">
            <button type="button" className="card-cta">
              Saiba mais
            </button>
          </Link>
        ) : (
          <button
            type="button"
            className="card-cta"
            onClick={() => {
              openProject({
                projectTitle: projectName,
                projectDescription: projectDescription,
                projectGithub: projectGithub,
                projectLink: projectLink,
              });
            }}
          >
            Saiba mais
          </button>
        )}
      </div>
    </div>
  );
}
