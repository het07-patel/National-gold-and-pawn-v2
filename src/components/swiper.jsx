"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

export default function SwiperSection({ slides = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Swiper
        grabCursor={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mt-8 py-40"
        modules={[EffectCoverflow, Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper?.activeIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="!w-[400px] !h-[415px] lg:!h-[450px] !bg-transparent"
          >
            <Image
              priority
              width={400}
              height={400}
              src={slide.image}
              title={slide?.titleAttr}
              alt={slide?.altAttr}
              className="w-full h-full object-cover shadow-lg rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mb-4">
        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white transition-opacity duration-300">
          {slides?.[activeIndex]?.text}
        </p>
      </div>
    </div>
  );
}
