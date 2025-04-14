"use client";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BsApple } from "react-icons/bs";
import { IoConstruct } from "react-icons/io5";
import { RiRobot2Fill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import "@/styles/components/services-container.scss";

function ServicesContainer() {
  const { t } = useTranslation();

  return (
    <div id="services-container">
      <div id="services-copy">
        <h2>{t("service-container.title")}</h2>
        <p>{t("service-container.description")}</p>
      </div>
      <div id="services-items">
        <div className="service-item">
          <FaMoneyBillTrendUp />
          <h3>{t("service-container.subtitle-a")}</h3>
          <p>{t("service-container.description-a")}</p>
        </div>
        <div className="service-item">
          <BsApple />
          <h3>{t("service-container.subtitle-b")}</h3>
          <p>{t("service-container.description-b")}</p>
        </div>
        <div className="service-item">
          <IoConstruct />
          <h3>{t("service-container.subtitle-c")}</h3>
          <p>{t("service-container.description-c")}</p>
        </div>
        <div className="service-item">
          <RiRobot2Fill />
          <h3>{t("service-container.subtitle-d")}</h3>
          <p>{t("service-container.description-d")}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesContainer;
