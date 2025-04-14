"use client";
import { ChangeEvent, useState, useEffect } from "react";
import i18n from "@/lib/i18n";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function LangSwitcher() {
  const { t } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language);
  useEffect(() => {
    const langSaved = localStorage.getItem("lang");
    if (langSaved) {
      i18n.changeLanguage(langSaved);
      setLang(langSaved);
    }
  }, []);

  const handleChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
    setLang(newLang);
  };

  return (
    <div id="lang-switcher-container">
      <label htmlFor="lang-select">
        <IoLanguage />
        {t("lang-switcher-label")}
      </label>
      <select id="lang-select" value={lang} onChange={handleChangeLang}>
        <option value="en">English</option>
        <option value="pt">Portuguese</option>
      </select>
    </div>
  );
}
