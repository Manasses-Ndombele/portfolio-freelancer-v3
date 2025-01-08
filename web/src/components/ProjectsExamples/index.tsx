"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "@/components/ProjectCard";
import project1 from "@/assets/project-example-1.gif";
import project2 from "@/assets/project-example-2.gif";
import project3 from "@/assets/project-example-3.gif";
import "swiper/swiper-bundle.css";
import "@/styles/components/project-examples.scss";

export default function ProjectsExamples() {
  return (
    <div id="projects-examples">
      <div id="projects-examples-copy">
        <h2>Meus projetos</h2>
        <p>
          Nada melhor do que ver para crer, aqui estão alguns projetos que
          comprovam minhas habilidades!
        </p>
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
            spaceBetween: 20
          }
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
            imgSrc={project1}
            projectName="Emagrecimento Sem Segredos"
            tags={["Landing page", "Site de vendas"]}
            styleClass="card-a"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            imgSrc={project2}
            projectName="EDEN Hotels"
            tags={["Site institucional", "Site para branding", "Sistema web"]}
            styleClass="card-a"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            imgSrc={project3}
            projectName="VR Motion"
            tags={["Loja online", "Site de vendas"]}
            styleClass="card-a"
          />
        </SwiperSlide>
      </Swiper>
      <div id="projects-cta-container">
        <Link href="/projects">
          <span>Ver todos projetos</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
