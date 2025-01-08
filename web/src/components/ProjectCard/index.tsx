"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useProject } from "@/context/ProjectContext";
import "@/styles/components/project-card.scss";

interface Props {
  imageSource: StaticImageData;
  projectName: string;
  tags: ReadonlyArray<string>;
  styleClass: string;
  projectDescription?: string;
  projectGithub?: string;
  projectLink?: string;
}

export default function ProjectCard({
  imageSource,
  projectName,
  tags,
  styleClass,
  projectDescription="",
  projectGithub="",
  projectLink=""
}: Props) {
  const { openProject } = useProject();
  return (
    <div className={`project-card ${styleClass}`}>
      <div className="project-img">
        <Image src={imageSource} alt="Projeto de portfólio" />
      </div>
      <div className="project-description">
        <h4>{projectName}</h4>
        <p className="tags">
          {tags.map((tag, key) => (
            <span key={`${key}`} className="tag">
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
                projectLink: projectLink
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
