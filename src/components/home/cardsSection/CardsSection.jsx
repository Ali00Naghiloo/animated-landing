import React from "react";
import VyvoTech from "./vyvoTech/VyvoTech";
import VyvoSmartChain from "./vyvoSmartChain/VyvoSmartChain";
import VyvoSocialfi from "./vyvoSocialfi/VyvoSocialfi";
import { AnimatePresence, motion } from "framer-motion";
import VaiOS from "./vaiOS/VaiOS";

export default function CardsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
      whileInView={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        delay: 0.1,
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
      }}
      viewport={{
        amount: 0.1,
      }}
      className="flex flex-row justify-center flex-wrap gap-5 px-5 pb-[150px]"
    >
      <VaiOS />
      <VyvoSmartChain />
      <VyvoTech />
      <VyvoSocialfi />
    </motion.div>
  );
}
