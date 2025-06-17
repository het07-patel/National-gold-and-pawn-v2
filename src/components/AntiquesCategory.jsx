"use client";
import React from "react";
import bgimage from "@/assets/images/what-we-buy/antiques/bg-image.webp";

const categories = [
  "Military Memorabilia",
  "Antique Jewelry & Watches", 
  "Porcelain & Pottery Pieces",
  "Collectible Toys & Figurines",
  "Signed Art & Sculptures",
  "Historic Documents & Books",
  "Old Photographs and Postcards",
  "Vintage Pocket Watches"
];

export default function AntiqueCategories() {
  return (
    <section className="relative py-16 bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${bgimage.src})`,
        }}
      ></div>

      {/* Overlay Content */}
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">
            What We’re Looking For
        </h1>
        <p className="mb-12 text-lg md:text-xl font-normal">
          We buy a wide range of antiques and collectibles—each item carefully evaluated for age, rarity, condition, and market demand. Whether you're clearing an estate or selling a single piece, we’re here to help with fair, knowledgeable offers.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
  {categories.map((cat) => (
    <div
      key={cat}
      className="bg-black text-white py-8 px-4 rounded-2xl shadow hover:shadow-lg transition duration-300 font-medium text-lg cursor-pointer text-center"
    >
      {cat}
    </div>
  ))}
</div>


      </div>
    </section>
  );
}
