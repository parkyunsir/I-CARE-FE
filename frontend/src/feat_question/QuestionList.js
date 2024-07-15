import React, { useState } from "react";
import { ListItem, ListItemText, FormControl } from "@mui/material";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import "./css/QuestionList.css";

const QuestionList = (props) => {
    const item = props.item;
    const output = item.output;
    const input = item.input;
    const day = item.date;
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleChange = () => {
        setIsOpen(!isOpen); // 토글 함수
    };

    return (
        <ListItem>
            <ListItemText onClick={(e) => e.stopPropagation()} >
                <div className="questList">
                <FormControl fullWidth variant="standard" style={{ margin: 'auto' }}>
                
                <div style={{ flexGrow: 1, height: '48px', display: 'flex', alignItems: 'center' }}>
                <span className="inputList">{input}</span> {/* 질문 */}
                <ArrowDropDownOutlinedIcon style={{ cursor: 'pointer', marginLeft: 'auto' }} onClick={handleToggleChange}/>
                </div>
                <span style={{ fontSize:'11px', color:"#aaa", marginTop:'-8px', marginBottom: '8px' }}>{day}</span>
                
                {isOpen && (
                        <span className="outputList">{output}</span>
                )
                }
                
                </FormControl>
                </div>
            </ListItemText>
        </ListItem>
    );
};

export default QuestionList;

