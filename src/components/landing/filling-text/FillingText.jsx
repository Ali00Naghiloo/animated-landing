import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { TextRevealByWord } from "./Text";
const FillingText = () => {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center rounded-lg bg-black">
      <TextRevealByWord text="VAI OS is a secure Web3 AI operating system built to be your Life CoPilot. It simplifies the way you approach your work, health, and more, allowing you to focus on what matters most." />
    </div>
  );
};

export default FillingText;
