import React, { useState } from "react";
import { motion } from "framer-motion";
import userIcon from "../../../../project-assets/landing/features/user-icon.png";
import cpuIcon from "../../../../project-assets/landing/features/cpu-icon.png";
import blockchainIcon from "../../../../project-assets/landing/features/blockchain-icon.png";
import background from "../../../../project-assets/black-back.gif";
import { useWindowSize } from "@uidotdev/usehooks";
import MobileViewFeatures from "./MobileViewFeatures";

export default function Features() {
  const { width } = useWindowSize();
  const [currentSection, setCurrentSection] = useState("cpu");

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
      name: "Built For Developers",
      description:
        "Developers have the tools to create custom features and extensions within VAI OS. Marketplace for extensions developed.",
    },
    {
      key: "user",
      name: "Health Monitoring",
      description:
        "Integrated with Vyvo Tech, such as the BioSense Ring. Monitors and analyzes real time health data. Reaches out with alerts or suggestions based on the data received.",
    },
    {
      name: "Personalized Suggestions",
      description:
        "Analyzes your data to learn more about you and make recommendations tailored to you. Personalized health advice to fit your needs.",
    },
    {
      name: "Productivity Booster",
      description:
        "Helps you work by assisting with writing emails, reports, and much more. Intuitive calendar and task management, keeping you prepared and ready to go.",
    },
    {
      key: "blockchain",
      name: "Blockchain Security",
      description:
        "Built on Vyvo Smart Chain for enhanced privacy and security. Enables decentralized data management. Keeps your personal and health information safe.",
    },
    {
      name: "Ownership of Data",
      description:
        "Ensures your data remains yours and under your control. Does not share your interactions or data with others. Provides peace of mind with private and secure management.",
    },
  ];

  const handleScrollToDiv = (key) => {
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (width > 990) {
    return (
      <>
        <div className="w-full max-w-[1440px] mx-auto h-screen min-h-[900px] flex flex-col gap-[100px] relative py-[5%] px-[5%]">
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
                  <motion.div
                    onClick={() => handleScrollToDiv(title.key)}
                    className={`w-[48px] h-[48px] rounded-full p-3 flex justify-center items-center ${
                      currentSection == title.key ? "radia-text" : "bg-white"
                    }`}
                  >
                    <img src={title.icon} className="w-full h-fllu" alt="" />
                  </motion.div>
                  {currentSection == title.key && (
                    <motion.span
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                    >
                      {title.title}
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* descriptions */}
            <motion.div className="flex-[0.8] h-[400px] overflow-auto hide-scroll flex flex-col gap-[80px]">
              {descriptions.map((d) => (
                <motion.div
                  id={d.key}
                  // ref={d.key ?  : null}
                  className="w-full flex justify-between gap-10"
                  key={d.name}
                >
                  <motion.div className="text-2xl">{d.name}</motion.div>
                  <motion.div className="w-[420px] text-[#9DA2B3] flex flex-wrap gap-1">
                    {d.description.split(".").map((des) => (
                      <motion.span key={des} className="hover:radial-text">
                        {des}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="w-screen h-full absolute left-[50%] top-0 z-[-1] translate-x-[-50%]">
            <img src={background} alt="" className="w-full" />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <MobileViewFeatures
        featureTitles={featureTitles}
        descriptions={descriptions}
      />
    );
  }
}
