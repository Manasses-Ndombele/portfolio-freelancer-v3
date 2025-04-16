"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "@/components/ProjectCard";
import { data } from "@/data/projects";
import { useTranslation } from "react-i18next";
import "swiper/swiper-bundle.css";
import "@/styles/components/project-examples.scss";

export default function ProjectsExamples() {
  const { t } = useTranslation();
  return (
    <div id="projects-examples">
      <div id="projects-examples-copy">
        <h2>{t("projects-container.title")}</h2>
        <p>{t("projects-container.description")}</p>
      </div>
      <Swiper
        id="swiper-projects"
        modules={[Navigation, A11y, Pagination]}
        slidesPerView={1}
        navigation
        spaceBetween={50}
        speed={1500}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        onSlideChange={() => {
          console.log("slide change");
        }}
        onSwiper={(swiper) => {
          console.log(swiper);
        }}
      >
        <SwiperSlide>
          <ProjectCard
            imgSrc={data[0].img}
            projectName={data[0].name}
            tags={data[0].categories}
            styleClass="card-a"
            projectId={1}
            imgAlt={data[0].imgAlt}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            imgSrc={data[1].img}
            projectName={data[1].name}
            tags={data[1].categories}
            styleClass="card-a"
            projectId={2}
            imgAlt={data[1].imgAlt}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            imgSrc={data[2].img}
            projectName={data[2].name}
            tags={data[2].categories}
            styleClass="card-a"
            projectId={3}
            imgAlt={data[2].imgAlt}
          />
        </SwiperSlide>
      </Swiper>
      <div id="projects-cta-container">
        <Link href="/projects">
          <span>{t("projects-container.btn-action")}</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
