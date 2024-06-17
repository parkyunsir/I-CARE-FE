import React, { useState, useEffect } from "react";
import './css/DiaryCalendar.css';
import { addDays, endOfMonth, startOfWeek, endOfWeek, isSameDay } from 'date-fns';
import DiaryDay from "./DiaryDay";
import DiarySummary from "./DiarySummary";
import { getDiaryList } from "./api/api-diary";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import PageFirst from "../PageFirst";

const DiaryCalendar = () => {
  const location = useLocation();
  const [diaryList, setDiaryList] = useState([]);
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [dates, setDates] = useState([]);
  const [current, setCurrent] = useState();
  const [selectedDiary, setSelectedDiary] = useState();

  useEffect(() => {
    const deletedDate = new Date(location.state?.deletedDate);
    if(!isNaN(deletedDate)) {
      setYear(deletedDate.getFullYear());
      setMonth(deletedDate.getMonth() + 1);
    } else {
      const today = new Date();
      setYear(today.getFullYear());
      setMonth(today.getMonth() + 1);
    }
  }, [location.state]);

  useEffect(() => {
    const monthStart = new Date(year, month-1, 1);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    let presentDate = startDate;
    const nowDates = [];
    while (presentDate <= endDate) {
      nowDates.push(presentDate);
      presentDate = addDays(presentDate, 1);
    }
    setDates(nowDates);
    setCurrent(monthStart);
  }, [year, month]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    if(dates.length){
      const startDate = formatDate(dates[0])
      const endDate = formatDate(dates[dates.length - 1])
      getDiaryList(startDate, endDate)
        .then(diaryList => {
          if(diaryList) {
            setDiaryList(diaryList);
          }
        });
    }
  }, [dates]);

  const onLeftClick = () => {
    if(month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  }

  const onRightClick = () => {
    if(month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  }

  const onSelected = (diary, icon) => {
    setSelectedDiary(diary && icon ? {diary, icon} : null);
  }

  const renderWeeks = () => {
    const weeks = [];
    for(let i = 0; i < dates.length; i += 7) {
      const week = dates.slice(i, i + 7);
      weeks.push(
        <div key={i} className="week" style={{display: 'flex', justifyContent: 'center'}}>
          {week.map((date, index) => {
            const diary = diaryList.find(diary => isSameDay(new Date(diary.date), date));
            return <DiaryDay key={index} date={date} diary={diary}
                      current={current} onSelected={onSelected} />;
          })}
        </div>
      )
    }
    return weeks;
  };

  return (
    <PageFirst>
      <Header title="공감일기" type="home" />
      <div className="calendar">
        <div className="month">
          <button onClick={onLeftClick}>{'<'}</button>
          <p>{year}년 {month}월</p>
          <button onClick={onRightClick}>{'>'}</button>
        </div>
        <div className="week">
          {['일', '월', '화', '수', '목', '금', '토'].map(day => (
            <div key={day} className="day">{day}</div>
          ))}
        </div>
        <div className="days">
          {renderWeeks()}
        </div>
      </div>
      {selectedDiary && <DiarySummary selectedDiary={selectedDiary} />}
    </PageFirst>
  );
}

export default DiaryCalendar;