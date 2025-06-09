"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  cardAnimation,
  leftToRightAnimation,
  rightToLeftAnimation,
} from "@/utils/common";
import { CustomImage } from "./dynamiComponents";

const AlternatingFeatureBlock = ({
  description = "",
  title = "",
  direction = "LTF",
  imgSrc = "",
  titleAttr = "",
  altAttr = "",
  children,
  className = "",
  titleClassName = "",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const contentAnimation =
    direction === "LTF" ? rightToLeftAnimation : leftToRightAnimation;
  const layoutDirection =
    direction === "LTF"
      ? "flex-col lg:flex-row"
      : "flex-col lg:flex-row-reverse";
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className={`flex ${layoutDirection} items-center justify-between gap-6 text-basewhite ${className}`}
    >
      {/* Image Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={cardAnimation}
        className="h-[40vh] md:h-[70vh] w-full xxs:w-full lg:w-1/2 relative rounded-lg sm:rounded-xl lg:shadow-[38px_-40px_0px_-11px_rgba(30,30,30,0.5)] 2xl:shadow-[38px_-44px_0px_-1px_rgba(30,30,30,0.5)]]"
      >
        <CustomImage
          srcAttr={imgSrc}
          altAttr={altAttr}
          titleAttr={titleAttr}
          fill
          priority
          className="object-cover rounded-lg sm:rounded-xl"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={contentAnimation}
        className="w-full lg:w-[45%] flex flex-col text-center lg:justify-center lg:items-start  lg:text-left "
      >
        <h2
          className={`text-xl md:text-3xl md:mb-2 2xl:text-4xl lg:leading-[50px] 2xl:leading-[60px] font-bold ${titleClassName}`}
        >
          {title}
        </h2>
        <div className="space-y-0.5 mb-3 !text-left">
          <p className="text-center lg:text-start  md:text-md lg:text-lg 2xl:text-[24px] py-2">
            {description}
          </p>
        </div>

        {children}
      </motion.div>
    </section>
  );
};

export default AlternatingFeatureBlock;
