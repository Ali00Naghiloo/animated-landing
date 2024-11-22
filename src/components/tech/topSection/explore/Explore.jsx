import React from "react";
import Down from "../../../../../project-assets/icons/Down";
import OsLifeCoPilot from "../../../../../project-assets/tech/Os-Life-CoPilot.svg";
import MyButton from "../../../reusables/MyButton";
export default function Explore({ SetItem, item }) {
  const handleSetItem = (text) => {
    SetItem(null);
    setTimeout(() => {
      SetItem(text);
    }, 100);
  };

  return (
    <div className="flex justify-center">
      <div
        className="flex gap-4 w-[90vw] items-center justify-start "
        style={{
          margin: "atuo",
        }}
      >
        <div
          className="lg:flex-1 lg:items-center p-4 lg:flex lg:justify-start 
        hidden
        "
        >
          <MyButton
            variant=""
            className={"buttons px-[11px] py-[16px]"}
            children={<Down />}
          />
        </div>

        <div
          className="flex-2 flex items-center justify-center flex-col 
        m-auto 
        "
        >
          <p>Explore</p>
          <div
            className="flex sm:text-[1em] text-[53%]  lg:w-fit items-center sm:justify-center justify-around w-[80vw]"
            // style={{
            //   width:"80vw"
            // }}
          >
            <div
              onClick={() => {
                handleSetItem("Ring");
              }}
              className={`my-4 mx-1 sm:mx-3 sm:px-6 sm:py-4 px-3 py-2 rounded-xl sm:rounded-2xl ${
                item === "Ring"
                  ? "bg-[rgba(119,169,232,0.16)]"
                  : "bg-transparent"
              }  hover:bg-[rgba(119,169,232,0.16)] transition-all duration-300`}
              style={{
                border: "1px solid var(--Radial, #2A5FDD)",
                boxShadow:
                  "6px 80px 80px 0px rgba(148, 168, 237, 0.02) inset, 0px -1px 1px 0px rgba(148, 168, 237, 0.20) inset, 0px 1px 1px 0px rgba(148, 168, 237, 0.20) inset",
                backdropFilter: "blur(10px)",
              }}
            >
              <p>BioSense Ring</p>
            </div>

            <div
              onClick={() => {
                handleSetItem("Band");
              }}
              className={`my-4 mx-1 sm:mx-3  sm:px-6 sm:py-4 px-3 py-2 rounded-xl sm:rounded-2xl
${
  item === "Band" ? "bg-[rgba(119,169,232,0.16)]" : "bg-transparent"
} hover:bg-[rgba(119,169,232,0.16)] transition-all duration-300
`}
              style={{
                border: "1px solid var(--Radial, #2A5FDD)",
                boxShadow:
                  "6px 80px 80px 0px rgba(148, 168, 237, 0.02) inset, 0px -1px 1px 0px rgba(148, 168, 237, 0.20) inset, 0px 1px 1px 0px rgba(148, 168, 237, 0.20) inset",
                backdropFilter: "blur(10px)",
              }}
            >
              <p>BioSense Band</p>
            </div>

            <div
              onClick={() => {
                handleSetItem("Watch");
              }}
              className={`my-4 mx-1 sm:mx-3  sm:px-6 sm:py-4 px-3 py-2 rounded-xl sm:rounded-2xl
                ${
                  item === "Watch"
                    ? "bg-[rgba(119,169,232,0.16)]"
                    : "bg-transparent"
                } hover:bg-[rgba(119,169,232,0.16)] transition-all duration-300
`}
              style={{
                border: "1px solid var(--Radial, #2A5FDD)",
                boxShadow:
                  "6px 80px 80px 0px rgba(148, 168, 237, 0.02) inset, 0px -1px 1px 0px rgba(148, 168, 237, 0.20) inset, 0px 1px 1px 0px rgba(148, 168, 237, 0.20) inset",
                backdropFilter: "blur(10px)",
              }}
            >
              <p>BioSense Watch</p>
            </div>
          </div>
        </div>

        <div
          className="lg:flex-1 lg:flex lg:justify-end 
        hidden
        "
        >
          <img src={OsLifeCoPilot} />
        </div>
      </div>
    </div>
  );
}
