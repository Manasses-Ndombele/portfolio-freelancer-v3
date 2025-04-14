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
          <Link href="/#services-container">{t("main-nav.link-a")}</Link>
          <Link href="/projects">{t("main-nav.link-b")}</Link>
          <Link href="/#about-container">{t("main-nav.link-c")}</Link>
          <Link href="/#contacts-container">{t("main-nav.link-d")}</Link>
        </nav>
        <menu type="toolbar">
          <LangSwitcher />
          {theme === "light" ? (
            <button
              id="theme-btn"
              onClick={() => {
                setMenuStatus("");
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
                setMenuStatus("");
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
              onClick={() => {
                setMenuStatus("");
              }}
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
