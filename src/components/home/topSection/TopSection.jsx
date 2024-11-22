import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../../../project-assets/homeImg/Vyvo_Logo.svg";
import Headers from "../../landing/chat/Header";
export default function TopSection() {
  return (
    <div
      className=" py-6 lg:px-16  px-10 flex items-center flex-col
    "
      style={{ height: "55vh", width: "100vw" }}
    >
      <Headers />
      <div
        style={{ height: "55vh", width: "100vw" }}
        className="flex items-center justify-center flex-col"
      >
        <motion.img
          initial={{
            y: "-50px",
            opacity: 0,
            scale: 1.5,
            filter: "blur(20px)",
          }}
          animate={{
            y: "0",
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="w-8/12 lg:w-4/12"
          src={logo}
        />
      </div>
    </div>
  );
}
