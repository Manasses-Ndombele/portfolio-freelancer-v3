"use client";
import React, { useState, ChangeEvent } from "react";
import { useProjectFilter } from "@/context/FilterProjectContext";
import { FilterKey } from "@/types/FilterProjects";
import { useTranslation } from "react-i18next";
import "@/styles/components/search-container.scss";

export default function SearchContainer() {
  const { defineFilter } = useProjectFilter();
  const [selectedOpt, setSelectedOpt] = useState<FilterKey | string>("all");
  const handleFilterSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOpt(e.target.value);
    defineFilter(e.target.value);
  };

  const { t } = useTranslation();
  return (
    <div id="search-container">
      <label htmlFor="search-select-field">{t("search-container.label")}</label>
      <select
        value={selectedOpt}
        onChange={handleFilterSelect}
        id="search-select-field"
      >
        <option value="all">{t("search-container.option-a")}</option>
        <option value="sales">{t("search-container.option-b")}</option>
        <option value="branding">{t("search-container.option-c")}</option>
        <option value="webSystems">{t("search-container.option-d")}</option>
        <option value="automations">{t("search-container.option-e")}</option>
        <option value="others">{t("search-container.option-f")}</option>
      </select>
    </div>
  );
}
