import Chat from "./chat/Chat";
import FillingText from "./filling-text/FillingText";
import Features from "./features/Features";
import Plans from "./plans/Plans";

export default function Landing() {
  return (
    <div className="h-full w-full">
      {/* chat with AI */}
      <Chat />

      {/* filling text */}
      <FillingText />

      {/* features */}
      <Features />

      {/* plans */}
      <Plans />

      {/* last secton */}

      {/* footer */}
    </div>
  );
}
