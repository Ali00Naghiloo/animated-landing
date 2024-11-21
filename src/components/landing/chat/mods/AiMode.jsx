import React, { useRef, useState } from "react";
import aiListeningGif from "../../../../../project-assets/landing/listening.webm";
import aiWaitingGif from "../../../../../project-assets/landing/waiting.webm";
import aiThinkingGif from "../../../../../project-assets/landing/thinking.webm";
import aiSpeakingGif from "../../../../../project-assets/landing/speaking.webm";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Footer from "../Footer";
import MyButton from "../../../reusables/MyButton";
import MyInput from "../../../reusables/MyInput";
import playIcon from "../../../../../project-assets/landing/play.png";
import OpenModal from "../../../../../project-assets/icons/OpenModal";
import AnswerModal from "../AnswerModal";
import Listening from "./Listening";
import Waiting from "./Waiting";
import Thinking from "./Thinking";
import Speaking from "./Speaking";

export default function Body() {
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

    setAiResponse({ text: "Sleep Well!!!", voice: null });
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
        <Speaking setMode={setAiMode} aiResponse={aiResponse} />
      )}
    </AnimatePresence>
  );
}
