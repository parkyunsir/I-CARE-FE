import React, { useState, useEffect } from "react";
import './css/DiaryCalendar.css';
import { format, isSameMonth, isSameDay } from "date-fns";
import MAddDiary from "./modal/MAddDiary";

const DiaryDay = (props) => {
  const [icon, setIcon] = useState('');
  const [diary, setDiary] = useState();
  const date = props.date;
  const month = date.getMonth() + 1;
  const stringDate = date.getFullYear() + '년 ' + month + '월 ' + date.getDate() + '일';
  
  const current = props.current;
  const onSelected = props.onSelected;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const today = new Date();
  const isToday = isSameDay(date, today);
  const isDisabled = !isSameMonth(date, current);

  useEffect(() => {
    if(props.diary) {
      const diary = props.diary;
      setDiary(diary);
      setIcon(diary.icon);
    } else {
      setDiary(null);
      setIcon('');
    }
  }, [props.diary]);

  const handleSelected = () => {
    onSelected(diary);
  }

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  }

  return (
    <div>
      {icon ? (
        <button className={`day ${isDisabled ? 'disabled' : ''} ${isToday ? 'today' : ''}`}
          onClick={() => handleSelected()}>
          {format(date, 'd')}
        </button>
      ) : (
        <button className={`day ${isDisabled ? 'disabled' : ''} ${isToday ? 'today' : ''}`}
          onClick={() => handleOpenPopup()}>
          {format(date, 'd')}
        </button>
      )}
      <div className={`icon ${isDisabled ? 'disabled' : ''}`}>{icon}</div>
      <MAddDiary stringDate={stringDate} date={date}
        isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
}

export default DiaryDay;