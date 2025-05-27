"use client";

import React from "react";
import GradientText from "./gradient-text";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import honesty from "@/assets/images/about/honesty.webp";
import excellence from "@/assets/images/about/excellence.webp";
import customerCare from "@/assets/images/about/customer-care.webp";
import integrity from "@/assets/images/about/integrity.webp";
import { cardAnimation } from "@/utils/common";

const valuesSection = [
  {
    img: honesty,
    title: "Ensuring transparent and fair dealings in every transaction.",
    titleAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
    altAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
  },
  {
    img: integrity,
    title: "Upholding strong ethical standards at all times.",
    titleAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
    altAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
  },
  {
    img: customerCare,
    title: "Prioritizing your needs with personalized and respectful service.",
    titleAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
    altAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
  },
  {
    img: excellence,
    title: "Delivering quality and reliability in everything we do.",
    titleAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
    altAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
  },
];

export default function OurValues() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

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
      className="bg-[#0B0C10] text-center rounded-xl 2xl:rounded-[30px] p-4 xxs:p-2 sm:p-8 md:p-12 lg:p-16 xl:p-10 2xl:p-20"
    >
      <div className="lg:mx-52 mx-4">
        <h3 className="my-6 mb-2 md:mb-7 text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl md:mx-0 font-black uppercase">
          we live <GradientText text="our values" />
        </h3>
        <p className="text-[14px] md:text-[17px] 2xl:text-[20px] ">
          We live our values through honesty, integrity, and exceptional
          service. Every interaction reflects our commitment to trust and
          excellence.
        </p>
      </div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerAnimation}
        className="grid grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-1 md:gap-3 my-7 lg:my-10"
      >
        {valuesSection.map((valueCard, i) => (
          <motion.div key={i} variants={cardAnimation}>
            <Image
              src={valueCard.img}
              alt={valueCard.altAttr}
              title={valueCard.titleAttr}
            />
            <p className=" text-[12px] md:text-base">{valueCard.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
