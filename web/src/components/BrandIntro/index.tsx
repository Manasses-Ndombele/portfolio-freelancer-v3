"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import projectsGifLight from "@/assets/desktop-and-mobile-example light.gif";
import projectsGifDark from "@/assets/desktop-and-mobile-example dark.gif";
import "@/styles/components/brand-intro.scss";

function BrandIntro() {
  const { theme } = useTheme();

  return (
    <div id="brand-intro">
      <div id="brand-intro-content">
        <h1>
          Criando projetos pensados no detalhe,{" "}
          <strong>criado para vender</strong>
        </h1>
        <p>
          Mais do que escrever código, eu mergulho nos detalhes que levam os
          usuários a interagirem de forma intuitiva com meus projetos. Cada cor,
          posição, imagem, animação tem um porquê! Desta forma eu crio soluções
          vendáveis para que você possa ter um resultado final que você possa
          chamar orgulhosamente de seu!
        </p>
        <Link href="#contacts-container">
          <button type="button" className="main-cta">
            Pedir orçamento
          </button>
        </Link>
      </div>
      <div id="brand-intro-video">
        {theme === "light" ? (
          <Image
            src={projectsGifLight}
            alt="Projetos do desenvolvedor freelancer Manassés Ndombele"
          />
        ) : (
          <Image
            src={projectsGifDark}
            alt="Projetos do desenvolvedor freelancer Manassés Ndombele"
          />
        )}
        <div id="video-shadow"></div>
      </div>
    </div>
  );
}

export default BrandIntro;
