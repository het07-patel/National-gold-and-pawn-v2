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

const Animation = ({
  description = [],
  animatedClass = "",
  points = [],
  title = "",
  direction = "LTF",
  img = "",
  titleAttr = "",
  altAttr = "",
  children,
  className = "",
  titleClassName = "",
  isPrimaryColor = false,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  const contentAnimation =
    direction === "LTF" ? rightToLeftAnimation : leftToRightAnimation;

  // Force content on right and image on left for all screen sizes
  const layoutDirection =
    "flex-col md:flex-row-reverse lg:flex-row xl:flex-row 2xl:flex-row";

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    // Remove duplicate container wrapper
    <section
      ref={ref}
      className={`flex ${layoutDirection} items-center justify-between gap-4 sm:gap-6 lg:gap-12 w-full ${className}`}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={cardAnimation}
        className={`h-[30vh] sm:h-[40vh] md:h-[30vh] lg:h-[40vh] xl:h-[70vh] w-full md:w-full lg:w-full xl:w-1/2 relative overflow-hidden rounded-lg order-first md:order-last lg:order-last xl:order-first ${animatedClass}`}
      >
        <CustomImage
          srcAttr={img}
          titleAttr={titleAttr}
          altAttr={altAttr}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Content Section - Better mobile spacing */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={contentAnimation}
        className="w-full md:w-full lg:w-full xl:w-[48%] flex flex-col text-center lg:text-center xl:text-left mt-4 md:mt-0 lg:mt-0 xl:mt-4 order-1 md:order-1 lg:order-1 xl:order-2"
      >
        <h2
          className={`uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl mb-2 sm:mb-3 md:mb-4 leading-tight font-belleza lg:leading-[50px] 2xl:leading-[60px] font-bold${titleClassName} ${
            isPrimaryColor ? "text-primary" : ""
          }`}
        >
          {title}
        </h2>

        <div className="space-y-2 mb-4">
          {description.length &&
            description.map((desc, i) => {
              return (
                <p
                  key={i}
                  className={`text-sm sm:text-base md:text-sm lg:text-xl xl:text-[1.05rem] 2xl:text-[20px] leading-relaxed ${
                    i !== 0 ? "pt-2 md:pt-3 xl:pt-4" : ""
                  }`}
                >
                  {desc}
                </p>
              );
            })}

          {points.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-2 mb-3 mt-4">
              <ol className="list-decimal pl-4 space-y-2">
                {points
                  .slice(0, Math.ceil(points.length / 2))
                  .map((point, i) => (
                    <li
                      key={i}
                      className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-[24px]"
                    >
                      {point}
                    </li>
                  ))}
              </ol>
              <ol
                className="list-decimal pl-4 space-y-2"
                start={Math.ceil(points.length / 2) + 1}
              >
                {points.slice(Math.ceil(points.length / 2)).map((point, i) => (
                  <li
                    key={i}
                    className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-[24px]"
                  >
                    {point}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
        {children}
      </motion.div>
    </section>
  );
};

export default Animation;
