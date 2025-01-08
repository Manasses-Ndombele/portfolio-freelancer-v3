import { ProjectType } from "./ProjectType";

export type ProjectContextType = {
  project: ProjectType;
  openProject: (project: ProjectType) => void;
};
