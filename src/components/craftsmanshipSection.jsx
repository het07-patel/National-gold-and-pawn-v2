import React from "react";
import CustomImage from '@/components/CustomImage';
import CraftmanshipImage from "@/assets/images/what-we-buy/gold-silver-platinum/craftmanship.webp";
import GradientText from "@/components/gradient-text";

export default function CraftsmanshipSection() {
  return (
    <section className="container text-white px-6 max-w-8xl mx-auto py-8 sm:py-8 md:py-12 lg:py-12 2xl:py-16 mt-6">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-bold uppercase leading-tight mb-3">
          Hidden Wealth in <GradientText text="Precious Metals " />
        </h2>
        <p className="text-[14px] md:text-[17px] 2xl:text-[20px] max-w-2xl mx-auto text-basewhite">
          Old, unused, or broken—your gold, silver, and platinum may be worth more than you think. Get paid what your metal is truly worth.
          </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <CustomImage
            srcAttr={CraftmanshipImage}
            altAttr="Craftsmanship Jewelry Close-up"
            titleAttr="Craftsmanship Jewelry Close-up"
            width={400}
            height={510}
            className="w-85 h-auto rounded-lg sm:rounded-xl"
          />
          <div className="absolute translate-x-1/2 right-14 sm:right-0 md:right-8 lg:right-0 md:translate-x-0 top-1/2 -translate-y-1/2 rounded-full bg-approxblack p-2 overflow-hidden group">
            <CustomImage
              srcAttr={CraftmanshipImage}
              altAttr="Zoomed Jewelry Detail"
              titleAttr="Zoomed Jewelry Detail"
              width={150}
              height={150}
              className="w-50 h-50 object-cover rounded-full transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="text-center lg:text-left max-w-2xl">
          <h2 className="text-lightgold text-2xl md:text-3xl md:mb-2 2xl:text-4xl lg:leading-[60px] 2xl:leading-[60px] font-semibold mb-4">
            When Weight Becomes Worth
          </h2>
          <p className="text-[14px] md:text-[17px] 2xl:text-[20px] mb-6">
            Your gold, silver, and platinum pieces—whether broken, outdated, or collectible—still hold real value. We evaluate based on weight, purity, and market rates to offer top-dollar payouts. From coins and bullion to jewelry and scrap, we make the process easy, transparent, and rewarding. Get instant cash with no guesswork involved.
            </p>
        </div>
      </div>
    </section>
  );
}
