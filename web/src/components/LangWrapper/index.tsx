"use client";
import React, { useEffect } from "react";
import i18n from "@/lib/i18n";

export default function LangWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang !== null) {
      i18n.changeLanguage(savedLang);
    }
  }, []);
  return <>{children}</>;
}
