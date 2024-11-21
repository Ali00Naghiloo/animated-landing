import React, { lazy, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextRevealByWord } from "./Text";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const FillingText = () => {
  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll(ref);
  const y = useParallax(scrollYProgress, 300);

  const imageOne = lazy(() =>
    import("../../../../project-assets/landing/text-section/blockchain.svg")
  );

  return (
    <div
      ref={ref}
      style={{ y }}
      className="z-10 flex min-h-64 items-center justify-center pt-[100px] rounded-lg bg-black"
    >
      <motion.div style={{ opacity: scrollYProgress }} className="bg-white">
        <img src={imageOne} alt="" />
        sdasdas
      </motion.div>
      <TextRevealByWord text="VAI OS is a secure Web3 AI operating system built to be your Life CoPilot. It simplifies the way you approach your work, health, and more, allowing you to focus on what matters most." />
    </div>
  );
};

export default FillingText;
