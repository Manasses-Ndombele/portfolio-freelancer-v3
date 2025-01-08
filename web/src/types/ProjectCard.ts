import { StaticImageData } from "next/image";

export interface ProjectCardType {
  key?: number;
  imgSrc: StaticImageData;
  projectName: string;
  tags: ReadonlyArray<string>;
  styleClass: string;
  projectDescription?: string;
  projectGithub?: string;
  projectLink?: string;
}
