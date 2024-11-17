import React from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const faqList = [
    {
      title: "What is VAI OS?",
      description:
        "VAI OS is a secure Web3 AI operating system designed as your Life CoPilot, providing personalized assistance and insights to simplify your daily life.",
    },
    {
      title: "What are the main functions of VAI OS?",
      description:
        "VAI OS is a secure Web3 AI operating system designed as your Life CoPilot, providing personalized assistance and insights to simplify your daily life.",
    },
    {
      title: "How does VAI OS use data for personalization?",
      description:
        "VAI OS is a secure Web3 AI operating system designed as your Life CoPilot, providing personalized assistance and insights to simplify your daily life.",
    },
    {
      title: "Is it safe to use VAI OS in terms of data privacy?",
      description:
        "VAI OS is a secure Web3 AI operating system designed as your Life CoPilot, providing personalized assistance and insights to simplify your daily life.",
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {/* title */}
      <motion.div className="text-6xl text-center">
        <p>Frequently</p> Asked Questions
      </motion.div>

      {/* faq */}
      <motion.div className="flex flex-col items-center gap-[55px] my-5">
        {faqList.map((faq, index) => (
          <motion.div key={index} className="px-7 py-3 lg:w-[70%]">
            <span className="text-3xl">{faq.title}</span>
            <p className="opacity-60">{faq.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="w-full flex justify-center mt-10">
        <div className="buttons2 px-7 py-4 rounded-2xl">Vyvo Support</div>
      </div>
    </div>
  );
}
