import { motion } from "framer-motion";
import aiWaitingGif from "../../../../../project-assets/landing/waiting.webm";
import MyButton from "../../../reusables/MyButton";
import MyInput from "../../../reusables/MyInput";
import ThinkingLoadingSvg from "../../../../../project-assets/icons/ThinkingLoadingSvg";

export default function Thinking({ setMode, questionData }) {
  return (
    <>
      <motion.div className="w-full h-full flex flex-col lg:gap-10 items-center justify-between relative">
        {/* gif */}
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ z: -20, opacity: 0 }}
          className="w-[380px] h-[20%] lg:h-[300px] flex justify-center items-center pointer-events-none my-auto z-0"
        >
          <motion.video
            autoPlay
            muted
            loop
            controls={false}
            className="w-[500px] h-[450px] lg:h-[580px] object-cover z-0"
          >
            <source src={aiWaitingGif} />
          </motion.video>
        </motion.div>

        {/* texts */}
        <div className="w-full h-[40%] flex flex-col items-center lg:justify-between gap-8">
          {/* ai current mode */}
          <motion.div className="text-[#77A9E8] w-full text-center">
            {"Thinking...".split("").map((char, index) => (
              <motion.span
                initial={{
                  scale: 0.8,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  speed: index * 0.1,
                  opacity: 0,
                  scale: 0.2,
                }}
                transition={{ delay: index * 0.05, duration: 0.1 }}
                key={index}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div className="flex items-center justify-center w-full gap-2">
            {questionData?.text?.split(" ").map((t, index) => (
              <motion.span
                className="text-center radial-text text-2xl lg:text-5xl"
                key={t}
                initial={{ z: 40, y: 15, opacity: 0 }}
                animate={{ z: 0, y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                exit={{ z: 40, y: 15, opacity: 0 }}
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          {/* button */}
          <motion.div className="w-full flex justify-center z-10 text-xl">
            <motion.div
              variants={{
                animate: { opacity: 0, z: -100 },
                initial: {
                  opacity: 1,
                  z: 0,
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
              initial={"animate"}
              animate={"initial"}
              transition={"transition"}
              exit={{ opacity: 0, z: -100 }}
            >
              <MyButton
                children={
                  <div className="flex justify-center gap-3 animate-pulse">
                    {[1, 2, 3].map((_, index) => (
                      <span>
                        <ThinkingLoadingSvg key={index} />
                      </span>
                    ))}
                  </div>
                }
                className={
                  "min-w-[200px] buttons text-[1.3em] px-[43px] py-[19px] mb-auto lg:mb-0 backdrop-blur-[10px]"
                }
                variant=""
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
