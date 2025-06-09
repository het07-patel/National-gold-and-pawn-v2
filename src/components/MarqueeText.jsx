"use client";
import { motion } from "framer-motion";
const MarqueeText = ({
  text,
  speed = 10,
  isAbsolute = true,
  MarqueeClassName = "",
}) => {
  const texts = Array.isArray(text) ? text : [text];

  return isAbsolute ? (
    <div
      className={`w-full overflow-hidden py-4 absolute left-0 ${MarqueeClassName}`}
    >
      <motion.div
        className="flex whitespace-nowrap opacity-20 uppercase"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="mx-4 gap-4 flex">
            {texts.map((t, index) => (
              <span key={index} className="mx-4">
                {t}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  ) : (
    <div className="w-full overflow-hidden ">
      <motion.div
        className="flex whitespace-nowrap text-xl md:text-2xl xl:text-3xl text-basewhite"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="mx-4 gap-4 flex">
            {texts.map((t, index) => (
              <span
                key={index}
                className={`mx-4 ${MarqueeClassName}`}
              >
                {t}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeText;
