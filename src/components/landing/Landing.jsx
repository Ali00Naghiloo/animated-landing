import Chat from "./chat/Chat";
import FillingText from "./filling-text/FillingText";
import Features from "./features/Features";
import Plans from "./plans/Plans";
import FAQ from "./faq/FAQ";
import Last from "./last-section/Last";
import Footer from "./footer/Footer";

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

      {/* FAQ */}
      <FAQ />

      {/* last section */}
      <Last />

      {/* footer */}
      <Footer />
    </div>
  );
}
