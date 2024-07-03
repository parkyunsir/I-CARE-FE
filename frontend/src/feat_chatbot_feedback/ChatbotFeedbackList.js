import {ListItem, ListItemText, InputBase } from "@mui/material";
import React, { useState } from "react";

const ChatbotFeedbackList = (props) => {
    const [item, setItem] = useState(props.item);

    return (
        <React.Fragment>
        <ListItem>
            
            {/* output - 챗봇 피드백 */} 
            <ListItemText>
                <InputBase 
                    inputProps={{ "aria-label": "naked" }}
                    type="text"
                    id={item.id}
                    name="feedback"
                    value={item.feedback}
                />
            </ListItemText>

        </ListItem>
        </React.Fragment>
    );
};

export default ChatbotFeedbackList;