'use client';
import React from 'react';
import CustomImage from '@/components/CustomImage';
import earPiercing from "@/assets/images/what-we-buy/diamond-jewelry/ear-piercing.webp";
import ring from "@/assets/images/what-we-buy/diamond-jewelry/ring.webp";
import earring from "@/assets/images/what-we-buy/diamond-jewelry/earring.webp";
import pendant from "@/assets/images/what-we-buy/diamond-jewelry/pendant.webp";
import necklace from "@/assets/images/what-we-buy/diamond-jewelry/necklace.webp";
import bracelet from "@/assets/images/what-we-buy/diamond-jewelry/bracelet.webp";

const categories = [
  {
    title: 'Ear Piercings',
    image: earPiercing,
  },
  {
    title: 'Bracelets',
    image: bracelet,
  },
  {
    title: 'Necklaces',
    image: necklace,
  },
  {
    title: 'Earrings',
    image: earring,
  },
  {
    title: 'Rings',
    image: ring,
  },
  {
    title: 'Pendants',
    image: pendant,
  },
];

export default function JewelryCategoryGallery() {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-16 bg-white text-black">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold leading-tight mb-2">CATEGORIES</h2>
        <p className="max-w-xl mx-auto text-gray-600">
        From dazzling diamonds to the warm glow of gold, our jewelry is designed to make a lasting impression. Whether you’re celebrating a milestone, marking a special occasion, or simply indulging in timeless elegance, each piece in our collection reflects exquisite craftsmanship and unmatched quality.
        </p>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-6">
        {categories.map((item, index) => (
          <div key={index} className="text-center">
            <div className="aspect-square w-full max-w-[300px] mx-auto overflow-hidden rounded-md transition-transform duration-300 hover:scale-105">
                <CustomImage
                srcAttr={item.image}
                altAttr={item.title}
                titleAttr={item.title}
                width={300}
                height={300}
                className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-lg font-medium mt-3">{item.title}</h3>
            </div>

        ))}
      </div>
    </section>
  );
}
