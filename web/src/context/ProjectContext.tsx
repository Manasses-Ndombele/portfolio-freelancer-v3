"use client";
import React, { createContext, useContext, useState } from "react";

interface ProjectType {
  projectTitle: string;
  projectDescription: string;
  projectGithub: string;
  projectLink: string;
}

type ProjectContextType = {
  project: ProjectType;
  openProject: (project: ProjectType) => void;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [project, setProject] = useState<ProjectType>({
    projectTitle: "",
    projectDescription: "",
    projectGithub: "",
    projectLink: "",
  });

  const openProject = (project: ProjectType) => {
    setProject(project);
  };

  return (
    <ProjectContext.Provider value={{ project, openProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context)
    throw new Error("useProject must be used within project provider");
  return context;
};
