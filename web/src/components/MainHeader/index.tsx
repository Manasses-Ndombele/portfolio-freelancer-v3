"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode, MdMenu, MdClose } from "react-icons/md";
import { useTranslation } from "react-i18next";
import LangSwitcher from "../LangSwitcher";
import "@/styles/components/main-header.scss";

function MainHeader() {
  const { theme, toggleTheme } = useTheme();
  const [menuStatus, setMenuStatus] = useState("");
  const { t } = useTranslation();
  const closeMenu = () => {
    setMenuStatus("");
    window.document.body.style.overflowY = "auto";
  };

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
            window.document.body.style.overflowY = "hidden";
          }}
        >
          <MdMenu />
        </button>
      </div>
      <div id="header-options" className={`${menuStatus}`}>
        <div id="header-close-action-container">
          <button type="button" className="menu-btn" onClick={closeMenu}>
            <MdClose />
          </button>
        </div>
        <nav>
          <Link href="/#services-container" onClick={closeMenu}>
            {t("main-nav.link-a")}
          </Link>
          <Link href="/projects" onClick={closeMenu}>
            {t("main-nav.link-b")}
          </Link>
          <Link href="/#about-container" onClick={closeMenu}>
            {t("main-nav.link-c")}
          </Link>
          <Link href="/#contacts-container" onClick={closeMenu}>
            {t("main-nav.link-d")}
          </Link>
        </nav>
        <menu type="toolbar">
          <LangSwitcher setMenuStatus={setMenuStatus} />
          {theme === "light" ? (
            <button
              id="theme-btn"
              onClick={() => {
                closeMenu();
                toggleTheme();
              }}
            >
              <MdDarkMode />
              {` ${t("theme-btn-dark")}`}
            </button>
          ) : (
            <button
              id="theme-btn"
              onClick={() => {
                closeMenu();
                toggleTheme();
              }}
            >
              <CiLight />
              {` ${t("theme-btn-light")}`}
            </button>
          )}
          <Link href="/#contacts-container">
            <button
              type="button"
              className="main-cta"
              onClick={closeMenu}
            >
              {t("main-copy.cta-btn")}
            </button>
          </Link>
        </menu>
      </div>
    </header>
  );
}

export default MainHeader;
