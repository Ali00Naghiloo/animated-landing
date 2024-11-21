import { motion } from "framer-motion";
import aiSpeakingGif from "../../../../../project-assets/landing/speaking.webm";
import MyButton from "../../../reusables/MyButton";
import MyInput from "../../../reusables/MyInput";
import { useState } from "react";
import OpenModal from "../../../../../project-assets/icons/OpenModal";
import playIcon from "../../../../../project-assets/landing/play.png";
import AnswerModal from "../AnswerModal";

export default function Waiting({ setMode, aiResponse }) {
  // ai voice response
  const { voice } = aiResponse;
  const [showModal, setShowModal] = useState(false);
  const voiceLines = Array.from({ length: 40 });

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
            <source src={aiSpeakingGif} />
          </motion.video>
        </motion.div>

        {/* texts */}
        <div className="w-full h-[40%] flex flex-col items-center lg:justify-end gap-8">
          <motion.div className="flex gap-2 items-center justify-center w-full lg:gap-5">
            {aiResponse?.text?.split(" ").map((t, index) => (
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
              <motion.div className="flex flex-col items-center gap-10">
                <motion.div className="h-[55px] flex gap-5">
                  {/* voice */}
                  <motion.div className="flex gap-2 flex-1 p-1 buttons">
                    <motion.div className="p-4 flex items-center justify-center buttons !rounded-[16px]">
                      <img src={playIcon} />
                    </motion.div>
                    <div className="flex h-full flex-col gap-[3px]">
                      {/* lines */}
                      <div className="flex items-end gap-[1.5px] overflow-hidden flex-[0.5] w-full">
                        {voiceLines.map((_, index) => (
                          <div
                            key={index}
                            className="w-[2.5px] max-w-[2.5px] max-h-[100%] bg-[#77A9E8] rounded"
                            style={{ height: Math.random() * 30 }}
                          ></div>
                        ))}
                      </div>
                      <div className="flex-[0.5] text-sm opacity-60">00:21</div>
                    </div>
                  </motion.div>

                  {/* open modal */}
                  <motion.div
                    onClick={() => setShowModal(!showModal)}
                    className="px-[20px] cursor-pointer h-full buttons flex justify-center items-center"
                  >
                    <OpenModal />
                  </motion.div>
                </motion.div>

                <div
                  className="radial-text text-xl"
                  onClick={() => {
                    setQuestionData({ text: null, voice: null });
                    setMode("listening");
                  }}
                >
                  <span className="">Ask Again</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <AnswerModal open={showModal} setOpen={setShowModal} />
    </>
  );
}
