"use client";
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
import { useTranslation } from "react-i18next";
import "@/styles/components/skills-container.scss";

export default function SkillsContainer() {
  const { t } = useTranslation();
  return (
    <div id="skills-container">
      <div id="skills-copy">
        <h2>{t("skills-container.title")}</h2>
        <p>{t("skills-container.description")}</p>
      </div>
      <div id="skills-categories">
        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="skills-items-container">
            <div className="skills-items">
              <div className="skill-item">
                <FaHtml5 />
                <p>HTML</p>
              </div>
              <div className="skill-item">
                <FaCss3Alt />
                <p>CSS</p>
              </div>
              <div className="skill-item">
                <IoLogoJavascript />
                <p>JavaScript</p>
              </div>
              <div className="skill-item">
                <FaBootstrap />
                <p>Bootstrap</p>
              </div>
              <div className="skill-item">
                <IoLogoSass />
                <p>Sass</p>
              </div>
              <div className="skill-item">
                <FaReact />
                <p>React</p>
              </div>
              <div className="skill-item">
                <SiTypescript />
                <p>TypeScript</p>
              </div>
              <div className="skill-item">
                <RiTailwindCssFill />
                <p>TailwindCSS</p>
              </div>
              <div className="skill-item">
                <SiNextdotjs />
                <p>NextJS</p>
              </div>
            </div>
            <div className="skills-items">
              <div className="skill-item">
                <FaHtml5 />
                <p>HTML</p>
              </div>
              <div className="skill-item">
                <FaCss3Alt />
                <p>CSS</p>
              </div>
              <div className="skill-item">
                <IoLogoJavascript />
                <p>JavaScript</p>
              </div>
              <div className="skill-item">
                <FaBootstrap />
                <p>Bootstrap</p>
              </div>
              <div className="skill-item">
                <IoLogoSass />
                <p>Sass</p>
              </div>
              <div className="skill-item">
                <FaReact />
                <p>React</p>
              </div>
              <div className="skill-item">
                <SiTypescript />
                <p>TypeScript</p>
              </div>
              <div className="skill-item">
                <RiTailwindCssFill />
                <p>TailwindCSS</p>
              </div>
              <div className="skill-item">
                <SiNextdotjs />
                <p>NextJS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-category">
          <h3>Backend</h3>
          <div className="skills-items-container">
            <div className="skills-items">
              <div className="skill-item">
                <FaPython />
                <p>Python</p>
              </div>
              <div className="skill-item">
                <SiPhp />
                <p>PHP</p>
              </div>
              <div className="skill-item">
                <SiDjango />
                <p>Django</p>
              </div>
              <div className="skill-item">
                <SiFlask />
                <p>Flask</p>
              </div>
              <div className="skill-item">
                <SiMysql />
                <p>MySQL</p>
              </div>
              <div className="skill-item">
                <SiSqlite />
                <p>SQLite</p>
              </div>
              <div className="skill-item">
                <BiLogoPostgresql />
                <p>PostgreSQL</p>
              </div>
              <div className="skill-item">
                <FaLaravel />
                <p>Laravel</p>
              </div>
            </div>
            <div className="skills-items">
              <div className="skill-item">
                <FaPython />
                <p>Python</p>
              </div>
              <div className="skill-item">
                <SiPhp />
                <p>PHP</p>
              </div>
              <div className="skill-item">
                <SiDjango />
                <p>Django</p>
              </div>
              <div className="skill-item">
                <SiFlask />
                <p>Flask</p>
              </div>
              <div className="skill-item">
                <SiMysql />
                <p>MySQL</p>
              </div>
              <div className="skill-item">
                <SiSqlite />
                <p>SQLite</p>
              </div>
              <div className="skill-item">
                <BiLogoPostgresql />
                <p>PostgreSQL</p>
              </div>
              <div className="skill-item">
                <FaLaravel />
                <p>Laravel</p>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-category">
          <h3>{t("skill-category.title")}</h3>
          <div className="skills-items-container">
            <div className="skills-items">
              <div className="skill-item">
                <LuFileJson />
                <p>JSON</p>
              </div>
              <div className="skill-item">
                <FaGitAlt />
                <p>Git</p>
              </div>
              <div className="skill-item">
                <IoLogoDocker />
                <p>Docker</p>
              </div>
              <div className="skill-item">
                <CgFigma />
                <p>Figma</p>
              </div>
              <div className="skill-item">
                <DiLinux />
                <p>Linux</p>
              </div>
            </div>
            <div className="skills-items">
              <div className="skill-item">
                <LuFileJson />
                <p>JSON</p>
              </div>
              <div className="skill-item">
                <FaGitAlt />
                <p>Git</p>
              </div>
              <div className="skill-item">
                <IoLogoDocker />
                <p>Docker</p>
              </div>
              <div className="skill-item">
                <CgFigma />
                <p>Figma</p>
              </div>
              <div className="skill-item">
                <DiLinux />
                <p>Linux</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
