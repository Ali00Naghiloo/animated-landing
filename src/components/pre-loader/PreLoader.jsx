import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loader from "../../../project-assets/loading/preloader.gif";
import loaderBack from "../../../project-assets/loading/black-back.gif";
import { motion } from "framer-motion";
import { setShowPreLoader } from "../../store/reducers/preLoaderSlice";

const variants = {
  animate: {
    scale: 0.4,
    opacity: 0,
    display: "none",
  },
};

export default function PreLoader() {
  const showLoader = useSelector((state) => state.preLoader.show);
  const dispatch = useDispatch();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setShowPreLoader(0));
    }, 3000);
  }, []);

  // set percetage
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((prevCount) => prevCount + 1);
    }, 30);

    if (percentage === 100) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <motion.div
        variants={variants}
        animate={!showLoader ? "animate" : ""}
        className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden fixed top-0 left-0 bg-black z-[9999]"
      >
        {/* background */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img src={loaderBack} alt="" className="w-full h-full" />
        </div>

        {/* loading gif */}
        <div className="w-full flex flex-col items-center justify-center z-10 my-auto">
          <div className="flex justify-center items-center w-[500px] h-[200px] overflow-hidden">
            <img
              src={loader}
              alt=""
              className="object-cover w-[800px] h-[800px]"
            />
          </div>
          {/* radial colored text */}
          <div className="w-full text-center bg-clip-text text-[1.5em]">
            <span className="text-white text-transparent radial-text">
              Loading Intelligence...
            </span>
          </div>
        </div>

        {/* footer */}
        <div className="w-full fixed left-0 bottom-0 flex justify-between text-[#94A8ED] text-[2em] p-[80px] z-10">
          <div className="flex">
            AI Loading <span className="animate-pulse">..</span>
          </div>

          <span>{percentage}%</span>
        </div>
      </motion.div>
    </>
  );
}
