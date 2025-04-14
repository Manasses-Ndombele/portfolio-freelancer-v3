import project1 from "@/assets/project 1.jpg";
import project2 from "@/assets/project 2.jpg";
import project3 from "@/assets/project 3.jpg";
import project4 from "@/assets/project 4.jpg";
import project5 from "@/assets/project 5.jpg";
import project6 from "@/assets/project 6.jpg";
import project7 from "@/assets/project 7.jpg";
import project8 from "@/assets/project 8.jpg";
import project9 from "@/assets/project 9.jpg";
import { Project } from "@/types/Project";

export const data: Project[] = [
  {
    name: "Emagrecimento sem segredos",
    categories: {
      categoriesKeys: ["sales", "landingPage"],
      categoriesValues: ["projectCard1.category1", "projectCard1.category2"],
    },
    description: "projectCard1.description",
    technologies: ["ReactJS", "Bootstrap 5", "Sass", "JavaScript"],
    img: project1,
    github: "https://github.com/Manasses-Ndombele/ESS-Landing-Page",
    link: "http://emagrecimento-sem-segredos.vercel.app",
    imgAlt: "projectCard1.imgAlt",
  },
  {
    name: "Borges Consulting",
    categories: {
      categoriesKeys: ["branding", "institutional"],
      categoriesValues: ["projectCard2.category1", "projectCard2.category2"],
    },
    description: "projectCard2.description",
    technologies: ["ReactJS", "Bootstrap 5", "Sass", "JavaScript"],
    img: project2,
    github: "https://github.com/Manasses-Ndombele/Borges-Consulting",
    link: "https://borges-consulting.vercel.app/",
    imgAlt: "projectCard2.imgAlt",
  },
  {
    name: "VR Motion",
    categories: {
      categoriesKeys: ["sales", "ecommerce"],
      categoriesValues: ["projectCard3.category1", "projectCard3.category2"],
    },
    description: "projectCard3.description",
    technologies: ["ReactJS", "Bootstrap 5", "Sass", "JavaScript"],
    img: project3,
    github: "https://github.com/Manasses-Ndombele/VR-Motion",
    link: "https://vr-motion.vercel.app/",
    imgAlt: "projectCard3.imgAlt",
  },
  {
    name: "Quiz da Socorre.me",
    categories: {
      categoriesKeys: ["others"],
      categoriesValues: ["projectCard4.category1"],
    },
    description: "projectCard4.description",
    technologies: ["HTML", "Sass", "JavaScript", "Bootstrap 5", "PHP"],
    img: project4,
    github: "https://github.com/Manasses-Ndombele/TVC-Quiz",
    link: "https://socorre.me/quiz/pages",
    imgAlt: "projectCard4.imgAlt",
  },
  {
    name: "Automails",
    categories: {
      categoriesKeys: ["webSystems", "automations"],
      categoriesValues: ["projectCard5.category1", "projectCard5.category2"],
    },
    description: "projectCard5.description",
    technologies: [
      "Python",
      "Flask",
      "ReactJS",
      "JavaScript",
      "Sass",
      "Bootstrap 5",
    ],
    img: project5,
    github: "https://github.com/Manasses-Ndombele/AutoMails",
    link: "https://automails.vercel.app/",
    imgAlt: "projectCard5.imgAlt",
  },
  {
    name: "CriptoHacking",
    categories: {
      categoriesKeys: ["sales", "landingPage"],
      categoriesValues: ["projectCard6.category1", "projectCard6.category2"],
    },
    description: "projectCard6.description",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap 5",
      "Sass",
      "Python",
      "Flask",
    ],
    img: project6,
    github: "https://github.com/Manasses-Ndombele/Criptohacking",
    link: "https://criptohacking-sg0s.onrender.com",
    imgAlt: "projectCard6.imgAlt",
  },
  {
    name: "Borges Company",
    categories: {
      categoriesKeys: ["branding", "institutional"],
      categoriesValues: ["projectCard7.category1", "projectCard7.category2"],
    },
    description: "projectCard7.description",
    technologies: [
      "HTML",
      "Sass",
      "JavaScript",
      "Bootstrap 5",
      "Python",
      "Flask",
    ],
    img: project7,
    github: "https://github.com/Manasses-Ndombele/Borges-Company/",
    link: "https://borges-company-1c97.onrender.com",
    imgAlt: "projectCard7.imgAlt",
  },
  {
    name: "FoodBoard",
    categories: {
      categoriesKeys: ["automations", "others"],
      categoriesValues: ["projectCard8.category1", "projectCard8.category2"],
    },
    description: "projectCard8.description",
    technologies: ["Python", "Flutter (Flet)"],
    img: project8,
    github: "http://github.com/Manasses-Ndombele/FoodBoard/",
    link: "https://drive.google.com/file/d/1K28sSLdKTub67kWjkp6SMaAu6H63yyGn/view?usp=drive_link",
    imgAlt: "projectCard8.imgAlt",
  },
  {
    name: "YourNextFilms",
    categories: {
      categoriesKeys: ["automations", "others"],
      categoriesValues: ["projectCard9.category1", "projectCard9.category2"],
    },
    description: "projectCard9.description",
    technologies: ["Python", "Flutter (Flet)"],
    img: project9,
    github: "https://github.com/Manasses-Ndombele/YourNextFilms/",
    link: "https://drive.google.com/file/d/1KAjvzSWeMHIXWW0rPnj4njdspxKMG47d/view?usp=drive_link",
    imgAlt: "projectCard9.imgAlt",
  },
];
