import Image from "next/image";
import project1 from "@/assets/project 1.jpg";
import project2 from "@/assets/project 2.jpg";
import project3 from "@/assets/project 3.jpg";
import project4 from "@/assets/project 4.jpg";
import project5 from "@/assets/project 5.jpg";
import project6 from "@/assets/project 6.jpg";
import project7 from "@/assets/project 7.jpg";
import project8 from "@/assets/project 8.jpg";
import project9 from "@/assets/project 9.jpg";

export default function ProjectsContainer() {
  return (
    <div id="projects-container">
      <div className="project-card">
        <div className="card-img">
          <Image src={project1} alt="Projeto do portfólio" />
        </div>
        <div className="card-description">
          <h2>Emagrecimento Sem Segredos</h2>
          <p className="tags">
            <strong>Categorias</strong>
            <span className="tag">Site de vendas</span>
            <span className="tag">Landing page</span>
          </p>
          <button type="button">Ver detalhes</button>
        </div>
      </div>
      <div className="project-card">
        <div className="card-img">
          <Image src={project2} alt="Projeto do portfólio" />
        </div>
        <div className="card-description">
          <h2>Borges Consulting</h2>
          <p className="tags">
            <strong>Categorias</strong>
            <span className="tag">Site institucional</span>
            <span className="tag">Site para branding</span>
          </p>
          <button type="button">Ver detalhes</button>
        </div>
      </div>
      <div className="project-card">
        <div className="card-img">
          <Image src={project3} alt="Projeto do portfólio" />
        </div>
        <div className="card-description">
          <h2>VR Motion</h2>
          <p className="tags">
            <strong>Categorias</strong>
            <span className="tag">Site para vendas</span>
            <span className="tag">Loja online</span>
          </p>
          <button type="button">Ver detalhes</button>
        </div>
      </div>
      <div className="project-card">
        <div className="card-img">
          <Image src={project4} alt="Projeto do portfólio" />
        </div>
        <div className="card-description">
          <h2>Quiz da Socorre.me</h2>
          <p className="tags">
            <strong>Categorias</strong>
            <span className="tag">Quiz</span>
          </p>
          <button type="button">Ver detalhes</button>
        </div>
      </div>
      <div className="project-card">
        <div className="card-img">
          <Image src={project5} alt="Projeto do portfólio" />
        </div>
        <div className="card-description">
          <h2>Automails</h2>
          <p className="tags">
            <strong>Categorias</strong>
            <span className="tag">Sistema web</span>
            <span className="tag">Automações</span>
          </p>
          <button type="button">Ver detalhes</button>
        </div>
      </div>
      <div className="project-card">
        <div className="card-img">
          <Image src={project6} alt="Projeto do portfólio" />
        </div>
        <div className="card-description">
          <h2>Criptohacking</h2>
          <p className="tags">
            <strong>Categorias</strong>
            <span className="tag">Landing page</span>
            <span className="tag">Site para vendas</span>
          </p>
          <button type="button">Ver detalhes</button>
        </div>
      </div>
      <div className="project-card">
        <div className="card-img">
          <Image src={project7} alt="Projeto do portfólio" />
        </div>
        <div className="card-description">
          <h2>Borges Company</h2>
          <p className="tags">
            <strong>Categorias</strong>
            <span className="tag">Site institucional</span>
            <span className="tag">Site para branding</span>
            <span className="tag">Site para vendas</span>
          </p>
          <button type="button">Ver detalhes</button>
        </div>
      </div>
      <div className="project-card">
        <div className="card-img">
          <Image src={project8} alt="Projeto do portfólio" />
        </div>
        <div className="card-description">
          <h2>FoodBoard</h2>
          <p className="tags">
            <strong>Categorias</strong>
            <span className="tag">Sistema web</span>
          </p>
          <button type="button">Ver detalhes</button>
        </div>
      </div>
      <div className="project-card">
        <div className="card-img">
          <Image src={project9} alt="Projeto do portfólio" />
        </div>
        <div className="card-description">
          <h2>YourNextFilms</h2>
          <p className="tags">
            <strong>Categorias</strong>
            <span className="tag">Sistema web</span>
          </p>
          <button type="button">Ver detalhes</button>
        </div>
      </div>
    </div>
  );
}
