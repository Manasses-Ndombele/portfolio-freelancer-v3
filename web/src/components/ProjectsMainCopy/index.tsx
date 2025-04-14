"use client";
import { useTranslation } from "react-i18next";
import "@/styles/components/projects-main-copy.scss";

export default function ProjectsMainCopy() {
  const { t } = useTranslation();
  return (
    <div id="main-copy-container">
      <h1>{t("projects-main-copy.title")}</h1>
      <p>{t("projects-main-copy.description")}</p>
    </div>
  );
}
