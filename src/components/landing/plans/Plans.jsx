import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Tick from "../../../../project-assets/icons/Tick";
import Cross from "../../../../project-assets/icons/Cross";
import MyButton from "../../reusables/MyButton";

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState("Personal");
  const pageRef = useRef();
  const inView = useInView(pageRef);

  const planTypes = ["Proffesional", "Personal"];

  const plans = [
    {
      name: "Personal",
      price: "$25",
      features: [
        { title: "Access to the App Marketplace", active: true },
        { title: "Biometric and voice recognition", active: true },
        {
          title: "Messenger Agent type: Telegram, WhatsApp (text)",
          active: true,
        },
        { title: "Usage of the OS (Read more)", active: true },
        {
          title: "Multiple voice selection and voice clone option",
          active: false,
        },
        { title: "DID phone number for the AI", active: false },
        {
          title: "Sublicense module enabled on the Hub Console",
          active: false,
        },
        { title: "Developer Program", active: false },
      ],
    },
    {
      name: "Proffesional",
      price: "$75",
      features: [
        { title: "Access to the App Marketplace", active: true },
        { title: "Biometric and voice recognition", active: true },
        {
          title: "Messenger Agent type: Telegram, WhatsApp (text)",
          active: true,
        },
        { title: "Usage of the OS (Read more)", active: true },
        {
          title: "Multiple voice selection and voice clone option",
          active: true,
        },
        { title: "DID phone number for the AI", active: true },
        {
          title: "Sublicense module enabled on the Hub Console",
          active: true,
        },
        { title: "Developer Program", active: true },
      ],
    },
  ];

  const handleChangePlanList = (mode) => {
    setSelectedPlan(null);
    setSelectedPlan(mode);
  };

  return (
    <AnimatePresence>
      {
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, ease: "easeInOut" }}
          className="w-full lg:h-screen min-h-[800px] flex flex-col justify-center gap-[50px] p-[5%]"
        >
          {/* page title */}
          <motion.div className="w-full text-center flex flex-col text-2xl lg:text-6xl">
            <span>Tailored Plans for You</span>
          </motion.div>

          {/* plan list */}
          <motion.div className="w-full flex flex-col justify-between gap-[32px]">
            {/* toggle plans */}
            <motion.div className="flex justify-center relative w-fit buttons mx-auto">
              {selectedPlan == "Personal" && (
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  exit={{ x: 0 }}
                  transition={{ ease: "linear", duration: 0.2 }}
                  className={`buttons p-3 absolute transition-all right-0 top-0 h-full w-[50%]`}
                ></motion.div>
              )}
              {selectedPlan == "Proffesional" && (
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  exit={{ x: 0 }}
                  transition={{ ease: "linear", duration: 0.2 }}
                  className={`buttons p-3 absolute transition-all left-0 top-0 h-full w-[50%]`}
                ></motion.div>
              )}
              <span
                onClick={() => handleChangePlanList("Personal")}
                className="w-[90px] text-center flex-1 p-3 cursor-pointer"
              >
                Personal
              </span>
              <span
                onClick={() => handleChangePlanList("Proffesional")}
                className="w-[90px] text-center flex-1 p-3 cursor-pointer"
              >
                Pro
              </span>
            </motion.div>

            {/* plan details */}
            {selectedPlan &&
              plans
                .filter((plan) => plan.name == selectedPlan)
                .map((plan) => (
                  <motion.div
                    key={plan.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ ease: "circIn", duration: 0.3 }}
                    className="flex flex-col items-center gap-3"
                  >
                    {/* title */}
                    <motion.div className="font-bold text-4xl relative">
                      <p>{plan.name}</p>
                      {plan.name == "Proffesional" && (
                        <motion.span
                          className="h-[32px] flex justify-center items-center absolute right-0 top-0 translate-x-[50%] translate-y-[-50%] buttons p-1 shadow shadow-[#fff]"
                          initial={{}}
                        >
                          <div className="radial-text text-[12px]">
                            <span>Most Popular</span>
                          </div>
                        </motion.span>
                      )}
                    </motion.div>
                    <motion.div className="flex gap-2 items-end">
                      <span className="text-3xl">{plan.price}</span>
                      <span className="text-[#9DA2B3] text-sm">per month</span>
                    </motion.div>

                    {/* details */}
                    <div className="flex justify-evenly gap-10 my-10">
                      <div className="lg:h-[190px] flex flex-col flex-wrap gap-5">
                        {plan.features.map((f, index) => (
                          <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.05 * index }}
                            key={f}
                            className={`flex gap-2 h-[24px] ${
                              !f.active && "opacity-50"
                            }`}
                          >
                            <div className="w-fit">
                              {f.active ? <Tick /> : <Cross />}
                            </div>
                            <span>{f.title}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* submit */}
                    <MyButton
                      variant=""
                      children={<>Try Now</>}
                      className="buttons2 px-7 py-4"
                    ></MyButton>
                  </motion.div>
                ))}
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  );
}
