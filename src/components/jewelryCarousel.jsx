'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { CustomImage } from "./dynamiComponents";

export default function JewelryCarousel({ title = "", swiperItems = [] }) {
  return (
    <section className="py-8 sm:py-8 md:py-12 lg:py-12 2xl:py-16 mt-6 text-center font-bold leading-tight">
      <h3 className="text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-10">
        {title}
      </h3>
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2.5, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 3.5, spaceBetween: 20 },
          }}
          modules={[Autoplay]}
        >
          {swiperItems.map((item, index) => (
          <SwiperSlide key={index} className="p-2">
            <div className="group relative aspect-square w-full mx-auto transition-transform duration-300 hover:scale-105 rounded-lg sm:rounded-xl">
              <CustomImage
                srcAttr={item.imgSrc}
                altAttr={item.altAttr}
                titleAttr={item.titleAttr}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold text-center px-2">
                  {item.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        </Swiper>
      </div>
    </section>
  );
}
