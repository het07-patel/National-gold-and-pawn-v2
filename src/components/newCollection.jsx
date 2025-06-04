"use client";
import React from "react";
import CustomImage from "@/components/CustomImage";
import leftImg from "@/assets/images/what-we-buy/gold-silver-platinum/collection2.webp";
import rightImg from "@/assets/images/what-we-buy/gold-silver-platinum/collection1.webp";

export default function NewInCollectionSection() {
  return (
    <section className="text-white py-8 px-4">
      <div className="text-center border-t border-primary py-6 sm:py-6 md:py-8 lg:py-10 2xl:py-12">
        <p className="italic text-primary text-2xl">
          “Elegance is an attitude, and jewelry is its punctuation.”
        </p>
      </div>
      <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row items-center justify-center">     
        <div
            className="relative text-black p-8 md:w-1/2 z-10 rounded-lg sm:rounded-xl shadow-lg bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${leftImg.src})` }}
            >
            <div className="absolute inset-0 bg-black opacity-50 z-0 rounded-lg sm:rounded-xl"></div>
            <div className="relative bg-opacity-80 p-12 z-10">
                <p className="text-2xl font-semibold tracking-wide mb-4 text-white">Distinguished Collections</p>
                <button className="px-6 py-2 bg-basewhite text-baseblack rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                Discover Now
                </button>
            </div>
        </div>

        <div className="md:w-1/2 -mt-12 md:mt-0 md:ml-[-80px]">
          <CustomImage
            srcAttr={rightImg}
            altAttr="Gold and Diamond Jewelry"
            titleAttr="Gold and Diamond Jewelry"
            width={600}
            height={500}
            className="rounded-lg sm:rounded-xl shadow-lg"
          />
        </div>
      </div>

    </section>
  );
}
