import React, { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ChatBotFeedback = (props) => {
  const feedback = props.feedback;
  const date = new Date(feedback.date);
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const day = weekdays[date.getDay()];
  const summary = feedback.feedback.length > 40 ? feedback.feedback.substring(0, 40) + '...' : feedback.feedback;
  const [content, setContent] = useState(summary);
  const [isDetail, setIsDetail] = useState(false);

  const handleChange = () => {
    setIsDetail(!isDetail);
    const isNewDetail = !isDetail;
    if(isNewDetail) {
      setContent(feedback.feedback);
    } else {
      setContent(summary);
    }
  }

  return (
    <div className="feedback">
      <div className="title">
        <div className="date">
          {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일 ({day})
        </div>
        <button onClick={handleChange} className="detailButton">
          {isDetail ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </button>
      </div>
      <div className="content">
        {content}
      </div>
    </div>
  );
}

export default ChatBotFeedback;