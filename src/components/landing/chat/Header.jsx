import React, { useState } from "react";
import logoOne from "../../../../project-assets/logo.png";
import logoTow from "../../../../project-assets/life-copilot-logo.png";
import MyButton from "../../reusables/MyButton";
import { motion } from "framer-motion";
import MenuIcon from "../../../../project-assets/icons/Menu.jsx";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const { width } = useWindowSize();

  const links = [
    { title: "Home", path: "/", children: null },
    {
      title: "VAI OS",
      path: "/",
      children: ["Tokenomics Roadmap", "Tokenomics Roadmap", "Using Agents"],
    },
    {
      title: "Vyvo Tech",
      path: "/",
      children: ["BioSense Ring", "BioSense Band", "BioSense Watch"],
    },
    { title: "Vyvo Smart Chain", path: "/" },
    { title: "SocialFi", path: "/" },
    { title: "About us", path: "/", children: ["News", "Support"] },
    { title: "Store", path: "/" },
  ];

  if (width > 990) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full flex justify-center items-center z-10"
        >
          {/* logos */}
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="flex h-[30px]"
          >
            <img src={logoOne} alt="" className="h-full" />
            <img src={logoTow} alt="" className="h-[50%]" />
          </motion.div>

          {/* links */}
          <div className="flex gap-4 mx-auto translate-x-[-30px]">
            <div className="flex gap-[30px] rounded-xl px-[30px] py-[16px] buttons">
              {links.map((i) => (
                <div
                  key={i.title}
                  onMouseOver={() => setHoveredMenu(i.title)}
                  onMouseLeave={() => setHoveredMenu(null)}
                  className="hover:shadow shadow-[0,0,10px,#77A9E8] relative"
                >
                  <span className="w-full h-full hover:radial-text">
                    {i.title}
                  </span>

                  {hoveredMenu == i.title && i.children && (
                    <motion.div
                      className="flex flex-col items-center justify-center gap-3 bg-[#00000080] border border-[#262626] absolute left-0 translate-x-[-50%] translate-y-[-100%] rounded-[20px] p-[16px]"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                    >
                      {i.children.map((child, index) => (
                        <motion.div
                          key={index}
                          className="text-white flex gap-1 min-w-[170px]"
                        >
                          {child.split(" ").map((v, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.03 * index }}
                            >
                              {v}
                            </motion.div>
                          ))}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* auth button */}
          <div>
            <MyButton
              children={
                <div className="w-full min-w-fit text-white flex items-center gap-2">
                  Try Now
                </div>
              }
              onClick={() => {
                console.log("logged");
              }}
              variant=""
              className={"rounded-2xl buttons px[30px] py-[12px]"}
            />
          </div>
        </motion.div>
      </>
    );
  } else {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full flex justify-between items-center z-10"
        >
          {/* logos */}
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="flex h-[30px]"
          >
            <img src={logoOne} alt="" className="h-full" />
            <img src={logoTow} alt="" className="h-[50%]" />
          </motion.div>

          {/* auth button */}
          <div>
            <MyButton
              children={
                <div className="w-full min-w-fit text-white flex items-center gap-2">
                  <MenuIcon />
                </div>
              }
              onClick={() => {
                console.log("logged");
              }}
              variant=""
              className={"rounded-2xl buttons px[30px] py-[12px]"}
            />
          </div>
        </motion.div>
      </>
    );
  }
}
