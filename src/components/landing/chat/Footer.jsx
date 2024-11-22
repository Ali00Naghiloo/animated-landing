import MyButton from "../../reusables/MyButton";
import logo from "../../../../project-assets/life-copilot-logo.png";
import { motion } from "framer-motion";
import Down from "../../../../project-assets/icons/Down";

const downVariants = {
  animate: { y: 0 },
  initial: { y: -30 },
  transition: {
    delay: 1,
    ease: "",
    repeat: Infinity,
    duration: 0.5,
    repeatType: "reverse",
    repeatDelay: 0.5,
  },
};

export default function Footer() {
  function scrollToPosition(position) {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }

  const handleScroll = () => {
    scrollToPosition(window.innerHeight);
  };

  return (
    <div className="absolute bottom-0 left-0 w-full h-fit flex justify-between p-[20px] lg:p-[80px]">
      <motion.div
        className="z-10"
        onClick={handleScroll}
        variants={downVariants}
        initial={"initial"}
        animate={"animate"}
        transition={{
          delay: 1,
          ease: "easeInOut",
          repeat: Infinity,
          duration: 0.5,
          repeatType: "reverse",
          repeatDelay: 2,
        }}
      >
        <MyButton
          onClick={handleScroll}
          variant=""
          className={"buttons px-[11px] py-[16px]"}
          children={<Down />}
        />
      </motion.div>

      <div className="max-w-[45px] lg:max-w-[75px]">
        <img src={logo} className="w-full object-cover" alt="" />
      </div>
    </div>
  );
}
