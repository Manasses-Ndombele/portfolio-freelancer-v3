import Link from "next/link";

function MainHeader() {
  return (
    <header>
      <Link href="/">
        <span>{"{"}</span>
        <strong>Manasses</strong>
        <span>{"}"}</span>
      </Link>
      <nav>
        <Link href="/#services-container">Serviços</Link>
        <Link href="/projects">Projetos</Link>
        <Link href="/#about-container">Sobre</Link>
        <Link href="/#contacts-container">Contatos</Link>
      </nav>
      <button type="button">Pedir orçamento</button>
    </header>
  );
}

export default MainHeader;
