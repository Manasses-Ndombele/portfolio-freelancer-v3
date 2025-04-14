"use client";
import { useTranslation } from "react-i18next";
import "@/styles/components/main-footer.scss";

export default function MainFooter() {
  const { t } = useTranslation();
  return (
    <footer id="main-footer">
      <p>&copy; {t("footer.text")}</p>
    </footer>
  );
}
