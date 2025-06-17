"use client";
import React from "react";
import { motion } from "framer-motion";
import Img1 from "@/assets/images/bullion/Img1.webp";
import GoldImg from "@/assets/images/bullion/GoldImg.webp";
import CertifiedImg from "@/assets/images/bullion/CertifiedImg.webp";

const coins = [
  {
    title: "Silver Coins",
    description:
      "Silver is also a great addition to any precious metals portfolio. We stock several silver products.",
    image: Img1,
  },
  {
    title: "Gold Coins",
    description:
      "We have a wide selection of gold coins from government mints.",
    image: GoldImg,
  },
  {
    title: "Certified Coins",
    description:
      "Some coins are offered certified by the PCGS for added protection as well as preserving the coins numismatic value.",
    image: CertifiedImg,
  },
];

function CoinSlide() {
  return (
    <div className="flex justify-center items-center pb-8 px-4 bg-baseblack">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
        {coins.map((coin, index) => (
          <motion.div
            key={coin.title}
           className="rounded-xl p-4 text-center shadow-md border-2 border-primary bg-baseblack"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="flex justify-center ">
              <img
                src={coin.image.src}
                alt={coin.title}
                className="w-[200px] h-[200px] object-contain"
              />
            </div>
            <h3 className="text-xl text-basewhite font-semibold">{coin.title}</h3>
            <p className="text-basewhite text-sm">{coin.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CoinSlide;
