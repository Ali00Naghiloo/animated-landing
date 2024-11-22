import { motion, AnimatePresence } from "framer-motion";
import logoOne from "../../../../project-assets/logo.png";
import logoTow from "../../../../project-assets/life-copilot-logo.png";
import Cross from "../../../../project-assets/icons/Cross";
import MyButton from "../../reusables/MyButton";

export default function AnswerModal({ open, setOpen, description }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={() => setOpen(false)}
          initial={{ z: 200, opacity: 0 }}
          animate={{ z: 0, opacity: 1 }}
          exit={{ z: 200, opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.4 }}
          className="w-full h-screen fixed top-0 left-0 flex items-center justify-center z-50"
        >
          <motion.div
            className="w-[400px] h-[400px] flex flex-col border border-[#94A8ED] gap-[35px] justify-between rounded-2xl shadow answer-modal p-[24px]"
            initial={{ z: 200, opacity: 0, scale: 0.5 }}
            animate={{ z: 0, opacity: 1, scale: 1 }}
            exit={{ z: 200, opacity: 0, scale: 0 }}
            transition={{ ease: "circOut", duration: 0.3 }}
          >
            {/* header */}
            <div className="w-full flex justify-between h-[20px]">
              {/* logo */}
              <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="flex h-full"
              >
                <img src={logoOne} alt="" className="h-full" />
                <img src={logoTow} alt="" className="h-[50%]" />
              </motion.div>

              {/* cross */}
              <Cross />
            </div>

            {/* body */}
            <div className="overflow-y-auto hide-scroll">{description}</div>

            {/* footer */}
            <MyButton
              className={"answer-modal-button w-full !rounded-[16px] py-5"}
              variant=""
              children={<div>Ask again</div>}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
