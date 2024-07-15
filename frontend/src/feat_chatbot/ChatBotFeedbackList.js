import React, { useEffect, useState } from "react";
import PageFirst from "../PageFirst";
import { getFeedbackList } from "./api/api-chatbot-feedback";
import ChatBotFeedback from "./ChatBotFeedback";
import "./css/ChatBotFeedbackList.css";

const ChatBotFeedbackList = () => {
  const header = {
    title:"AI 대화 피드백",
    type: "back",
    routeBack: "/chatbot" 
  };
  const [feedbackList, setFeedbackList] = useState([]);
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    getFeedbackList()
      .then(feedbackList => {
        if(feedbackList) {
          const sortedList = sortFeedbacks(feedbackList, sort);
          setFeedbackList(sortedList);
        }
      })
  });

  useEffect(() => {
    const sortedList = sortFeedbacks(feedbackList, sort);
    setFeedbackList(sortedList);
  }, [feedbackList, sort]);

  const sortFeedbacks = (feedbackList, sort) => {
    return feedbackList.sort((a, b) => {
      if(sort === "latest") {
        return new Date(b.date) - new Date(a.date);
      } else if(sort === "old") {
        return new Date(a.date) - new Date(b.date);
      }
      return [];
    })
  }

  const handleSort = (e) => {
    const sort = e.target.value;
    setSort(sort);
  }

  return (
    <PageFirst header={header}>
      <div className="chatbotFeedbackList">
        <div className="sort">
          <select onChange={handleSort} value={sort}>
            <option value="latest">최신순</option>
            <option value="old">오래된 순</option>
          </select>
        </div>
        <div className="feedbacks">
          {feedbackList.map(feedback => (
            <ChatBotFeedback key={feedback.chatBotFeedbackId} feedback={feedback} />
          ))}
        </div>
      </div>
    </PageFirst>
  );
}

export default ChatBotFeedbackList;