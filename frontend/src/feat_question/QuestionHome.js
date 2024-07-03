import React, { useEffect, useState } from "react";
import "./css/QuestionHome.css";
import Select from 'react-select';
import { Divider, List } from "@mui/material";
import AddQuestion from "./AddQuestion";
import QuestionList from "./QuestionList";
import SearchQuestion from "./SearchQuestion";
import Header from "../Header";
import MSearchQuestion from "./modal/MSearchQuestion";
import PageFirst from "../PageFirst";
import { getQuestion, postQuestion, getQuestionByOutput } from "./api/api-question";

const options = [
  { value: '오래된순', label: '오래된순' },
  { value: '최신순', label: '최신순' }
];

const customStyles = {
  option: (provided, state) => ({ // 오래된순, 최신순
    ...provided,
    backgroundColor: state.isFocused ? '#6271f5' : null,
    color: state.isFocused ? '#fff' : '#000',
    paddingLeft: 10,
    borderRadius: '2px',
    textAlign: 'center',
    fontSize: '12px',
  }),
  control: (provided) => ({ // 보이는 부분 (default=최신순)
    ...provided,
    borderRadius: '10px',
    textAlign: 'center',
    fontSize: '13px',
  }),
};

const QuestionHome = () => {
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState(options[1]); // 기본값을 최신순으로 설정
  const [modalOpen, setModalOpen] = useState(false);
  
  const date = new Date(); // 날짜 받아오기
  const [day] = useState(new Date().toLocaleDateString());
  

  const handleSortChange = (selectedOption) => {
    setSortOrder(selectedOption);
  }; //오래된순 <-> 최신순 변경

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    try {
      getQuestion()
        .then(response => {
          if(response) {
            setItems(response);
          }
        });
    } catch(error) {
      console.error('Error fetching items : ', error);
    }
  },[]);

  //추가 
  const addQuestion = (question) => {
    try {
      postQuestion(question)
        .then(response => {
          if(response) {
            setItems([...items, response]);
          }
        });
    } catch(error) {
      console.error('Error fetching items : ', error);
    }
  };

  //검색
  const searchQuestion = (item) => {
    try {
      getQuestionByOutput(item.output)
        .then(response => {
          if(response && response.length > 0) {
            setItems(response);
          } else {
            setModalOpen(true);
          }
        });
    } catch(error) {
      console.error('Error fetching items : ', error);
    }
  }


  //리스트 불러오기 (최신 순)
  let questionNewList = items.length > 0 && (
      <List>
        {items.map((item, index) => (
          <React.Fragment key={item.questionId}>
          <QuestionList item={item} day={day}
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
          <QuestionList item={item} day={day}
          />
          {index < items.length - 1 && <Divider />}
          </React.Fragment> // 구분선 추가
        ))}
      </List>
  );

  const questionList = sortOrder === options[1] ? questionNewList : questionOldList;

  return (
    <PageFirst>
    <div>

    <Header title="일일문답" type="home" />

      <div className="todayInput">어떤 놀이가 제일 좋아?</div>

      <AddQuestion postQuestion={postQuestion} date={date}/>

      <div className="search"> 

        <Select
          value={sortOrder}
          onChange={handleSortChange}
          options={options}
          styles={customStyles}
          className="selectBox"
        />

        
        <SearchQuestion searchQuestion={searchQuestion}/> {/* 검색부분 */}
        <MSearchQuestion 
          isOpen={modalOpen} onClose={handleCloseModal} /> {/* 모달부분 */}
        
      </div>
      
      <div className="questionList">
          {questionList}
      </div>

    </div>
    </PageFirst>
  );
}

export default QuestionHome;