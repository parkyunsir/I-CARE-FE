import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Divider, List } from "@mui/material";
import "./css/QuestionHome.css";
import AddQuestion from "./AddQuestion";
import QuestionList from "./QuestionList";
import SearchQuestion from "./SearchQuestion";
import {options , customStyles} from "./SelectOption";
import MSearchQuestion from "./modal/MSearchQuestion";
import PageFirst from "../PageFirst";
import { showQuestion, postQuestion, searchQuestion, inputQuestion } from "./api/api-question";

const QuestionHome = () => {
  const header = {
    title: "일일문답",
    type: "home"
  };
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('오늘의 질문을 준비하는 중입니다.'); // 추가된 상태
  const [sortOrder, setSortOrder] = useState(options[1]); // 기본값을 최신순으로 설정
  const [modalOpen, setModalOpen] = useState(false);
  
  const date = new Date(); // 날짜 받아오기  

  const handleSortChange = (selectedOption) => {
    setSortOrder(selectedOption);
  }; //오래된순 <-> 최신순 변경

  const handleCloseModal = () => {
    setModalOpen(false);
    showQuestion(setItems);
  };

  // 추가
  const handleAddQuestion = (item) => {
    postQuestion(item, setItems, items);
  }

  // 검색
  const handleSearchQuestion = (item) => {
    searchQuestion(item, setItems, setModalOpen);
  }

  // 오늘의 질문 출력
  const handleInputQuestion = () => {
    inputQuestion(date, setInput);
  }

  useEffect(() => {
    showQuestion(setItems);
    handleInputQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const num = items.length;
  //리스트 불러오기 (최신 순)
  let questionNewList = items.length > 0 && (
      <List>
        {items.map((item, index) => (
          <React.Fragment key={item.questionId}>
          <QuestionList item={item} setInput={setInput}
          />
          {index < items.length - 1 && <Divider />}
          </React.Fragment> // 구분선 추가
        ))}
      </List>
  );

  //리스트 불러오기 (오래된 순)
  let questionOldList = items.length > 0 && (
      <List>
        {items.reverse().map((item, index) => (
          <React.Fragment key={item.questionId}>
          <QuestionList item={item} setInput={setInput}
          />
          {index < items.length - 1 && <Divider />}
          </React.Fragment> // 구분선 추가
        ))}
      </List>
  );

  const questionList = sortOrder === options[1] ? questionNewList : questionOldList;

  return (
    <PageFirst header={header}>
    <div>

      <div className="todayInput">{input}</div>

      <AddQuestion postQuestion={handleAddQuestion} 
       date={date} items={items}/>

      <div className="search"> 


      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Select
          value={sortOrder}
          onChange={handleSortChange}
          options={options}
          styles={customStyles}
          className="selectBox"
        />
        <SearchQuestion searchQuestion={handleSearchQuestion}/> {/* 검색부분 */}
      </div>
        <MSearchQuestion 
          isOpen={modalOpen} onClose={handleCloseModal} /> {/* 모달부분 */}
        
      </div>

      num : {num}
      
      <div className="questionList">
      {questionList}
      </div>

    </div>
    </PageFirst>
  );
}

export default QuestionHome;