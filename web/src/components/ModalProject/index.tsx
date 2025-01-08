"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useProject } from "@/context/ProjectContext";
import { FaGithub, FaGlobe } from "react-icons/fa";
import "@/styles/components/modal-project.scss";

export default function ModalProject() {
  const { project } = useProject();
  const [modalStatus, setModalStatus] = useState("closed");
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

  return (
    <div
      id="modal-overlay"
      className={modalStatus}
    >
      <div id="modal-project">
        <h3>{project.projectTitle}</h3>
        <p>{project.projectDescription}</p>
        <div id="modal-actions">
          <Link href={project.projectGithub} target="_blank" rel="external">
            <button type="button">
              <FaGithub />
              <span>Ver repositório</span>
            </button>
          </Link>
          <Link href={project.projectLink} target="_blank" rel="external">
            <button type="button">
              <FaGlobe />
              <span>Acessar projeto</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
