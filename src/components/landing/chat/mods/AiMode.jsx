import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Footer from "../Footer";
import Listening from "./Listening";
import Waiting from "./Waiting";
import Thinking from "./Thinking";
import Speaking from "./Speaking";

export default function AiMode() {
  const [getAnswerLoading, setGetAnswerLoading] = useState(false); // for handling the time we see thinking part of ai
  const [aiMode, setAiMode] = useState("listening"); // for handling different modes and components
  const [questionData, setQuestionData] = useState({ text: null, voice: null }); // sending data to ai(both voice and text)
  const [aiResponse, setAiResponse] = useState({ text: null, voice: null });

  // send the data user enters in listening section
  const handleSendQuestion = async () => {
    setGetAnswerLoading(true);
    const sendingData = {};

    // the fetch requests can place here with await

    setTimeout(
      () => {
        setGetAnswerLoading(false);
        setAiMode("speaking");
      },
      3000 // the time of thinking section
    );

    setAiResponse({
      text: "Sleep Well!!!",
      description:
        "asdasdasdasd asdasf asd asd asd asd asd asd asd asd asd asd asdas asdasd asd To improve your sleep, try establishing a consistent bedtime routine by going to bed and waking up at the same time every day, even on weekends. Avoid caffeine or heavy meals close to bedtime, and limit screen time at least an hour before sleep. Incorporating relaxation techniques like deep breathing or light stretching can also help calm your mind and prepare your body for restful sleep.",
      voice: null,
    });
  };

  return (
    <AnimatePresence mode="wait">
      {/* different steps rendered here */}
      {aiMode == "listening" && <Listening setMode={setAiMode} />}
      {aiMode == "waiting" && (
        <Waiting
          setMode={setAiMode}
          questionData={questionData}
          setQuestionData={setQuestionData}
          handleSendQuestion={handleSendQuestion}
        />
      )}
      {aiMode == "thinking" && (
        <Thinking setMode={setAiMode} questionData={questionData} />
      )}
      {aiMode == "speaking" && (
        <Speaking
          setMode={setAiMode}
          setQuestionData={setQuestionData}
          aiResponse={aiResponse}
        />
      )}

      <Footer />
    </AnimatePresence>
  );
}
