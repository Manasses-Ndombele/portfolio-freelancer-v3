"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import project1 from "@/assets/project-example-1.gif";
import project2 from "@/assets/project-example-2.gif";
import project3 from "@/assets/project-example-3.gif";

export default function ProjectsExamples() {
  return (
    <div id="projects-examples">
      <div className="projects-examples-copy">
        <h2>Meus projetos</h2>
        <p>
          Nada melhor do que ver para crer, aqui estão alguns projetos que
          comprovam minhas habilidades!
        </p>
      </div>
      <Swiper
        modules={[Navigation, A11y, Pagination]}
        slidesPerView={1}
        navigation
        spaceBetween={50}
        speed={1500}
        pagination={{ clickable: true }}
        onSlideChange={() => {
          console.log("slide change");
        }}
        onSwiper={(swiper) => {
          console.log(swiper);
        }}
      >
        <SwiperSlide>
          <Image src={project1} alt="Projeto do portfólio" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={project2} alt="Projeto do portfólio" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={project3} alt="Projeto do portfólio" />
        </SwiperSlide>
      </Swiper>
      <div id="projects-cta-container">
        <Link href="/projects">
          <button type="button">Veja mais</button>
        </Link>
      </div>
    </div>
  );
}
