import React, { useState } from "react";
import { ListItem, ListItemText, FormControl } from "@mui/material";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const QuestionList = (props) => {
    const item = props.item;
    const output = item.output;
    const [isOpen, setIsOpen] = useState(false); 

    const handleToggleChange = () => {
        setIsOpen(!isOpen); // 토글 함수
    };

    const day = props.day;

    return (
        <ListItem>
            <ListItemText onClick={(e) => e.stopPropagation()} >
                <FormControl fullWidth variant="standard" style={{ margin: 'auto' }}>

                <div style={{ flexGrow: 1, height: '48px', display: 'flex', alignItems: 'center' }}>
                <span>z어떤 놀이가 제일 좋아?</span>
                <span style={{ fontSize:'11px', color:"#aaa", marginLeft: 'auto' }}>{day}</span>
                <ArrowDropDownOutlinedIcon style={{ cursor: 'pointer' }} onClick={handleToggleChange}/>
                </div>

                {isOpen && (
                    <div// style={{  display: 'flex', justifyContent: 'space-between'  }}>
                    >
                        <span>{output}</span>
                    </div>
                
                )
                }
                </FormControl>
            </ListItemText>
        </ListItem>
    );
};

export default QuestionList;

