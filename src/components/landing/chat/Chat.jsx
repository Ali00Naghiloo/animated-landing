import Header from "./Header";
import background from "../../../../project-assets/black-back.gif";
import AiMode from "./mods/AiMode";

export default function ChatSection() {
  return (
    <>
      <div className="chat-section w-full h-screen min-h-[900px] absolute top-0 left-0 flex justify-center items-center z-0">
        <img src={background} alt="" className="w-full h-full" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto h-screen bg-black flex flex-col p-[20px] md:p-[40px] lg:p-[80px] lg:pt-[30px]">
        <Header />

        <AiMode />
      </div>
    </>
  );
}
