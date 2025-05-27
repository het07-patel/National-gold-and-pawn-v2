"use client";

import Image from "next/image";
import { Button } from "./button";
import visit from "@/assets/images/visit.webp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const fadeInAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const VisitUs = () => {
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleRedirect = () => {
    router.push("/contact");
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInAnimation}
      className={`relative rounded-xl 2xl:rounded-[30px] overflow-hidden mt-5 bottom-[-20px]  2xl:bottom-[-43]`}
    >
      {/* Background Image */}
      <Image
        src={visit}
        alt="National Gold and Pawn | Diamonds, Watches, Jewelry"
        title="National Gold and Pawn | Diamonds, Watches, Jewelry"
        width={2070}
        height={1380}
        priority
        className="w-full xxs:h-80 lg:h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Section */}
      <div className="absolute inset-0 flex justify-center items-center p-5">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInAnimation}
          className={`flex flex-col justify-center items-center w-full max-w-[90%] xxs:max-w-full sm:max-w-[70%] lg:max-w-[60%] xl:max-w-[55%] text-center gap-3 xxs:gap-2`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[56px] font-bold leading-tight">
            Pawn and Shop With Us
          </h2>
          <p className="text-sm sm:text-lg text-white/90 lg:max-w-[90%]">
            Explore our curated collection of stunning jewelry and watches,
            designed to elevate your style – visit us today!
          </p>
          <div className="mt-4 sm:mt-10 md:mt-10 2xl:mt-6 flex  justify-center items-center gap-3 xxs:gap-2 sm:gap-5 w-full">
            <Button
              className={`w-fit !py-2 md:!py-5 lg:max-w-[300px] lg:w-full`}
              variant={"outlined"}
              onClick={handleRedirect}
            >
              Visit Now
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VisitUs;
