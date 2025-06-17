'use client';
import React from 'react';
import CustomImage from '@/components/CustomImage';
import earPiercing from "@/assets/images/what-we-buy/diamond-jewelry/ear-piercing.webp";
import earPiercing1 from "@/assets/images/what-we-buy/diamond-jewelry/ear-piercing1.webp";
import ring from "@/assets/images/what-we-buy/diamond-jewelry/ring.webp";
import earring from "@/assets/images/what-we-buy/diamond-jewelry/earring.webp";
import earring1 from "@/assets/images/what-we-buy/diamond-jewelry/earring.webp";
import pendant from "@/assets/images/what-we-buy/diamond-jewelry/pendant.webp";
import pendant1 from "@/assets/images/what-we-buy/diamond-jewelry/pendant-1.webp";
import necklace from "@/assets/images/what-we-buy/diamond-jewelry/necklace.webp";
import necklace1 from "@/assets/images/what-we-buy/diamond-jewelry/necklace-1.webp";
import bracelet from "@/assets/images/what-we-buy/diamond-jewelry/bracelet.webp";
import fashion from "@/assets/images/what-we-buy/diamond-jewelry/fashion.webp";
import ring2 from "@/assets/images/what-we-buy/diamond-jewelry/ring2.webp";

import GradientText from './gradient-text';

const categoriesTop = [
  { title: 'Diamond Stud Earrings', image: earPiercing },
  { title: 'Charm Bracelets', image: bracelet },
  { title: 'Antique and Vintage jewelry', image: necklace },
];

const categoriesDown = [
  { title: 'Wedding Bands', image: earPiercing1 },
  { title: 'Gemstone Rings', image: ring2 },
  { title: 'Diamond Necklaces', image: necklace1 },
];

const categoriesRight = [
  { title: 'Custom-Designed Pieces', image: earring },
  { title: 'Luxury Watches', image: ring },
  { title: 'Gold Chains', image: pendant },
];

const categoriesLeft = [
  { title: 'Gold Hoop Earrings', image: earring1 },
  { title: 'Engagement Rings', image: fashion },
  { title: 'Tennis Bracelets', image: pendant1 },
];


export default function JewelryCategoryGallery() {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-16 textwhite">
    <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-bold uppercase leading-tight mb-3">
          Explore Our <GradientText text="Jewelry Categories"/>
        </h2>
        <p className="max-w-2xl mx-auto text-basewhite text-[14px] md:text-[17px] 2xl:text-[20px] text-base">
          From everyday elegance to timeless treasures, we accept all types of jewelry.
          Discover what we buy and how your pieces hold lasting value.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categoriesTop.map((item, index) => (
            <div key={index} className="text-center">
              <CustomImage
                srcAttr={item.image}
                altAttr={item.title}
                titleAttr={item.title}
                width={200}
                height={200}
                className="w-full h-auto object-contain rounded-md mx-auto"
              />
              <h3 className="mt-2 font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Right Column - First Row */}
        <div className="flex flex-col gap-6">
          <p className="text-[14px] md:text-[17px] 2xl:text-[20px] text-basewhite leading-relaxed">
            Whether it’s a diamond ring or vintage pendant, each item has its worth. Bring in your pieces and let us evaluate them with care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categoriesRight.map((item, index) => (
              <div key={index} className="text-center">
                <CustomImage
                  srcAttr={item.image}
                  altAttr={item.title}
                  titleAttr={item.title}
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain rounded-md mx-auto"
                />
                <h3 className="mt-2 font-semibold">{item.title}</h3>                
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-12">
        {/* Left Column - Second Row */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {categoriesLeft.map((item, index) => (
              <div key={index} className="text-center">
                <CustomImage
                  srcAttr={item.image}
                  altAttr={item.title}
                  titleAttr={item.title}
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain rounded-md mx-auto"
                />
                <h3 className="mt-2 font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
          <p className="text-basewhite text-[14px] md:text-[17px] 2xl:text-[20px] leading-relaxed">
            Here, you will discover a wide selection of refined pieces, inspired by tradition and contemporary style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categoriesDown.map((item, index) => (
            <div key={index} className="text-center">
              <CustomImage
                srcAttr={item.image}
                altAttr={item.title}
                titleAttr={item.title}
                width={200}
                height={200}
                className="w-full h-auto object-contain rounded-md mx-auto"
              />
              <h3 className="mt-2 font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
