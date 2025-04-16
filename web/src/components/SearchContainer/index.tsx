"use client";
import React, { useState, ChangeEvent } from "react";
import { useProjectFilter } from "@/context/FilterProjectContext";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa6";
import "@/styles/components/search-container.scss";

export default function SearchContainer() {
  const { defineFilter } = useProjectFilter();
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const handleCategoryFilterSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
    defineFilter({
      value: e.target.value,
      _type: "categories",
    });
  };

  const handleSkillFilterRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setSkillFilter(e.target.value);
    defineFilter({
      value: e.target.value,
      _type: "skills",
    });
  };

  const [skillFilter, setSkillFilter] = useState<string>("");
  const { t } = useTranslation();
  return (
    <form id="search-container">
      <label htmlFor="search-select-field">{t("search-container.label")}</label>
      <select
        value={categoryFilter}
        onChange={handleCategoryFilterSelect}
        id="search-select-field"
      >
        <option value="all">{t("search-container.option-a")}</option>
        <option value="sales">{t("search-container.option-b")}</option>
        <option value="branding">{t("search-container.option-c")}</option>
        <option value="webSystems">{t("search-container.option-d")}</option>
        <option value="automations">{t("search-container.option-e")}</option>
        <option value="others">{t("search-container.option-f")}</option>
      </select>
      <div id="skills-filter-container">
        <div className={`field${skillFilter === "html" ? " active" : ""}`}>
          <input
            type="radio"
            name="skillFilter"
            id="skill-filter-1"
            value="html"
            checked={skillFilter === "html"}
            onChange={handleSkillFilterRadio}
          />
          <FaCheck />
          <label htmlFor="skill-filter-1">HTML</label>
        </div>
        <div
          className={`field ${skillFilter === "javascript" ? " active" : ""}`}
        >
          <input
            type="radio"
            name="skillFilter"
            id="skill-filter-2"
            value="javascript"
            checked={skillFilter === "javascript"}
            onChange={handleSkillFilterRadio}
          />
          <FaCheck />
          <label htmlFor="skill-filter-2">JavaScript</label>
        </div>
        <div className={`field ${skillFilter === "reactjs" ? " active" : ""}`}>
          <input
            type="radio"
            name="skillFilter"
            id="skill-filter-3"
            value="reactjs"
            checked={skillFilter === "reactjs"}
            onChange={handleSkillFilterRadio}
          />
          <FaCheck />
          <label htmlFor="skill-filter-3">ReactJS</label>
        </div>
        <div className={`field ${skillFilter === "python" ? " active" : ""}`}>
          <input
            type="radio"
            name="skillFilter"
            id="skill-filter-4"
            value="python"
            checked={skillFilter === "python"}
            onChange={handleSkillFilterRadio}
          />
          <FaCheck />
          <label htmlFor="skill-filter-4">Python</label>
        </div>
        <div className={`field ${skillFilter === "php" ? " active" : ""}`}>
          <input
            type="radio"
            name="skillFilter"
            id="skill-filter-5"
            value="php"
            checked={skillFilter === "php"}
            onChange={handleSkillFilterRadio}
          />
          <FaCheck />
          <label htmlFor="skill-filter-5">PHP</label>
        </div>
        <div className={`field ${skillFilter === "typescript" ? " active" : ""}`}>
          <input
            type="radio"
            name="skillFilter"
            id="skill-filter-6"
            value="typescript"
            checked={skillFilter === "typescript"}
            onChange={handleSkillFilterRadio}
          />
          <FaCheck />
          <label htmlFor="skill-filter-6">TypeScript</label>
        </div>
        <div className={`field ${skillFilter === "nextjs" ? " active" : ""}`}>
          <input
            type="radio"
            name="skillFilter"
            id="skill-filter-7"
            value="nextjs"
            checked={skillFilter === "nextjs"}
            onChange={handleSkillFilterRadio}
          />
          <FaCheck />
          <label htmlFor="skill-filter-7">NextJS</label>
        </div>
      </div>
    </form>
  );
}
