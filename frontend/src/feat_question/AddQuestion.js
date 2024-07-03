import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./css/AddQuestion.css";
import MAddQuestion from "./modal/MAddQuestion";
import MAddCheckQuestion from "./modal/MAddCheckQuestion";

const AddQuestion = (props) => {
    const date = props.date; // 날짜 받아오기 
    const Stringdate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`; // 오늘 날짜

    const [text, setText] = useState(''); // 글자수
    const [question, setQuestion] = useState({output:""});
    const addQuestion = props.addQuestion;
    const [isHovered, setIsHovered] = useState(false);

    const [modalAddOpen, setModalAddOpen] = useState(false);  // 이미 답변 했을 시 modal 창
    const [modalCheckOpen, setModalCheckOpen] = useState(false);

    //글자 수 count
    const handleChange = (e) => {
      const { name, value } = e.target;
      setQuestion({
          ...question,
          [name]: value
      });
      setText(value);
    };

    // 이미 작성함
    // const handleCloseAddModal = () => {
    //   setModalAddOpen(false);
    // };

    // 정말 작성?
    const handleCloseCheckModal = () => {
      setModalCheckOpen(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    //button 동작 함수 (v 버튼을 눌러야 추가가 된다.)
    const onButtonClick = () => {
      // if (Stringdate===localStorage.getItem('Stringdate')) { // 이미 작성된 경우에는 모달
      //   setQuestion({output: ""});
      //   setText("");
      //   setModalAddOpen(true); // Add 모달
      // }
      //  else { // 작성 안 됨
        // setModalCheckOpen(true); //정말 작성할 건지
        addQuestion(question); // 추가하고
        // localStorage.setItem('Stringdate',Stringdate); // update
        setQuestion({output: ""});
        setText("");
        // setModalCheckOpen(true);
      
    };

  return (
    <div className="addQ">
      <TextField 
        className="todayOutput"
        name="output"
        value={question.output}
        onChange={handleChange}
        inputProps={{ maxLength: 50 }}
        style={{ 
            width: '315px',
          }}
        placeholder="오늘의 질문에 답변해보세요."
        variant="outlined"
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
                <KeyboardArrowRightIcon className="uploadIcon" />
              )}
            </InputAdornment>
          ), 
        }}
      />

    <div className="date"> 
        <div>{Stringdate}</div>
        <div>{text.length}/50</div>
    </div>

    {/* <MAddQuestion
        isOpen={modalAddOpen} onClose={handleCloseAddModal} /> */}

    {/* <MAddCheckQuestion
        isOpen={modalCheckOpen} onClose={handleCloseCheckModal} /> */}
    
    </div>
  );
}

export default AddQuestion;