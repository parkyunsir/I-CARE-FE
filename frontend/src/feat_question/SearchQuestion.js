import SearchIcon from '@mui/icons-material/Search';
import { TextField } from "@mui/material";
import React, { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import "./css/SearchQuestion.css";

const SearchQuestion = (props) => {
    const [item, setItem] = useState({
        output: "",
    });  // (title로 검색)

    const searchQuestion = props.searchQuestion; // 검색 함수: App에서 받아온다.

    const {output} = item;

    //  입력 함수
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setItem({
            ...item,
            [name] : value
        });
    }

    // 버튼 클릭시
    const onButtonClick = () => {
        searchQuestion(item);
        setItem({
            output: ""
        });
    }

    //enter로도 검색됨
    const enterKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
            onButtonClick();
        }
    };

    return (
        <div className='searchQ'>
        <TextField 
            className="searchBox" 
            type="text" 
            placeholder="문답을 검색해보세요." 
            onChange={onInputChange}
            onKeyPress={enterKeyEventHandler}
            variant="standard"
            value={output}
            name="output"
            style={{ 
            width: '160px',
            marginLeft: '10px',
            height: '35px',
            }}
            
            InputProps={{
            style: { fontSize: 12, paddingTop:'2px', color: 'black' }, // placeholder와 입력 텍스트의 크기 설정
            endAdornment: (
                <InputAdornment position="start">
                <SearchIcon className="searchIcon" onClick={onButtonClick}/>
                </InputAdornment>
            ),
            }}
        />
        </div>
    );
}


export default SearchQuestion;