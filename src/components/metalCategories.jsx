import React from "react";
import CustomImage from "@/components/CustomImage";
import GradientText from "@/components/gradient-text";
import goldImg from "@/assets/images/what-we-buy/gold-silver-platinum/gold.webp";
import silverImg from "@/assets/images/what-we-buy/gold-silver-platinum/silver.webp";
import platinum from "../assets/images/what-we-buy/gold-silver-platinum/platinum.webp";

const categories = [
  {
    title: "Gold",
    image: goldImg,
    alt: "Gold Jewelry",
  },
  {
    title: "Silver",
    image: silverImg,
    alt: "Silver Jewelry",
  },
  {
    title: "Platinum",
    image: platinum,
    alt: "Platinum Jewelry",
  },
];

export default function MetalCategoriesSection() {
  return (
    <section className="text-white py-12">
      <div className="text-center mb-12 px-4">
        <p className="text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-bold uppercase leading-tight mb-3">
           <GradientText text="Discover Our Precious Metals" />
        </p>
        <h2 className="text-xl md:text-2xl">
          "Gold, silver, and platinum — where beauty meets brilliance. Choose your signature metal."
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-4 sm:gap-4 md:gap-8 px-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative group text-center overflow-hidden rounded-lg"
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg sm:text-sm lg:text-xl bg-black bg-opacity-50 px-4 py-2 rounded font-semibold transition-all duration-300 ease-in-out group-hover:tracking-wider group-hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] group-hover:text-basewhite">
                  {cat.title}
                </span>
              </div>

              <CustomImage
                srcAttr={cat.image}
                altAttr={cat.alt}
                titleAttr={cat.title}
                className="rounded-lg object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                width={400}
                height={500}
              />

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
