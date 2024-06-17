import React, { useState } from "react";
import Header from "../Header";
import PageFirst from "../PageFirst";
import ChatBot from "./ChatBot";
import { deleteChat } from "./api/api-chatbot";

const ChatBotStart = () => {
  const [start, setStart] = useState(false);
  const handleButtonClick = () => {
    deleteChat();
    setStart(true);
  }
  return (
    <PageFirst>
      <Header title="AI 대화" type="home" />
      <div>현재 상황 : 비가 많이 오는데 자녀가 밖에 나가서 놀고 싶다고 하는 중입니다.</div>
      {start ? (
        <ChatBot />
      ) : (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <button onClick={handleButtonClick} 
            style={{backgroundColor: '#6271f5', color: 'white', padding: '15px 20px',
              margin: '20px', border: 'none', 
              borderRadius: '10px', fontSize: '20px'
            }}>대화 시작</button>
        </div>
      )}
    </PageFirst>
  );
}

export default ChatBotStart;