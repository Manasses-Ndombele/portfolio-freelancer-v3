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
      categoriesValues: ["Site de vendas", "Landing page"],
    },
    description:
      "Esta é uma landing page para um infoproduto no nicho de emagrecimento denominado `Emagrecimento Sem Segredos`, foi criado para demonstrar minhas habilidades em desenvolvimento frontend e webdesign.",
    technologies: ["ReactJS", "Bootstrap 5", "Sass", "JavaScript"],
    img: project1,
    github: "https://github.com/Manasses-Ndombele/ESS-Landing-Page",
    link: "http://emagrecimento-sem-segredos.vercel.app",
  },
  {
    name: "Borges Consulting",
    categories: {
      categoriesKeys: ["branding", "institutional"],
      categoriesValues: ["Site para branding", "Site institucional"],
    },
    description:
      "Este é um site institucional de exemplo, no caso para uma empresa fictícia que presta serviços de consultoria, isto é apenas uma demonstração das minhas habilidades em desenvolvimento frontend e webdesign.",
    technologies: ["ReactJS", "Bootstrap 5", "Sass", "JavaScript"],
    img: project2,
    github: "https://github.com/Manasses-Ndombele/Borges-Consulting",
    link: "https://borges-consulting.vercel.app/",
  },
  {
    name: "VR Motion",
    categories: {
      categoriesKeys: ["sales", "ecommerce"],
      categoriesValues: ["Site de vendas", "Loja online"],
    },
    description:
      "Esta é uma loja online ainda em andamento, ela está focada no nicho de óculos vr, e por enquanto é apenas uma demonstração das minhas habilidades em desenvolvimento frontend e webdesign mas brevemente estará 100% concluída e funcional.",
    technologies: ["ReactJS", "Bootstrap 5", "Sass", "JavaScript"],
    img: project3,
    github: "https://github.com/Manasses-Ndombele/VR-Motion",
    link: "https://vr-motion.vercel.app/",
  },
  {
    name: "Quiz da Socorre.me",
    categories: {
      categoriesKeys: ["others"],
      categoriesValues: ["Outros"],
    },
    description:
      "Este é um quiz para teste de vício em compulsão baseado em dados da OMS criado para ser adicionada a plataforma Socorre.me de Daniel Santos.",
    technologies: ["HTML", "Sass", "JavaScript", "Bootstrap 5", "PHP"],
    img: project4,
    github: "https://github.com/Manasses-Ndombele/TVC-Quiz",
    link: "https://socorre.me/quiz/pages",
  },
  {
    name: "Automails",
    categories: {
      categoriesKeys: ["webSystems"],
      categoriesValues: ["Sistema web"],
    },
    description:
      "Este é um mini sistema de envio de emails em massa usando SMTP para enviar emails de forma gratuita e rápida através de uma senha de aplicativo para que o site tenha acesso a uma conta de email de remetente.",
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
  },
  {
    name: "CriptoHacking",
    categories: {
      categoriesKeys: ["sales", "landingPage"],
      categoriesValues: ["Site de vendas", "Landing page"],
    },
    description:
      "Esta é uma landing page de exemplo para simular a venda do acesso a uma plataforma de cursos no nicho de criptomoedas denominada `CriptoHacking`.",
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
  },
  {
    name: "Borges Company",
    categories: {
      categoriesKeys: ["branding", "institutional"],
      categoriesValues: ["Site para branding", "Site institucional"],
    },
    description:
      "Este é um site institucional criado para uma fictícia empresa prestadora de serviçõs de marketing digital e software house, é apenas para demonstrar meus conhecimentos na base da web (HTML, CSS, JS).",
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
  },
  {
    name: "FoodBoard",
    categories: {
      categoriesKeys: ["automations", "others"],
      categoriesValues: ["Automações", "Outros"],
    },
    description:
      "Este projeto é um programa desktop multiplataforma com objetivo de gerar receitas nutritivas para o usuário com base nos nutrientes e a quantidade em gramas selecionadas pelo usuário, as receitas são geradas através da SponnacularAPI.",
    technologies: ["Python", "Flutter (Flet)"],
    img: project8,
    github: "http://github.com/Manasses-Ndombele/FoodBoard/",
    link: "https://drive.google.com/file/d/1K28sSLdKTub67kWjkp6SMaAu6H63yyGn/view?usp=drive_link",
  },
  {
    name: "YourNextFilms",
    categories: {
      categoriesKeys: ["automations", "others"],
      categoriesValues: ["Automações", "Outros"],
    },
    description:
      "Este é um programa desktop multiplataforma criado com o objetivo de gerar recomendações de filmes baseado em dados recolhidos sobre os gêneros de filmes de interesse do usuário, essas mesmas recomendações são enviadas para o whatsapp do usuário através de um Bot.",
    technologies: ["Python", "Flutter (Flet)"],
    img: project9,
    github: "https://github.com/Manasses-Ndombele/YourNextFilms/",
    link: "https://drive.google.com/file/d/1KAjvzSWeMHIXWW0rPnj4njdspxKMG47d/view?usp=drive_link",
  },
];
