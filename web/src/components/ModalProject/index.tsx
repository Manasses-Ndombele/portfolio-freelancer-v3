"use client";
import React, { useEffect, useState, MouseEvent } from "react";
import Link from "next/link";
import { useProject } from "@/context/ProjectContext";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "@/styles/components/modal-project.scss";

export default function ModalProject() {
  const { project } = useProject();
  const [modalStatus, setModalStatus] = useState<string>("closed");
  const { t } = useTranslation();
  useEffect(() => {
    if (
      project.projectTitle !== "" &&
      project.projectDescription !== "" &&
      project.projectGithub !== "" &&
      project.projectLink !== ""
    ) {
      setModalStatus("");
    }
  }, [project]);

  const closeModal = (): void => {
    setModalStatus("closed");
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>): void => {
    if ((e.target as HTMLElement).id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div
      id="modal-overlay"
      className={modalStatus}
      onClick={handleOverlayClick}
    >
      <div
        id="modal-project"
        onClick={(e: MouseEvent<HTMLDivElement>): void => {
          e.stopPropagation();
        }}
      >
        <h3>{project.projectTitle}</h3>
        <p>{t(project.projectDescription)}</p>
        <div id="modal-actions">
          <Link href={project.projectGithub} target="_blank" rel="external">
            <button type="button">
              <FaGithub />
              <span>{t("modal-project.cta-a")}</span>
            </button>
          </Link>
          <Link href={project.projectLink} target="_blank" rel="external">
            <button type="button">
              <FaGlobe />
              <span>{t("modal-project.cta-b")}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
