import { StaticImageData } from "next/image";

export interface Project {
  name: string;
  categories: string[];
  description: string;
  img: StaticImageData;
  github: string;
  link: string;
}
