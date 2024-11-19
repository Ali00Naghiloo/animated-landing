import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import userIcon from "../../../../project-assets/landing/features/user-icon.png";
import cpuIcon from "../../../../project-assets/landing/features/cpu-icon.png";
import blockchainIcon from "../../../../project-assets/landing/features/blockchain-icon.png";
import background from "../../../../project-assets/black-back.gif";
import { useWindowSize } from "@uidotdev/usehooks";
import DownLined from "../../../../project-assets/icons/DownLined";

export default function MobileViewFeatures({ featureTitles, descriptions }) {
  const [openFeatures, setOpenFeatures] = useState("");
  const ref = useRef();
  const inView = useInView(ref);

  return (
    <>
      <div
        ref={ref}
        className="w-full max-w-[1440px] mx-auto overflow-auto min-h-screen flex flex-col gap-[100px] relative py-[5%] px-[5%]"
      >
        {/* title */}
        <motion.div className="w-full flex flex-col text-2xl lg:text-6xl text-center">
          <motion.div className="radial-text">A Companion That</motion.div>
          <motion.div className="">Anticipates Your Needs</motion.div>
        </motion.div>

        {/* scrolling features */}
        <motion.div className="w-full h-full flex items-start justify-between flex-1">
          {/* titles */}
          <motion.div className="w-full flex flex-col justify-center lg:gap-6">
            <motion.span className="mb-6">Features of VAI</motion.span>
            {inView &&
              featureTitles.map((title) => (
                <motion.div className="w-full flex flex-col" key={title.key}>
                  <motion.div
                    onClick={() =>
                      openFeatures !== title.key
                        ? setOpenFeatures(title.key)
                        : setOpenFeatures(null)
                    }
                    className="w-full flex justify-between items-center gap-3 radial-text border-y border-y-[rgba(38,38,38)] py-5"
                  >
                    <div className="w-[48px] h-[48px] bg-white rounded-full p-3 flex justify-center items-center">
                      <img src={title.icon} className="w-full h-fllu" alt="" />
                    </div>

                    <span className="mx-auto lg:m-0">{title.title}</span>

                    {openFeatures && (
                      <motion.div animate={{ rotate: 180 }}>
                        <DownLined />
                      </motion.div>
                    )}
                  </motion.div>

                  {openFeatures == title?.key &&
                    descriptions.map((des, index) => (
                      <motion.div
                        transition={{ delay: 0.1 * index }}
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ display: "none" }}
                        className="flex flex-col gap-[11px] py-5"
                        key={des.key}
                      >
                        <span className="font-bold">{des.name}</span>
                        <span className="text-[#9DA2B3]">
                          {des.description}
                        </span>
                      </motion.div>
                    ))}
                </motion.div>
              ))}
          </motion.div>
        </motion.div>

        <div className="w-screen h-screen absolute top-0 z-[-1] translate-x-[-50%]">
          <img src={background} alt="" className="w-full" />
        </div>
      </div>
    </>
  );
}
