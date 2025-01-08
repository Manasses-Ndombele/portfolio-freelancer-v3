"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { useTheme } from "@/context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode, MdMenu, MdClose } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import "@/styles/components/main-header.scss";

function MainHeader() {
  const { theme, toggleTheme } = useTheme();
  const [menuStatus, setMenuStatus] = useState("");
  return (
    <header id="main-header">
      <div id="header-main-layout">
        <Link href="#">
          <span>{"{ "}</span>
          <strong>DevManasses</strong>
          <span>{" }"}</span>
        </Link>
        <button
          type="button"
          className="menu-btn"
          onClick={() => {
            setMenuStatus("opened");
          }}
        >
          <MdMenu />
        </button>
      </div>
      <div id="header-options" className={`${menuStatus}`}>
        <div id="header-close-action-container">
          <button
            type="button"
            className="menu-btn"
            onClick={() => {
              setMenuStatus("");
            }}
          >
            <MdClose />
          </button>
        </div>
        <nav>
          <Link href="/#services-container">Serviços</Link>
          <Link href="/projects">Projetos</Link>
          <Link href="/#about-container">Sobre</Link>
          <Link href="/#contacts-container">Contatos</Link>
        </nav>
        <menu type="toolbar">
          <Formik
            initialValues={{ lang_select: "pt-br" }}
            onSubmit={(values) => {
              console.log(values.lang_select);
            }}
          >
            <Form>
              <label htmlFor="lang-select">
                <IoLanguage />
                Língua
              </label>
              <Field as="select" name="lang_select" id="lang-select">
                <option value="en-us">EN - United States</option>
                <option value="pt-br">PT - Brasil</option>
              </Field>
            </Form>
          </Formik>
          {theme === "light" ? (
            <button
              id="theme-btn"
              onClick={() => {
                setMenuStatus("");
                toggleTheme();
              }}
            >
              <MdDarkMode /> Modo escuro
            </button>
          ) : (
            <button
              id="theme-btn"
              onClick={() => {
                setMenuStatus("");
                toggleTheme();
              }}
            >
              <CiLight /> Modo claro
            </button>
          )}
          <Link href="/#contacts-container">
            <button
              type="button"
              className="main-cta"
              onClick={() => {
                setMenuStatus("");
              }}
            >
              Pedir orçamento
            </button>
          </Link>
        </menu>
      </div>
    </header>
  );
}

export default MainHeader;
