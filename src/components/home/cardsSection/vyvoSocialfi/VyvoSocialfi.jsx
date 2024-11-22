import { useState } from "react";
import SocialFi from "../../../../../project-assets/homeImg/Vyvo_SocialFi.png";
import { motion } from "framer-motion";

export default function VyvoSocialfi() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{
        background:
          "linear-gradient(180deg, rgba(255, 0, 102, 0) 0%, rgba(255, 0, 102, 0.00) 100%)",
        scale: 1,
      }}
      animate={{
        background: isHovered
          ? "linear-gradient(180deg, rgba(255, 0, 102, 0.36) 0%, rgba(255, 0, 102, 0) 100%)"
          : "linear-gradient(180deg, rgba(255, 0, 102, 0) 0%, rgba(255, 0, 102, 0.00) 100%)",
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        borderRadius: "18px",
        border: "1.5px solid #F06",
        backdropFilter: "blur(78.8px)",
      }}
    >
      <img className="w-full p-4" src={SocialFi} alt="Vyvo SocialFi" />
      <p
        className="absolute inset-0 flex items-end
         xl:text-2xl lg:text-xl lg:pb-10 md:pb-24 md:text-5xl sm:text-3xl
      pb-12 justify-center text-white text-2xl font-bold "
      >
        Vyvo SocialFi
      </p>
    </motion.div>
  );
}
