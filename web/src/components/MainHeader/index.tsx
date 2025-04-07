"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";

function MainHeader() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <Link href="/">
        <span>{"{"}</span>
        <strong>Manasses</strong>
        <span>{"}"}</span>
      </Link>
      <div id="header-options">
        <nav>
          <Link href="/#services-container">Serviços</Link>
          <Link href="/projects">Projetos</Link>
          <Link href="/#about-container">Sobre</Link>
          <Link href="/#contacts-container">Contatos</Link>
        </nav>
        <menu type="toolbar">
          {theme === "light" ? (
            <button
              onClick={() => {
                toggleTheme();
              }}
            >
              <MdDarkMode /> Modo escuro
            </button>
          ) : (
            <button
              onClick={() => {
                toggleTheme();
              }}
            >
              <CiLight /> Modo claro
            </button>
          )}
          <form>
            <label htmlFor="lang-select">
              <IoLanguage />
              Língua
            </label>
            <select id="lang-select">
              <option value="pt-br">PT - Brasil</option>
              <option value="en-us">EN - United States</option>
            </select>
          </form>
        </menu>
        <button type="button">Pedir orçamento</button>
      </div>
    </header>
  );
}

export default MainHeader;
