"use client";
import { FaArrowUp } from "react-icons/fa6";
import "@/styles/components/scroll-top-btn.scss";

export default function ScrollTopBtn() {
  return (
    <div id="scroll-top-area">
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
