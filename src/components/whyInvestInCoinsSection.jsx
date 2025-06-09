"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import bgImage from "@/assets/images/what-we-buy/coins/coins-background.webp";

import { CustomImage } from "./dynamiComponents";

const reasons = [
  {
    title: "Hedge Against Inflation",
    description: "Precious metals retain their value over time, making them a reliable store of wealth.",
  },
  {
    title: "Liquidity & Global Recognition",
    description: "Gold and silver coins are easily tradable and accepted worldwide.",
  },
  {
    title: "Portfolio Diversification",
    description: "Adding precious metals to your investments enhances financial stability.",
  },
  {
    title: "Historical & Collectible Value",
    description: "Many coins hold historical significance, making them desirable.",
  },
  {
    title: "Tangible Asset Security",
    description: "Unlike digital assets, coins offer physical ownership and stability.",
  },
  {
    title: "Long-Term Appreciation",
    description: "Quality coins can appreciate over time, offering capital growth.",
  },
  {
    title: "Cultural and Artistic Appeal",
    description: "Many coins are prized for their unique designs and craftsmanship.",
  },
];

export default function WhyInvestInCoins() {
  return (
    <div className="relative py-16">
      <CustomImage
        srcAttr={bgImage}
        altAttr="Gold coin background"
        titleAttr="Gold coin background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0 absolute inset-0 opacity-20"
      />

      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Invest in Gold & Silver Coins?</h2>
        <div className="flex justify-center">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 5,
                centeredSlides: false,
                spaceBetween: 24,
              },
            }}
            autoplay={{ delay: 3500 }}
            className="w-full max-w-[300px] sm:max-w-none"
          >
            {reasons.map((item, index) => (
              <SwiperSlide key={index} className="mx-auto">
                <div className="rounded-xl 2xl:rounded-[30px] bg-gradient-to-br from-primary to-approxblack p-[1.5px] max-w-[280px] w-full h-[200px]">
                  <div className="bg-approxblack rounded-lg 2xl:rounded-[28px] px-6 py-8 sm:py-8 md:py-10 lg:py-12 h-full w-full flex flex-col justify-center items-center text-center">
                    <h3 className="text-lg font-semibold mb-3 text-white leading-tight">{item.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
