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

type values =
  | "Site de vendas"
  | "Loja online"
  | "Landing page"
  | "Site para branding"
  | "Site institucional"
  | "Sistema web"
  | "Automações"
  | "Outros";

export interface ProjectCategory {
  categoriesKeys: keys[];
  categoriesValues: values[];
}

export interface Project {
  name: string;
  categories: ProjectCategory;
  description: string;
  technologies: string[];
  img: StaticImageData;
  github: string;
  link: string;
}
