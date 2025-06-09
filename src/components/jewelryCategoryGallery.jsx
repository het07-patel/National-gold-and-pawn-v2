'use client';
import React from 'react';
import CustomImage from '@/components/CustomImage';
import earPiercing from "@/assets/images/what-we-buy/diamond-jewelry/ear-piercing.webp";
import ring from "@/assets/images/what-we-buy/diamond-jewelry/ring.webp";
import earring from "@/assets/images/what-we-buy/diamond-jewelry/earring.webp";
import pendant from "@/assets/images/what-we-buy/diamond-jewelry/pendant.webp";
import necklace from "@/assets/images/what-we-buy/diamond-jewelry/necklace.webp";
import bracelet from "@/assets/images/what-we-buy/diamond-jewelry/bracelet.webp";
import fashion from "@/assets/images/what-we-buy/diamond-jewelry/fashion.webp";
import ring2 from "@/assets/images/what-we-buy/diamond-jewelry/ring2.webp";
import GradientText from './gradient-text';

const categoriesTop = [
  { title: 'Stud Earrings', image: earPiercing },
  { title: 'Gold Bracelets', image: bracelet },
  { title: 'Layered Necklaces', image: necklace },
];

const categoriesDown = [
  { title: 'Hoop Earrings', image: earPiercing },
  { title: 'Statement Rings', image: ring2 },
  { title: 'Pearl Necklaces', image: necklace },
];

const categoriesRight = [
  { title: 'Custom Diamond Sets', image: earring },
  { title: 'Wedding Rings', image: ring },
  { title: 'Religious Pendants', image: pendant },
];

const categoriesLeft = [
  { title: 'Gemstone Earrings', image: earring },
  { title: 'Fashion Rings', image: fashion },
  { title: 'Minimalist Pendants', image: pendant },
];


export default function JewelryCategoryGallery() {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-16 textwhite">
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold leading-tight mb-3">
          <GradientText text="Categories"/>
        </h2>
        <p className="max-w-2xl mx-auto text-basewhite text-[14px] md:text-[17px] 2xl:text-[20px] text-base">
          At National Gold and Pawn, we pride ourselves on trust, transparency, and fair evaluations.
          With decades of experience, our reputation is built on honest practices and customer satisfaction.
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
            From dazzling diamonds to the warm glow of gold, our jewelry will become the unique accent to your ensemble.
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
