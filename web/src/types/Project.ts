import { StaticImageData } from "next/image";

export interface ProjectCategory {
  categoriesKeys: string[];
  categoriesValues: string[];
}

export interface Project {
  name: string;
  categories: ProjectCategory;
  description: string;
  technologies: string[];
  img: StaticImageData;
  github: string;
  link: string;
  imgAlt: string;
}
