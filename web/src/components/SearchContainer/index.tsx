"use client";
import React, { useState, ChangeEvent } from "react";
import { useProjectFilter } from "@/context/FilterProjectContext";
import { FilterKey } from "@/types/FilterProjects";
import "@/styles/components/search-container.scss";

export default function SearchContainer() {
  const { defineFilter } = useProjectFilter();
  const [selectedOpt, setSelectedOpt] = useState<FilterKey | string>("all");
  const handleFilterSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOpt(e.target.value);
    defineFilter(e.target.value);
  };

  return (
    <div id="search-container">
      <label htmlFor="search-select-field">O que está procurando hoje?</label>
      <select
        value={selectedOpt}
        onChange={handleFilterSelect}
        id="search-select-field"
      >
        <option value="all">Todos projetos</option>
        <option value="sales">Site de vendas</option>
        <option value="branding">Site para branding</option>
        <option value="webSystems">Sistemas web</option>
        <option value="automations">Automações</option>
        <option value="others">Outros</option>
      </select>
    </div>
  );
}
