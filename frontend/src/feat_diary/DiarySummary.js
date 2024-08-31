import React from "react";
import './css/DiarySummary.css';
import { useNavigate } from "react-router-dom";

const DiarySummary = (props) => {
  const navigate = useNavigate();
  const diary = props.selectedDiary.diary;
  //const icon = props.selectedDiary.icon;
  const date = new Date(diary.date);
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const day = weekdays[date.getDay()];
  const content = diary.content;
  const summary = content.length > 40 ? content.substring(0, 40) + '...' : content;

  const onMoveDetail = () => {
    navigate('/diary/detail', {state: {diary}});
  }

  return (
    <div className="summary" onClick={onMoveDetail}>
      <div className="title">
        <div className="date">
          {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일 ({day})
        </div>
        <div className="iconDetail">{diary.icon}</div>
      </div>
      <div className="content">
        {summary}
      </div>
    </div>
  );
}

export default DiarySummary;