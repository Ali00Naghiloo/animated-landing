import MyButton from "../../reusables/MyButton";
import logo from "../../../../project-assets/life-copilot-logo.png";
import { motion } from "framer-motion";
import Down from "../../../../project-assets/icons/Down";

const downVariants = {
  animate: { y: 15 },
  initial: { y: -30 },
  transition: {
    delay: 1,
    ease: "circIn",
    repeat: Infinity,
    duration: 0.5,
    repeatType: "reverse",
    repeatDelay: 2,
  },
};

export default function Footer({ mode, setMode }) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-fit flex justify-between">
      <motion.div
        variants={downVariants}
        initial={"initial"}
        animate={"animate"}
        transition={{
          delay: 1,
          ease: "circIn",
          repeat: Infinity,
          duration: 0.5,
          repeatType: "reverse",
          repeatDelay: 2,
        }}
      >
        <MyButton
          variant=""
          className={"buttons px-[11px] py-[16px]"}
          children={<Down />}
        />
      </motion.div>

      <div className="max-w-[75px]">
        <img src={logo} className="w-full object-cover" alt="" />
      </div>
    </div>
  );
}
