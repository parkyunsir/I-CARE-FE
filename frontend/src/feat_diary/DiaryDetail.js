import React, { useState } from "react";
import './css/DiaryDetail.css';
import { useLocation } from "react-router-dom";
import MEditDeleteDiary from "./modal/MEditDeleteDiary";
import PageFirst from "../PageFirst";

const DiaryDetail = () => {
  const header = {
    title: "공감일기",
    type: "back", 
    routeBack: "/diary"
  };
  const location = useLocation();
  const diary = location.state?.diary;
  const date = new Date(diary.date);
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekday = weekdays[date.getDay()];

  const month = date.getMonth() + 1
  const stringDate = date.getFullYear() + "년 " + month + "월 " + date.getDate() + "일";
  
  const [isPopupOpen, setIsPopupOpen] = useState({
    isOpen: false,
    type: ""
  });

  const handleOpenPopup = (type) => {
    setIsPopupOpen({
      isOpen: true,
      type: type
    });
  }

  const handleClosePopup = () => {
    setIsPopupOpen({
      isOpen: false,
      type: ""
    });
  }

  return (
    <PageFirst header={header}>
    <div className="detail">
      <div className="date">
        {stringDate} {weekday}요일
      </div>
      <div className="sub">
        <div className="icon">{diary.icon}</div>
        <div className="content">{diary.content}</div>
      </div>
      <div>
        <button className="edit" onClick={() => handleOpenPopup("수정")}>수정</button>
        <button className="delete" onClick={() => handleOpenPopup("삭제")}>삭제</button>
      </div>
      <MEditDeleteDiary isOpen={isPopupOpen} onClose={handleClosePopup}
        stringDate={stringDate} diary={diary} date={date} />
    </div>
    </PageFirst>
  );
}

export default DiaryDetail;