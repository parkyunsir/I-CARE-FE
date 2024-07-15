import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./css/AddQuestion.css";
import MDoneQuestion from "./modal/MDoneQuestion";
import MCheckQuestion from "./modal/MCheckQuestion";

const AddQuestion = (props) => {
    const items = props.items;
    const date = props.date; // 날짜 받아오기 
    const Stringdate = `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`; // 오늘 날짜

    const postQuestion = props.postQuestion; // 등록하는 함수

    const [text, setText] = useState(''); // 글자수
    const [question, setQuestion] = useState({output:""});
    const [isHovered, setIsHovered] = useState(false);

    const [modalDoneOpen, setModalDoneOpen] = useState(false);  // 이미 답변 했을 시 modal 창
    const [modalCheckOpen, setModalCheckOpen] = useState(false);

    const [readOnly, setReadOnly] = useState(false);
    
    // 답변 작성 및 글자수 관리
    const handleChange = (e) => {
      const { name, value } = e.target;
      if (value.includes('\n')) {
        return;
      }
      setQuestion({
          ...question,
          [name]: value
      });
      setText(value);
    };

    // 모달창 [오늘 작성 여부 - 닫기]
    const handleCloseDoneModal = () => {
      setModalDoneOpen(false);
    };

    // 모달창 [정말 작성할 것인지 - 닫기]
    const handleCloseCheckModal = () => {
      // setQuestion({output: ""});
      // setText("");
      setModalCheckOpen(false);
    };

    // 등록: 버튼 관리 [hover 여부]
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    // 등록: enter로 답변 등록하기
    const enterKeyEventHandler = (e) => {
      if (e.key === 'Enter') {
          setIsHovered(true);
          onButtonClick();
      }}
    const enterKeyUp = (e) => {
      if (e.key === 'Enter') {
          setIsHovered(false);
      }}

    // button 동작 함수 (v 버튼을 눌러야 추가가 된다.)
    const onButtonClick = () => {
        if (question.output!==""){ // 빈칸이면 등록 안 됨
          setModalCheckOpen(true); // 정말 작성?
        }
    };
    
    // [modal] 버튼 클릭
    const onOutputClick = () => {
      postQuestion(question); // 추가
      setQuestion({output: ""});
      setText("");
      setModalCheckOpen(false);
    }

    // 오늘 작성한 경우 또 못 하게
    const turnOffReadOnly = () => {
      if (items.length > 0 && Stringdate === items[items.length-1].date) { // 이미 작성된 경우.
        setQuestion({output: ""});
        setText("");
        setModalDoneOpen(true); // Add 모달
        setReadOnly(true);
      }
    }

  return (
    <div className="addQ">
      <TextField 
        className="todayOutput"
        name="output"
        value={question.output}
        onChange={handleChange}
        onKeyPress={enterKeyEventHandler}
        onKeyUp={enterKeyUp}
        onClick={turnOffReadOnly}
        inputProps={{ maxLength: 50, readOnly:readOnly }}
        style={{ 
            width: '295px',
          }}
        placeholder="오늘의 질문에 답변해보세요."
        variant="standard"
        multiline // TextField를 멀티라인으로 변경
        InputProps={{
          endAdornment: (
            <InputAdornment 
              position="start"
              className="inputAdornment"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isHovered ? ( // 마우스 올렸을 때 아이콘 아래로 
                <KeyboardArrowDownIcon onClick={onButtonClick} className="uploadIcon" />
              ) : (
                <KeyboardArrowRightIcon className="uploadUnIcon" />
              )}
            </InputAdornment>
          ), 
        }}
      />

    <div className="date"> 
        <div>{Stringdate}</div>
        <div>{text.length > 50 ? 50 : text.length}/50</div>
    </div>

    <MDoneQuestion
        isOpen={modalDoneOpen} onClose={handleCloseDoneModal} />

    <MCheckQuestion
        isOpen={modalCheckOpen} onClose={handleCloseCheckModal}
        onOutputClick={onOutputClick}
         />
    
    </div>
  );
}

export default AddQuestion;