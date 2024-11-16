import React from "react";
import { motion } from "framer-motion";
import userIcon from "../../../../project-assets/landing/features/user-icon.png";
import cpuIcon from "../../../../project-assets/landing/features/cpu-icon.png";
import blockchainIcon from "../../../../project-assets/landing/features/blockchain-icon.png";
import background from "../../../../project-assets/black-back.gif";

export default function Features() {
  const featureTitles = [
    { key: "cpu", title: "Advanced AI", icon: cpuIcon },
    { key: "user", title: "Proactive Outreach", icon: userIcon },
    { key: "blockchain", title: "Built on Blockchain", icon: blockchainIcon },
  ];

  const descriptions = [
    {
      key: "cpu",
      name: "Adaptive AI Technology",
      description:
        "Continuously learns from your interactions and data. Provides personalized recommendations. Initiates conversations based on real time data received.",
    },
    {
      name: "Interactive & Flexible Communication",
      description:
        "Developers have the tools to create custom features and extensions within VAI OS. Marketplace for extensions developed.",
    },
    {
      name: "Interactive & Flexible Communication",
      description:
        "Developers have the tools to create custom features and extensions within VAI OS. Marketplace for extensions developed.",
    },
    {
      name: "Interactive & Flexible Communication",
      description:
        "Developers have the tools to create custom features and extensions within VAI OS. Marketplace for extensions developed.",
    },
    {
      name: "Interactive & Flexible Communication",
      description:
        "Developers have the tools to create custom features and extensions within VAI OS. Marketplace for extensions developed.",
    },
    {
      name: "Interactive & Flexible Communication",
      description:
        "Developers have the tools to create custom features and extensions within VAI OS. Marketplace for extensions developed.",
    },
    {
      name: "Interactive & Flexible Communication",
      description:
        "Developers have the tools to create custom features and extensions within VAI OS. Marketplace for extensions developed.",
    },
    {
      name: "Interactive & Flexible Communication",
      description:
        "Developers have the tools to create custom features and extensions within VAI OS. Marketplace for extensions developed.",
    },
    {
      name: "Interactive & Flexible Communication",
      description:
        "Developers have the tools to create custom features and extensions within VAI OS. Marketplace for extensions developed.",
    },
  ];

  return (
    <>
      <div className="w-full h-screen min-h-[900px] flex flex-col gap-[100px] relative py-[5%] px-[5%]">
        {/* title */}
        <motion.div className="w-full flex flex-col text-6xl text-center">
          <motion.div className="radial-text">A Companion That</motion.div>
          <motion.div className="">Anticipates Your Needs</motion.div>
        </motion.div>

        {/* scrolling features */}
        <motion.div className="w-full h-full flex items-start justify-between flex-1">
          {/* titles */}
          <motion.div className="flex flex-col justify-center gap-6">
            <motion.span className="mb-6">Features of VAI</motion.span>
            {featureTitles.map((title) => (
              <motion.div key={title.key} className="flex items-center gap-3">
                <div className="w-[48px] h-[48px] bg-white rounded-full p-3 flex justify-center items-center">
                  <img src={title.icon} className="w-full h-fllu" alt="" />
                </div>
                <span>{title.title}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* descriptions */}
          <motion.div className="flex-[0.8] h-[400px] overflow-auto hide-scroll flex flex-col gap-[80px]">
            {descriptions.map((d) => (
              <motion.div
                className="w-full flex justify-between gap-10"
                key={d.name}
              >
                <motion.div className="text-2xl">{d.name}</motion.div>
                <motion.div className="w-[420px] text-[#9DA2B3]">
                  {d.description}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="w-full h-full absolute left-0 top-0 z-[-1]">
          <img src={background} alt="" className="w-full h-full z-0" />
        </div>
      </div>
    </>
  );
}
