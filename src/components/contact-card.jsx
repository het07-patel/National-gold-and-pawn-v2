"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import curve from "@/assets/images/Rectangle.png";

export default function ContactCard({
  icon,
  title,
  content,
  linkText,
  linkHref,
  imgTitleAttr = "",
  imgAltAttr = "",
  children,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const contactCardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={contactCardAnimation}
      className="w-full h-[250px] lg:h-full p-6 text-wrap rounded-xl flex flex-col gap-2 2xl:gap-4 relative"
      style={{
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${curve.src})`,
      }}
    >
      <div className="absolute -top-8 2xl:-top-10 left-[50%] translate-x-[-50%] bg-lightgold rounded-full flex items-center justify-center">
        <motion.div
          whileHover={{
            rotateY: 360,
            transition: {
              duration: 2,
              type: "spring",
            },
          }}
          className="p-3 2xl:p-4"
        >
          <Image
            priority
            src={icon}
            width={80}
            height={80}
            title={imgTitleAttr}
            alt={imgAltAttr}
            className="w-[35px] h-[35px] lg:w-[30px] lg:h-[30px] 2xl:w-[40px] 2xl:h-[40px] object-contain"
          />
        </motion.div>
      </div>

      <h6 className="text-lightgold font-bold mt-6 2xl:mt-14 mb-0 lg:mb-2 text-xl md:text-2xl lg:text-lg 2xl:text-2xl text-center">
        {title}
      </h6>

      {content && (
        <p className="max-w-[90%] mx-auto text-center text-sm md:text-base lg:text-sm 2xl:text-base">
          {content}
        </p>
      )}

      {children && (
        <div className="text-sm md:text-base lg:text-sm 2xl:text-base text-nowrap">
          {children}
        </div>
      )}

      {linkText && linkHref && (
        <Link
          href={linkHref}
          target="_blank"
          className="underline text-lightgold font-light text-center text-sm md:text-base"
        >
          {linkText}
        </Link>
      )}
    </motion.div>
  );
}
