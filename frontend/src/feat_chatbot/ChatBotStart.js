import React, { useState } from "react";
import PageFirst from "../PageFirst";
import ChatBot from "./ChatBot";
import "./css/ChatBotStart.css";
import { deleteChat } from "./api/api-chatbot";
import MSelectTopic from "./modal/MSelectTopic";
import { useNavigate } from "react-router-dom";

const ChatBotStart = () => {
  const header = {
    title: 'AI 대화',
    type: 'home'
  };
  const navigate = useNavigate();
  const [start, setStart] = useState(false);
  const [topic, setTopic] = useState({
    chatBotTopicId: null,
    topic: ''
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  }

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  }

  const onSelectTopic = (topic) => {
    setIsPopupOpen(false);
    deleteChat();
    setTopic(topic);
    setStart(true);
  }

  const handleClick = () => {
    navigate('/chatbot/feedback');
  }

  return (
    <PageFirst header={header}>
      {start ? (
        <div>
          <ChatBot topic={topic} />
        </div>
      ) : (
        <div className="chatbotStart">
          <button onClick={handleOpenPopup} className="startButton">
            대화 시작
          </button>
          <button className="feedbackButton" onClick={handleClick}>
            피드백 목록
          </button>
          <MSelectTopic isOpen={isPopupOpen} onClose={handleClosePopup}
            onSelectTopic={onSelectTopic} />
        </div>
      )}
    </PageFirst>
  );
}

export default ChatBotStart;