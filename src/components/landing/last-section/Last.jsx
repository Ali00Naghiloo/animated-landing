import React from "react";
import background from "../../../../project-assets/black-back.gif";
import MyButton from "../../reusables/MyButton";

export default function Last() {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-screen relative flex flex-col gap-6 justify-center items-center">
      <div className="w-screen h-full absolute top-0 left-[50%] translate-x-[-50%] -z-10">
        <img className="w-full h-full" src={background} alt="" />
      </div>

      {/* title */}
      <div className="text-2xl lg:text-6xl text-white px-10 text-center">
        Meet Your <span className="radial-text">Life CoPilot</span> Today
      </div>
      <span className="max-w-[250px] text-center opacity-60">
        Manage your life, work, and health effortlessly with VAI OS.
      </span>
      <MyButton
        children={<>Try now</>}
        variant=""
        className="buttons2 px-7 py-4"
      />
    </div>
  );
}
