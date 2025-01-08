"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "@/styles/components/scroll-top-btn.scss";

export default function ScrollTopBtn() {
  const [scrollY, setScrollY] = useState<number>(0);
  useEffect(() => {
    const handleScrollY = () => {
      setScrollY(window.scrollY);
    };

    handleScrollY();
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, [scrollY]);

  return (
    <div id="scroll-top-area" className={scrollY > 500 ? "show" : ""}>
      <button
        type="button"
        id="scroll-top-btn"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}
