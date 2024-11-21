import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQ() {
  const [openedFaq, setOpenedFaq] = useState([]);

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

  const handleSetOpenedFaq = (title) => {
    !openedFaq.includes(title)
      ? setOpenedFaq([...openedFaq, title])
      : setOpenedFaq(openedFaq.filter((i) => i !== title));
  };

  return (
    <AnimatePresence>
      <div className="w-full lg:h-screen flex flex-col justify-center items-center py-[100px]">
        {/* title */}
        <motion.div className="text-2xl lg:text-6xl text-center">
          <p>Frequently</p> Asked Questions
        </motion.div>

        {/* faq */}
        <motion.div className="w-full flex flex-col items-center gap-[55px] my-5">
          {faqList.map((faq, index) => (
            <motion.div
              onClick={() => handleSetOpenedFaq(faq.title)}
              key={index}
              className="w-full px-7 py-3 lg:w-[60%] border-l transition-all border-l-[#262626] hover:border-[#77A9E8]"
            >
              <span className="text-3xl">{faq.title}</span>
              {openedFaq.includes(faq.title) && (
                <motion.p
                  initial={{ y: 30, opacity: 0.1 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.4 }}
                  className="w-full pt-[25px] !opacity-60"
                >
                  {faq.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="w-full flex justify-center mt-10">
          <div className="buttons2 px-7 py-4 rounded-2xl">Vyvo Support</div>
        </div>
      </div>
    </AnimatePresence>
  );
}
