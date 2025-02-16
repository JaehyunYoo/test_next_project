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
        initialSlide={2}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3400,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            initialSlide: 3,
            spaceBetween: 10,
            slidesPerView: 1.5,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
          },
          640: {
            initialSlide: 3,
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          768: {
            initialSlide: 3,
            slidesPerView: 3,
            spaceBetween: 10,
          },

          1024: {
            initialSlide: 2,
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          1280: {
            initialSlide: 3,
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          1440: {
            initialSlide: 3,
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          1700: {
            initialSlide: 4,
            slidesPerView: 4.7,
            spaceBetween: 20,
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
