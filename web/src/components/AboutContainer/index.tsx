"use client";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import MiniLoader from "../MiniLoader";
import aboutPhoto from "@/assets/DevManasses.png";
import "@/styles/components/about-container.scss";

export default function AboutContainer() {
  const { t } = useTranslation();
  return (
    <div id="about-container">
      <div id="about-img-container">
        <Suspense fallback={<MiniLoader />}>
          <Image src={aboutPhoto} alt={t("about-container.img-alt")} />
        </Suspense>
      </div>
      <div id="about-copy">
        <h2>{t("about-container.title")}</h2>
        <p>{t("about-container.description-a")}</p>
        <p>{t("about-container.description-b")}</p>
      </div>
    </div>
  );
}
