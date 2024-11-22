import SmartChain from "../../../../../project-assets/homeImg/Vyvo_SmartChain.png";
import { useState } from "react";
import { motion } from "framer-motion";

export default function VyvoSmartChain() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{
        background:
          "linear-gradient(180deg, rgba(99, 85, 255, 0) 0%, rgba(99, 85, 255, 0.00) 100%)",
        scale: 1,
      }}
      animate={{
        background: isHovered
          ? "linear-gradient(180deg, rgba(99, 85, 255, 0.4) 0%, rgba(99, 85, 255, 0.00) 100%)"
          : "linear-gradient(180deg, rgba(99, 85, 255, 0) 0%, rgba(99, 85, 255, 0.00) 100%)",
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        borderRadius: "18px",
        border: "1.5px solid #2A5FDD",
        backdropFilter: "blur(78.8px)",
      }}
    >
      <img className="w-full p-4" src={SmartChain} alt="Vyvo Smart Chain" />
      <p
        className="absolute inset-0 flex items-end
         xl:text-2xl lg:text-xl lg:pb-10 md:pb-24 md:text-5xl sm:text-3xl
      pb-12 justify-center text-white text-2xl font-bold "
      >
        Vyvo Smart Chain
      </p>
    </motion.div>
  );
}
