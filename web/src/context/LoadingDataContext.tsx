"use client";
import React, { createContext, useContext, useState } from "react";
import { LoadingDataType } from "@/types/LoadingDataType";

const LoadingDataContext = createContext<LoadingDataType | undefined>(
  undefined
);
export function LoadingDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const defineLoading = (l: boolean) => {
    setLoading(l);
  };
  return (
    <LoadingDataContext.Provider value={{ loading, defineLoading }}>
      {children}
    </LoadingDataContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingDataContext);
  if (!context) {
    throw new Error("useLoading hook must be used within LoadingDataProvider");
  }

  return context;
}
