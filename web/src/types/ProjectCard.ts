import { StaticImageData } from "next/image";
import { ProjectCategory } from "./Project";

export interface ProjectCardType {
  key?: number;
  imgSrc: StaticImageData;
  projectName: string;
  tags: ProjectCategory;
  styleClass: string;
  projectDescription?: string;
  projectGithub?: string;
  projectLink?: string;
  projectId?: number;
  projectSkills?: string[];
  imgAlt: string;
}
