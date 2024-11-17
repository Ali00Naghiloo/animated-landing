import React from "react";
import background from "../../../../project-assets/black-back.gif";

export default function Last() {
  return (
    <div className="w-full h-screen relative flex flex-col gap-6 justify-center items-center">
      <div className="absolute left-0 top-0 w-full h-full z-0">
        <img src={background} alt="" />
      </div>
      {/* title */}
      <div className="flex text-6xl text-white">
        Meet Your <span>Life CoPilot</span> Today
      </div>
      <span className="max-w-[250px] text-center opacity-60">
        Manage your life, work, and health effortlessly with VAI OS.
      </span>
      <div className="buttons2 px-7 py-4">Try now</div>
    </div>
  );
}
