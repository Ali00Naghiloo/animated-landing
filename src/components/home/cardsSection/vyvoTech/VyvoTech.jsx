import { useState } from "react";
import Tech from "../../../../../project-assets/homeImg/Vyvo_Tech.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function VyvoTech() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => {
        navigate("/tech");
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{
        background:
          "linear-gradient(180deg, rgba(119, 169, 232, 0) 0%, rgba(119, 169, 232, 0) 100%)",
        scale: 1,
      }}
      animate={{
        background: isHovered
          ? "linear-gradient(180deg, rgba(119, 169, 232, 0.4) 0%, rgba(119, 169, 232, 0) 100%)"
          : "linear-gradient(180deg, rgba(119, 169, 232, 0) 0%, rgba(119, 169, 232, 0) 100%)",
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        borderRadius: "18px",
        border: "1.5px solid #77A9E8",
        backdropFilter: "blur(78.8px)",
      }}
    >
      <img className="w-full p-4" src={Tech} alt="Vyvo Tech" />
      <p
        className="absolute inset-0 flex items-end
         xl:text-2xl lg:text-xl lg:pb-10 md:pb-24 md:text-5xl sm:text-3xl
      pb-12 justify-center text-white text-2xl font-bold "
      >
        Vyvo Tech
      </p>
    </motion.div>
  );
}
