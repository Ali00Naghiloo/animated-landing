import React, { useState } from "react";
import Ring from "../../../../../project-assets/tech/ring.png";
import Band from "../../../../../project-assets/tech/band.png";
import Watch from "../../../../../project-assets/tech/watch.png";
import { AnimatePresence, motion } from "framer-motion";

export default function TopsectionText({ item }) {
  const [animationRing, setAnimationRing] = useState("hidden");
  const [animationBand, setAnimationBand] = useState("hidden");
  const [animationWatch, setAnimationWatch] = useState("hidden");
  const variants = {
    hidden: {
      y: "70vh",
      opacity: 0,
    },
    visible: {
      y: "0px",
      opacity: 1,
    },
  };

  if (item === "Ring" && animationRing === "hidden") {
    setAnimationRing("visible");
    setAnimationBand("hidden");
    setAnimationWatch("hidden");
  }
  if (item === "Band" && animationBand === "hidden") {
    setAnimationRing("hidden");
    setAnimationBand("visible");
    setAnimationWatch("hidden");
  }
  if (item === "Watch" && animationWatch === "hidden") {
    setAnimationRing("hidden");
    setAnimationBand("hidden");
    setAnimationWatch("visible");
  }
  return (
    <div
      style={{ position: "relative" }}
      className="flex flex-col justify-center items-center"
    >
      <div
        class="h-[32vw] flex items-center justify-center flex-col 
    "
      >
        <p
          className="sm:text-[7vw] text-[13vw] leading-none"
          style={{
            background:
              "var(--Radial, radial-gradient(29.68% 46.42% at 39.06% 38.97%, #2A5FDD 0%, #77A9E8 100%))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          BioScene
        </p>

        <motion.p className="sm:text-[7vw] text-[13vw] leading-none flex flex-row">
          {item === null ? (
            <br />
          ) : (
            item &&
            item.split("").map((char, index) => (
              <motion.span
                variants={{
                  hidden: {
                    scale: 0.8,
                    y: 0,
                    opacity: 0,
                  },
                  visible: {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  },
                }}
                initial="hidden"
                animate="visible"
                exit={{
                  speed: index * 0.1,
                  opacity: 0,
                  scale: 0.2,
                }}
                transition={{ delay: index * 0.1, duration: 0.1 }}
                key={index}
              >
                {char}
              </motion.span>
            ))
          )}
        </motion.p>
      </div>
      <motion.img
        style={{
          maxWidth: "308px",
          minWidth: "90px",
          width: "50%",
          position: "absolute",
          right: 0,
          top: 0,
        }}
        initial={{
          y: "70vh",
          opacity: 0,
        }}
        variants={variants}
        animate={animationRing}
        transition={{
          duration: 1,
          ease: animationRing === "hidden" ? "easeIn" : "easeOut",
        }}
        src={Ring}
      />
      <motion.img
        style={{
          maxWidth: "308px",
          minWidth: "90px",
          width: "50%",
          position: "absolute",
          right: 0,
          top: 0,
        }}
        initial={{
          y: "70vh",
          opacity: 0,
        }}
        variants={variants}
        animate={animationBand}
        transition={{
          duration: 1,
          ease: animationBand === "hidden" ? "easeIn" : "easeOut",
        }}
        src={Band}
      />
      <motion.img
        style={{
          maxWidth: "308px",
          minWidth: "90px",
          width: "50%",
          position: "absolute",
          right: 0,
          top: 0,
        }}
        initial={{
          y: "70vh",
          opacity: 0,
        }}
        variants={variants}
        animate={animationWatch}
        transition={{
          duration: 1,
          ease: animationWatch === "hidden" ? "easeIn" : "easeOut",
        }}
        src={Watch}
      />
    </div>
  );
}
