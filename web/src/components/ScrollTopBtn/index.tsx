"use client";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollTopBtn() {
  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaArrowUp />
    </button>
  );
}
