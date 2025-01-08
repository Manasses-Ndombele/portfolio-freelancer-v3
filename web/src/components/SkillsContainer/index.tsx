import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiPhp,
  SiDjango,
  SiFlask,
  SiMysql,
  SiSqlite,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoSass, IoLogoDocker } from "react-icons/io5";
import { FaPython, FaLaravel } from "react-icons/fa6";
import { LuFileJson } from "react-icons/lu";
import { CgFigma } from "react-icons/cg";
import { DiLinux } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

export default function SkillsContainer() {
  return (
    <div id="skills-container">
      <div id="skills-copy">
        <h2>Minhas habilidades</h2>
        <p>
          <strong>AVISO:</strong> Esta é a parte deste portfólio com constantes
          atualizações pois as minhas habilidades vem se aprimorando a cada dia
          para fazer o melhor serviço com as melhores ferramentas!
        </p>
      </div>
      <div id="skills-categories">
        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="skills-items">
            <div className="skill-item">
              <FaHtml5 />
              <h4>HTML</h4>
            </div>
            <div className="skill-item">
              <FaCss3Alt />
              <h4>CSS</h4>
            </div>
            <div className="skill-item">
              <IoLogoJavascript />
              <h4>JavaScript</h4>
            </div>
            <div id="skill-item">
              <FaBootstrap />
              <h4>Bootstrap</h4>
            </div>
            <div id="skill-item">
              <IoLogoSass />
              <h4>Sass</h4>
            </div>
            <div id="skill-item">
              <FaReact />
              <h4>React</h4>
            </div>
            <div id="skill-item">
              <SiTypescript />
              <h4>TypeScript</h4>
            </div>
            <div id="skill-item">
              <RiTailwindCssFill />
              <h4>TailwindCSS</h4>
            </div>
            <div id="skill-item">
              <SiNextdotjs />
              <h4>NextJS</h4>
            </div>
          </div>
        </div>
        <div className="skill-category">
          <h3>Backend</h3>
          <div className="skills-items">
            <div className="skill-item">
              <FaPython />
              <h4>Python</h4>
            </div>
            <div className="skill-item">
              <SiPhp />
              <h4>PHP</h4>
            </div>
            <div className="skill-item">
              <SiDjango />
              <h4>Django</h4>
            </div>
            <div className="skill-item">
              <SiFlask />
              <h4>Flask</h4>
            </div>
            <div className="skill-item">
              <SiMysql />
              <h4>MySQL</h4>
            </div>
            <div className="skill-item">
              <SiSqlite />
              <h4>SQLite</h4>
            </div>
            <div className="skill-item">
              <BiLogoPostgresql />
              <h4>PostgreSQL</h4>
            </div>
            <div className="skill-item">
              <FaLaravel />
              <h4>Laravel</h4>
            </div>
          </div>
        </div>
        <div className="skill-category">
          <h3>Outras tecnologias</h3>
          <div className="skills-items">
            <div className="skill-item">
              <LuFileJson />
              <h4>JSON</h4>
            </div>
            <div className="skill-item">
              <FaGitAlt />
              <h4>Git</h4>
            </div>
            <div className="skill-item">
              <IoLogoDocker />
              <h4>Docker</h4>
            </div>
            <div className="skill-item">
              <CgFigma />
              <h4>Figma</h4>
            </div>
            <div className="skill-item">
              <DiLinux />
              <h4>Linux</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
