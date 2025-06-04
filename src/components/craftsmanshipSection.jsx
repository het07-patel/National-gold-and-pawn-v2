import React from "react";
import CustomImage from '@/components/CustomImage';
import CraftmanshipImage from "@/assets/images/what-we-buy/gold-silver-platinum/craftmanship.webp";
import GradientText from "@/components/gradient-text";

export default function CraftsmanshipSection() {
  return (
    <section className="container text-white px-6 max-w-8xl mx-auto py-8 sm:py-8 md:py-12 lg:py-12 2xl:py-16 mt-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold leading-tight mb-3">
          Expert Craftsmanship <GradientText text="in Every Detail" />
        </h2>
        <p className="text-[14px] md:text-[17px] 2xl:text-[20px] max-w-2xl mx-auto text-basewhite">
          Discover the artistry behind our gold, silver, and platinum pieces — where timeless design meets precision craftsmanship to create jewelry that tells a story.
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
            Tradition Cared For Since 1970
          </h2>
          <p className="text-[14px] md:text-[17px] 2xl:text-[20px] mb-6">
            At our pawn shop, we believe exceptional craftsmanship speaks volumes. Our collection of gold, silver, and platinum jewelry is carefully curated and inspected for quality, authenticity, and timeless appeal. Each piece tells a story—crafted with precision, attention to detail, and enduring value. <br />
            Whether you're looking to buy, sell, or pawn, we ensure that every item reflects both artistic excellence and smart investment potential. From vintage heirlooms to modern designs, our expert team evaluates each item to offer you honest appraisals and trustworthy service. Experience luxury that lasts, with craftsmanship you can see and value you can feel. <br />
            We value the beauty and integrity of fine jewelry, ensuring customers receive both exceptional design and lasting investment with every transaction.
          </p>
        </div>
      </div>
    </section>
  );
}
