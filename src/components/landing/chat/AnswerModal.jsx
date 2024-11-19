import { motion, AnimatePresence } from "framer-motion";

export default function AnswerModal({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={() => setOpen(false)}
          initial={{ z: 200, opacity: 0 }}
          animate={{ z: 0, opacity: 1 }}
          exit={{ z: 200, opacity: 0 }}
          className="w-full h-screen fixed top-0 left-0 flex items-center justify-center"
        >
          <motion.div
            className="w-[400px] h-[400px] overflow-y-auto rounded bg-white shadow"
            initial={{ z: 200, opacity: 0, scale: 0.5 }}
            animate={{ z: 0, opacity: 1, scale: 1 }}
            exit={{ z: 200, opacity: 0, scale: 0 }}
            transition={{ ease: "circOut", duration: 0.3 }}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
