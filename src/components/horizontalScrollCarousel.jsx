"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import post from "@/assets/images/what-we-buy/gold-silver-platinum/post.webp";
import post2 from "@/assets/images/what-we-buy/gold-silver-platinum/post-2.webp";
import post3 from "@/assets/images/what-we-buy/gold-silver-platinum/post-3.webp";
import post4 from "@/assets/images/what-we-buy/gold-silver-platinum/post-4.webp";
import post5 from "@/assets/images/what-we-buy/gold-silver-platinum/post-5.webp";
import bgShape from "@/assets/images/icons/star.svg";
import { CustomImage } from "./dynamiComponents";

const swiperItems = [
  { image: post, titleAttr: "", altAttr: "" },
  { image: post2, titleAttr: "", altAttr: "" },
  { image: post3, titleAttr: "", altAttr: "" },
  { image: post4, titleAttr: "", altAttr: "" },
  { image: post5, titleAttr: "", altAttr: "" },
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-[120vh] sm:h-[100vh] md:h-[80vh] lg:h-screen flex flex-col lg:flex-row items-center overflow-hidden py-8 sm:py-6 md:py-4 lg:py-4">
        <div className="w-full lg:w-1/3 h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-offwhite py-6 sm:py-4 md:py-2">
          <div className="max-w-md text-center lg:text-left">
            <span className="text-md md:text-xl 2xl:text-2xl">
              Discover Excellence
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-5xl 2xl:text-7xl font-semibold text-secondary my-4">
              National Gold and Pawn
            </h2>
            <CustomImage
              srcAttr={bgShape}
              altAttr=""
              titleAttr=""
              className="object-cover w-20 2xl:w-28 mt-4 2xl:mt-6 mx-auto lg:mx-0"
            />
          </div>
        </div>

        <div className="w-full lg:w-2/3 h-full flex items-center overflow-x-hidden px-4 sm:px-6 lg:px-0">
          <motion.div style={{ x }} className="flex gap-4">
            {swiperItems.map((card, index) => (
              <Card card={card} key={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative w-[250px] sm:w-[300px] 2xl:w-[400px] overflow-hidden flex-shrink-0 rounded-lg sm:rounded-xl">
      <CustomImage
        srcAttr={card.image}
        className="object-cover w-full"
        titleAttr={card.titleAttr}
        altAttr={card.altAttr}
      />
    </div>
  );
};

export default HorizontalScrollCarousel;
