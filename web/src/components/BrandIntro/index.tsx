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
        <h1>Programação eficaz com paixão e propósito!</h1>
        <p>
          Todo mundo pode escrever um código mas eu me foco em criar soluções!
          Procuro entender primeiramente qual problema precisa ser resolvido de
          forma detalhada e depois avalio suas necessidades para que no final
          seja entregue uma solução para os seus clientes!
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
