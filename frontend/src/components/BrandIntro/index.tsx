"use client";
import React from "react";
import Image from "next/image";
import projectsGif from "@/assets/desktop-and-mobile-example light.gif";

function BrandIntro() {
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
        <button type="button">Pedir orçamento</button>
      </div>
      <div id="brand-intro-video">
        <Image
          src={projectsGif}
          alt="Projetos do desenvolvedor freelancer Manassés Ndombele"
        />
      </div>
    </div>
  );
}

export default BrandIntro;
