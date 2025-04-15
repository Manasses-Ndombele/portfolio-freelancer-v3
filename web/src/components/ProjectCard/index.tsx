"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useProject } from "@/context/ProjectContext";
import { useLoading } from "@/context/LoadingDataContext";
import { ProjectCardType } from "@/types/ProjectCard";
import { useTranslation } from "react-i18next";
import "@/styles/components/project-card.scss";

export default function ProjectCard({
  imgSrc,
  projectName,
  tags,
  styleClass,
  projectDescription = "",
  projectGithub = "",
  projectLink = "",
  projectId = 0,
  projectSkills = [],
  imgAlt,
}: ProjectCardType) {
  const { openProject } = useProject();
  const router = useRouter();
  const { defineLoading } = useLoading();
  const handleClick = () => {
    defineLoading(true);
    router.push(`/projects?project_id=${projectId}`);
  };

  const { t } = useTranslation();
  return (
    <div className={`project-card ${styleClass}`} id={`project-${projectId}`}>
      <div className="project-img">
        {styleClass === "card-a" ? (
          <Image src={imgSrc} alt={t(imgAlt)} unoptimized />
        ) : (
          <Image src={imgSrc} alt={t(imgAlt)} />
        )}
      </div>
      <div className="project-description">
        <h4>{t(projectName)}</h4>
        <p
          className={`tags ${tags.categoriesKeys
            .toString()
            .replaceAll(",", " ")}`}
        >
          {tags.categoriesValues.map((value, index) => (
            <span key={index} className="tag">
              {t(value)}
            </span>
          ))}
        </p>
        {styleClass === "card-a" ? (
          <button
            type="button"
            className="card-cta"
            onClick={() => {
              handleClick();
            }}
          >
            {t("project-card.btn-action")}
          </button>
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
                projectSkills: projectSkills,
              });
            }}
          >
            {t("project-card.btn-action")}
          </button>
        )}
      </div>
    </div>
  );
}
