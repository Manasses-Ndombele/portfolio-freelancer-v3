"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import aboutPhoto from "@/assets/DevManasses.png";
import "@/styles/components/about-container.scss";

export default function AboutContainer() {
  const { t } = useTranslation();
  return (
    <div id="about-container">
      <div id="about-img-container">
        <Image src={aboutPhoto} alt={t("about-container.img-alt")} />
      </div>
      <div id="about-copy">
        <h2>{t("about-container.title")}</h2>
        <p>{t("about-container.description-a")}</p>
        <p>{t("about-container.description-b")}</p>
      </div>
    </div>
  );
}
