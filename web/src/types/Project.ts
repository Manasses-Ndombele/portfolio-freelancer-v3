import { StaticImageData } from "next/image";

type keys =
  | "sales"
  | "landingPage"
  | "ecommerce"
  | "branding"
  | "institutional"
  | "webSystems"
  | "automations"
  | "others";

export interface ProjectCategory {
  categoriesKeys: keys[];
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
