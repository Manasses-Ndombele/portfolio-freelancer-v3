import Image from "next/image";
import aboutPhoto from "@/assets/DevManasses.png";
import "@/styles/components/about-container.scss";

export default function AboutContainer() {
  return (
    <div id="about-container">
      <div id="about-img-container">
        <Image
          src={aboutPhoto}
          alt="Manassés Ndombele desenvolvedor freelancer"
        />
      </div>
      <div id="about-copy">
        <h2>Sobre mim</h2>
        <p>
          Tudo começou em 2019, quando fui atrás daquilo que me fascinava:
          computadores. Meu plano incial era entrar para a área de segurança da
          informação, parecia o caminho perfeito para alguém curioso. Mas aí
          veio um detalhe: eu precisava aprender a programar. Foi nesse momento
          que descubri um novo universo. A lógica por trás do código, a
          liberdade de criar do zero, a sensação de ver uma ideia ganhar forma
          na tela...
        </p>
        <p>
          O que era só um requesito virou paixão. De lá pra cá, não parei mais.
          Estudei, testei, quebrei a cabeça várias vezes, e construí projetos
          que me levaram por caminhos incríveis: desenvolvimento web,
          automações, desktop e mobile... Hoje tenho a bagagem cheia de
          linguagens, frameworks, bibliotecas, etc. E um entusiasmo que só
          cresce. O café ajuda, claro, mas o que me move de verdade é a vontade
          de criar soluções eficazes. Se você também acredita que boas ideias
          merecem ser bem executadas, nós temos algo em comum!
        </p>
      </div>
    </div>
  );
}
