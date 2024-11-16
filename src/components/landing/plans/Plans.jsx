import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Plans() {
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

  return (
    <AnimatePresence>
      <motion.div className="w-full h-screen min-h-[800px] flex flex-col gap-[50px] p-[5%]">
        {/* page title */}
        <motion.div className="w-full text-center flex flex-col text-6xl">
          <span>Tailored Plans for Your </span>
          <span className="radial-text">Life CoPilot</span>
        </motion.div>

        {/* plan list */}
        <motion.div className="w-full flex flex-col">
          {/* toggle plans */}
          <motion.div className="flex justify-center w-fit buttons mx-auto">
            <span className="w-[90px] text-center flex-1 p-3">Personal</span>
            <span className="w-[90px] text-center flex-1 p-3">Pro</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
