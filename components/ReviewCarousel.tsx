"use client";

import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SliderProps {
  slides: ReactNode[];
}

const ReviewCarousel: React.FC<SliderProps> = ({ slides }) => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        initialSlide={3}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          360: {
            spaceBetween: 10,
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          1920: {
            slidesPerView: 5.5,
            spaceBetween: 10,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewCarousel;
