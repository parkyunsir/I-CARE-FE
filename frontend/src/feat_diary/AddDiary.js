import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MAddIcon from "./modal/MAddIcon";
import './css/AddDiary.css';
import { postDiary, putDiary } from "./api/api-diary";
import Header from "../Header";
import PageFirst from "../PageFirst";

const AddDiary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const date = location.state?.date || new Date();
  const oldDiary = location.state?.diary;
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  const [diary, setDiary] = useState({
    diaryId: oldDiary?.diaryId || null,
    date: formatDate(date),
    content: oldDiary?.content || "",
    iconId: null
  });
  
  const stringDate = location.state?.stringDate;
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekday = weekdays[date.getDay()];

  const textareaRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const textarea = textareaRef.current;
    if(textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [diary.content]);

  const onChange = (e) => {
    setDiary({
      ...diary,
      [e.target.name]: e.target.value
    });
  }

  const handleSaveOpenPopup = () => {
    if(diary.content) {
      setIsPopupOpen(true);
    }
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  }

  const onSubmit = async () => {
    if(diary.iconId) {
      setIsPopupOpen(false);
      if(diary.diaryId) {
        try {
          putDiary(diary)
            .then(diary => {
              if(diary) {
                navigate('/diary/detail', {state: {diary}});
              }
            });
        } catch(error) {
          console.error('Error add diary: ', error);
        }
      } else {
        try {
          postDiary(diary)
            .then(diary => {
              if(diary) {
                navigate('/diary/detail', {state: {diary}});
              }
            });
        } catch(error) {
          console.error('Error add diary: ', error);
        }
      }
    }
  }

  return (
    <PageFirst>
    <div className="addDiary">
      <Header title="공감일기" type="back" />
      <div className="date">{stringDate} {weekday}요일</div>
      <textarea className="content" value={diary.content} name="content"
        onChange={onChange} ref={textareaRef}
        placeholder="오늘의 이야기를 들려주세요" />
      <button className="save" onClick={handleSaveOpenPopup}>저장</button>
      <MAddIcon isOpen={isPopupOpen} onChange={onChange}
        onSubmit={onSubmit} onClose={handleClosePopup} diary={diary} />
    </div>
    </PageFirst>
  );
}

export default AddDiary;