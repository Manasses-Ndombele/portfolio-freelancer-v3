"use client";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import "@/styles/components/home-link-container.scss";

export default function HomeLinkContainer() {
  const { t } = useTranslation();
  return (
    <div id="home-link-container">
      <Link href="/">
        <span className="icon-container">
          <IoHomeSharp />
        </span>
        <span>{t("home-link-container.span")}</span>
      </Link>
    </div>
  );
}
