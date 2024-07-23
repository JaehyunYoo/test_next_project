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

const ReviewCarousel: React.FC<SliderProps> = ({
  slides,
}) => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        initialSlide={2}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          360: {
            spaceBetween: 10,
            slidesPerView: 2,
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
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          1440: {
            initialSlide: 3,
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1920: {
            initialSlide: 4,
            slidesPerView: 6.5,
            spaceBetween: 30,
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
