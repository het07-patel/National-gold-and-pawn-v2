"use client";
import { useEffect, useState } from "react";
import { cardAnimation, roundedBorder } from "@/utils/common";
import Image from "next/image";
import GradientText from "./gradient-text";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ServiceSection({ services = [] }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [seeMore, setSeeMore] = useState([]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const toggleSeeMore = (index) => {
    setSeeMore((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="p-4 xxs:p-2 xxs:py-4 sm:p-8 md:p-12 md:pt-0 lg:p-16 lg:!pt-0 xl:p-10 2xl:p-20"
    >
      <h3 className="my-6 md:mb-9 lg:mt-0 text-center text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-black uppercase">
        our <GradientText text="services" />
      </h3>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerAnimation}
        className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 md:gap-7"
      >
        {services.length &&
          services.map((service, index) => {
            const isSeeMore = seeMore[index] || false;
            return (
              <motion.div
                key={index}
                variants={cardAnimation}
                className={`gradient-border-wrapper h-fit ${roundedBorder} rounded-tl-xl rounded-tr-xl 2xl:rounded-tl-[30px] 2xl:rounded-tr-[30px]`}
              >
                <div
                  className={`service-card-bg p-3 md:p-3.5 lg:p-5 h-fit ${roundedBorder}`}
                >
                  <Image
                    src={service?.img}
                    className="w-[70px] lg:w-20 object-contain 2xl:w-28"
                    title={service?.titleAttr}
                    alt={service?.altAttr}
                  />
                  <h3 className="text-sm md:text-xl 2xl:text-2xl my-2 2xl:my-3">
                    {service?.title}
                  </h3>
                  <p className="text-[12px] lg:text-[14px] 2xl:text-base">
                    {isSeeMore
                      ? service?.description
                      : service?.description.slice(0, 99)}

                    {service?.description.length > 99 && !seeMore && ""}
                    {service?.description.length > 99 && (
                      <>
                        {isSeeMore ? "" : ".."}
                        <button
                          onClick={() => toggleSeeMore(index)}
                          className="inline text-primary hover:underline text-[12px] lg:text-[14px] 2xl:text-base"
                        >
                          See {isSeeMore ? "less" : "more"}
                        </button>
                      </>
                    )}
                  </p>
                </div>
              </motion.div>
            );
          })}
      </motion.div>
    </section>
  );
}
