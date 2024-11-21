import { motion } from "framer-motion";
import aiWaitingGif from "../../../../../project-assets/landing/waiting.webm";
import MyButton from "../../../reusables/MyButton";
import MyInput from "../../../reusables/MyInput";

export default function Waiting({
  setMode,
  setQuestionData,
  questionData,
  handleSendQuestion,
}) {
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
            {"Waiting for a question...".split("").map((char, index) => (
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
            <motion.div
              initial={{ y: 40, z: 20, opacity: 0 }}
              animate={{ opacity: 1, y: 0, z: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              exit={{ y: 40, z: 20, opacity: 0 }}
            >
              <MyInput
                value={questionData.text}
                onChange={(e) =>
                  setQuestionData({ ...questionData, text: e.target.value })
                }
                placeholder={"Ask something..."}
                className={
                  "bg-[#000] rounded-xl w-[450px] h-[50px] px-[15px] py-[30px] text-2xl"
                }
              />
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
                children={<span className="text-[20px]">Submit</span>}
                className={
                  "min-w-[200px] buttons hover:bg-[#77A9E8] text-[1.3em] hover:shadow-[0_0_50px_#77A9E8] px-[43px] py-[19px] mb-auto lg:mb-0 backdrop-blur-[10px]"
                }
                variant=""
                onClick={() => {
                  handleSendQuestion();
                  setMode("thinking");
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
