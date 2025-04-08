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
          Minha história como programador começou em 2020, motivada por um
          desejo de aprender Segurança da informação (Hacking) começando com o
          aprendizado autodidata de Python. O que começou como uma curiosidade
          sobre segurança da informação rapidamente evoluiu para uma paixão por
          criar e programar. Ao longo dessa trajetória, conquistei certificações
          importantes, como as de Python, HTML5, JavaScript, MySQL, SEO,
          Marketing digital... Com destaque para formações do Curso em Vídeo do
          professor Gustavo Guanabara. Essas qualificações, aliadas à minha
          experiência prática, moldaram-me como um profissional focado em
          resultados. Hoje meu objetivo principal é transformar códigos em
          degraus para que o seu negócio possa escalar!
        </p>
      </div>
    </div>
  );
}
