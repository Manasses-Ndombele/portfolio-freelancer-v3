"use client";
import React, { useEffect } from "react";
import { useLoading } from "@/context/LoadingDataContext";
import { useTranslation } from "react-i18next";
import "@/styles/components/main-loader.scss";

export default function MainLoader() {
  const { loading } = useLoading();
  const { t } = useTranslation();
  useEffect(() => {
    if (!loading) {
      document.querySelector("div#main-loader")?.classList.add("closed");
    }
  }, [loading]);
  return (
    <div id="main-loader">
      <div id="loader"></div>
      {t("main-loader-text")}
    </div>
  );
}
