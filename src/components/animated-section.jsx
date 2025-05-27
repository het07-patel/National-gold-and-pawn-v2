"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  cardAnimation,
  leftToRightAnimation,
  rightToLeftAnimation,
} from "@/utils/common";

const AnimatedSection = ({
  description = [],
  title = "",
  direction = "LTF", // LTF is left-to-right & RTF is right-to-left
  img = "",
  titleAttr = "",
  altAttr = "",
  children,
  className = "",
  imgClassName = "",
  titleClassName = "",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const contentAnimation =
    direction === "LTF" ? rightToLeftAnimation : leftToRightAnimation;
  const layoutDirection =
    direction === "LTF"
      ? "flex-col lg:flex-row"
      : "flex-col-reverse lg:flex-row-reverse";
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className={`flex ${layoutDirection} items-center justify-between gap-6 xxs:gap-4 md:gap-6 lg:gap-16 p-4 xxs:p-2 sm:p-8 md:p-12 lg:p-16 xl:p-10 2xl:p-20 bg-blackblue rounded-lg sm:rounded-xl text-white ${className}`}
    >
      {/* Image Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={cardAnimation}
        className="w-full xxs:w-full lg:w-1/2 aspect-square relative"
      >
        <Image
          fill
          priority
          src={img}
          alt={altAttr}
          title={titleAttr}
          className={`object-contain p-5 ${imgClassName}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={contentAnimation}
        className="w-full lg:w-1/2 flex flex-col text-center lg:justify-center lg:items-start  lg:text-left gap-3 xxs:gap-4 sm:gap-7"
      >
        <h2
          className={`text-2xl md:text-4xl md:mb-2 2xl:text-5xl lg:leading-[50px] 2xl:leading-[60px] font-bold ${titleClassName}`}
        >
          {title}
        </h2>
        {description.length &&
          description.map((desc, i) => {
            return (
              <p
                key={i}
                className="text-[14px] md:text-[17px] 2xl:text-[20px] "
              >
                {desc}
              </p>
            );
          })}
        {children}
      </motion.div>
    </section>
  );
};

export default AnimatedSection;
