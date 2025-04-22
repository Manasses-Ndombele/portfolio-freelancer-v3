"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import projectsGifLight from "@/assets/desktop-and-mobile-example light.gif";
import projectsGifDark from "@/assets/desktop-and-mobile-example dark.gif";
import "@/styles/components/brand-intro.scss";
import MiniLoader from "../MiniLoader";

function BrandIntro() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div id="brand-intro">
      <div id="brand-intro-content">
        <h1>
          {t("main-copy.title")}
          <strong>{t("main-copy.title.strong")}</strong>
        </h1>
        <p>{t("main-copy.description")}</p>
        <Link href="#contacts-container">
          <button type="button" className="main-cta">
            {t("main-copy.cta-btn")}
          </button>
        </Link>
      </div>
      <div id="brand-intro-video">
        {theme === "light" ? (
          <Suspense fallback={<MiniLoader bottomSpace={true} />}>
            <Image
              src={projectsGifLight}
              alt={t("projects-gif-alt")}
              unoptimized
            />
          </Suspense>
        ) : (
          <Suspense fallback={<MiniLoader bottomSpace={true} />}>
            <Image
              src={projectsGifDark}
              alt={t("projects-gif-alt")}
              unoptimized
            />
          </Suspense>
        )}
        <div id="video-shadow"></div>
      </div>
    </div>
  );
}

export default BrandIntro;
