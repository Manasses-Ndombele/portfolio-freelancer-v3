"use client";
import React, { createContext, useState, useContext } from "react";
import { FilterContextType, FilterKey } from "@/types/FilterProjects";

const FilterContext = createContext<FilterContextType | undefined>(undefined);
export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<FilterKey | string>("all");
  const defineFilter = (f: FilterKey | string) => {
    setFilter(f);
  };

  return (
    <FilterContext.Provider value={{ filter, defineFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useProjectFilter() {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("hook useProjectFilter must be used within FilterProvider");

  return context;
}
