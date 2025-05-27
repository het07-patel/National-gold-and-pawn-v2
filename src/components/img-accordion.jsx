"use client";
import Image from "next/image";
import { useState } from "react";
import { CirclePlus, CircleMinus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import goldenChain from "@/assets/images/what-we-buy/golden-chain.webp";
import barConcept from "@/assets/images/what-we-buy/bar-concept.webp";
import computerProcessor from "@/assets/images/what-we-buy/computer-processor.webp";
import gamingControllers from "@/assets/images/what-we-buy/gaming-controllers.webp";
import computers from "@/assets/images/what-we-buy/computers.webp";
import guitar from "@/assets/images/what-we-buy/guitar.webp";
import sportingGoods from "@/assets/images/what-we-buy/sporting-goods.webp";
import mechanicalTools from "@/assets/images/what-we-buy/mechanical-tools.webp";
import music from "@/assets/images/what-we-buy/music.webp";

const data = [
  {
    title: "Jewelry",
    desc: [
      "Get top value for your gold, silver, and precious gems. We offer fair appraisals and instant cash.",
    ],
    img: goldenChain,
    titleAttr: "National Gold and Pawn | Gold Chain",
    altAttr: "National Gold and Pawn | Gold Chain",
  },
  {
    title: "Large Electronics",
    desc: [
      "Sell your large electronics for competitive prices. Fast, easy transactions and trusted service.",
    ],
    img: barConcept,
    titleAttr: "National Gold and Pawn | Electronics",
    altAttr: "National Gold and Pawn | Electronics",
  },
  {
    title: "Electronics",
    desc: [
      "Bring in your phones, tablets, and gadgets for quick cash offers and expert evaluations.",
    ],
    img: computerProcessor,
    titleAttr: "National Gold and Pawn | Electronics",
    altAttr: "National Gold and Pawn | Electronics",
  },
  {
    title: "Video Games",
    desc: [
      "Trade in your video games and consoles for fair prices and fast cash.",
    ],
    img: gamingControllers,
    titleAttr: "National Gold and Pawn | Video Games",
    altAttr: "National Gold and Pawn | Video Games",
  },
  {
    title: "Computers",
    desc: [
      "Sell or pawn your laptops and desktops with confidence, and get the best value today.",
    ],
    img: computers,
    titleAttr: "National Gold and Pawn | Computers",
    altAttr: "National Gold and Pawn | Computers",
  },
  {
    title: "Musical Equipment",
    desc: [
      "Whether instruments or gear, we offer fair prices for all your musical equipment.",
    ],
    img: guitar,
    titleAttr: "National Gold and Pawn | Musical Equipment",
    altAttr: "National Gold and Pawn | Musical Equipment",
  },
  {
    title: "Sporting Goods",
    desc: [
      "Turn your gently used sporting goods into cash with quick appraisals and offers.",
    ],
    img: sportingGoods,
    titleAttr: "National Gold and Pawn | Sporting Goods",
    altAttr: "National Gold and Pawn | Sporting Goods",
  },
  {
    title: "Tools",
    desc: [
      "Sell your tools for top dollar – we value quality equipment and offer fair cash prices.",
    ],
    img: mechanicalTools,
    titleAttr: "National Gold and Pawn | Tools",
    altAttr: "National Gold and Pawn | Tools",
  },
  {
    title: "Sports Memorabilia",
    desc: [
      "Get great prices for your rare sports collectibles and memorabilia from trusted experts.",
    ],
    img: goldenChain,
    titleAttr: "National Gold and Pawn | Sports Memorabilia",
    altAttr: "National Gold and Pawn | Sports Memorabilia",
  },
  {
    title: "Movies and Music",
    desc: [
      "Sell your DVDs, Blu-rays, and vinyl collections for cash at competitive rates.",
    ],
    img: music,
    titleAttr: "National Gold and Pawn | Movies and Music",
    altAttr: "National Gold and Pawn | Movies and Music",
  },
];

const AccordionWithImage = () => {
  const [openAccordion, setOpenAccordion] = useState(data[0].title);

  const handleAccordionToggle = (itemTitle) => {
    setOpenAccordion((prevOpen) => (prevOpen === itemTitle ? null : itemTitle));
  };

  const activeAccordion = data.find((item) => item.title === openAccordion);

  return (
    <section className="w-full lg:w-[95%] max-w-[1800px] mx-auto px-4 py-8 lg:px-2 2xl:px-8">
      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* Main Image Container - Only visible on laptop and larger screens */}
        <motion.div
          key={activeAccordion?.title}
          transition={{ duration: 0.3, type: "tween" }}
          exit={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          className="hidden lg:flex lg:w-1/3 justify-center items-start h-full sticky top-5"
        >
          {activeAccordion?.img && (
            <Image
              priority
              width={400}
              height={400}
              src={activeAccordion?.img}
              alt={activeAccordion?.title}
              className="w-full h-auto object-contain shadow-lg"
            />
          )}
        </motion.div>

        {/* Accordion Container */}
        <div className="w-full lg:w-2/3 space-y-4">
          {data.map((item) => (
            <motion.div
              whileTap={{ scale: 0.98 }}
              key={`accordion-${item.title}`}
              onClick={() => handleAccordionToggle(item.title)}
              className={`cursor-pointer border-b-2 pb-4 border-white/10 transition-colors hover:border-white/30`}
            >
              <div className="flex items-center gap-4 px-2 lg:px-4 lg:py-2 2xl:py-4">
                {openAccordion === item.title ? (
                  <CircleMinus color="var(--lightgold)" size={"1.5em"} />
                ) : (
                  <CirclePlus color="var(--lightgold)" size={"1.5em"} />
                )}
                <h3 className="text-lg sm:text-xl lg:text-lg 2xl:text-xl">
                  {item.title}
                </h3>
              </div>

              <AnimatePresence>
                {openAccordion === item.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      transition: { duration: 0.3 },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: { duration: 0.2 },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="lg:mt-2 2xl:mt-4 space-y-2 text-sm sm:text-base text-white/60 font-light lg:ml-[3.4em]">
                      {item.desc.map((description, index) => (
                        <p key={`accordion-desc-${index}-${item.title}`}>
                          {description}
                        </p>
                      ))}

                      {/* Mobile Image - Only visible below laptop screen */}
                      <div className="lg:hidden mt-4 flex justify-center">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                          >
                            <Image
                              width={400}
                              height={400}
                              src={item.img}
                              alt={item.altAttr}
                              title={item.titleAttr}
                              className="w-full max-h-[350px] md:max-h-[500px] h-auto object-contain shadow-lg"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccordionWithImage;
