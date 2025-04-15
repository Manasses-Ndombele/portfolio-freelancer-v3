"use client";
import React, { createContext, useState, useContext } from "react";
import {
  FilterContextType,
  FilterTypes,
  MainFilterTypes,
} from "@/types/FilterProjects";

const FilterContext = createContext<FilterContextType | undefined>(undefined);
export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<MainFilterTypes>({
    value: "all",
    _type: "categories",
  });

  const defineFilter = (f: { value: string; _type: FilterTypes }) => {
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
