import { motion } from "framer-motion";
import aiListeningGif from "../../../../../project-assets/landing/listening.webm";
import MyButton from "../../../reusables/MyButton";

export default function Listening({ setMode }) {
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
            <source src={aiListeningGif} />
          </motion.video>
        </motion.div>

        {/* texts */}
        <div className="w-full h-[40%] flex flex-col items-center lg:justify-between gap-8">
          {/* ai current mode */}
          <motion.div className="text-[#77A9E8] w-full text-center">
            {"Listening...".split("").map((char, index) => (
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

          <motion.div className="flex flex-col items-center w-full lg:gap-5">
            {/* title */}
            <motion.div className="flex gap-2 lg:my-auto">
              {"Experience the Vyvo AI".split(" ").map((t, index) => (
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

            {/* descriptions */}
            <motion.div
              className="font-light text-[0.8em] lg:text-[1em] text-[rgba(255,255,255,0.6)] lg:max-w-[30%] mx-auto lg:mt-auto text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0, z: -100, y: 20 }}
            >
              An AI with an ever-growing, adaptive ability to anticipate your
              needs. Your Life CoPilot, here to assist you in realizing your
              full potential.
            </motion.div>
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
                children={<span className="text-[20px]">Press To Start</span>}
                className={
                  "buttons hover:bg-[#77A9E8] text-[1.3em] hover:shadow-[0_0_50px_#77A9E8] px-[43px] py-[19px] mb-auto lg:mb-0 backdrop-blur-[10px]"
                }
                variant=""
                onClick={() => setMode("waiting")}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
