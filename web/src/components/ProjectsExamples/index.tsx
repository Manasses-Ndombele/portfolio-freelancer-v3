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
import { data } from "@/data/projects";
import "swiper/swiper-bundle.css";
import "@/styles/components/project-examples.scss";

export default function ProjectsExamples() {
  return (
    <div id="projects-examples">
      <div id="projects-examples-copy">
        <h2>Meus projetos</h2>
        <p>
          Aqui estão alguns projetos que comprovam minhas habilidades na prática
          pois como diz o ditado é necessário ver para crer.
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
            imgSrc={project1}
            projectName={data[0].name}
            tags={data[0].categories}
            styleClass="card-a"
            projectId={1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            imgSrc={project2}
            projectName={data[1].name}
            tags={data[1].categories}
            styleClass="card-a"
            projectId={2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            imgSrc={project3}
            projectName={data[2].name}
            tags={data[2].categories}
            styleClass="card-a"
            projectId={3}
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
