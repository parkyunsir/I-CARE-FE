import React, { useEffect, useState } from "react";
import "./css/ChatbotFeedbackHome.css";
import Select from 'react-select';
import { Divider, List, IconButton } from "@mui/material";
import { call } from "../api/ApiService";
import ChatbotFeedbackList from "./ChatbotFeedbackList";
import SearchFeedback from "./SearchFeedback";
import Header from "../Header";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useNavigate } from "react-router-dom";
import MSearchChatbotFeedback from "./modal/MSearchChatbotFeedback";
import PageFirst from "../PageFirst";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

const options = [
  { value: '오래된순', label: '오래된순' },
  { value: '최신순', label: '최신순' }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#6271f5' : null,
    color: state.isFocused ? '#fff' : '#000',
    paddingLeft: 10,
    borderRadius: '2px',
    textAlign: 'center',
    fontSize: '12px',
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: '10px',
    textAlign: 'center',
    fontSize: '13px',
  }),
};

const ChatbotFeedbackHome = () => {
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState(options[1]); // 기본값을 최신순으로 설정
  const [modalOpen, setModalOpen] = useState(false);
  
  const navigate = useNavigate();
  const childId = localStorage.getItem("childId");

  const handleSortChange = (selectedOption) => {
    setSortOrder(selectedOption);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => { 
    //const childId = "2c94ce259053420201905360edcc0001";
    call(`/api/chatbot/feedback/list?childId=${childId}`,"GET",null)
    .then((response) => {
      if (response) {
        setItems(response);
        console.log(response);
      }
    })
    .catch((error) => {
      console.error("Error fetching items", error);
    });
  },[]);

  const searchChatbotFeedback = (item) => {
    //const childId = "temporary-childId";
    call(`/api/question/search?childId=${childId}&output=${item.output}`, "GET", null)
    .then((response) => {
        if (response && response.length > 0) {
          setItems(response);
        } else {
          setModalOpen(true);
        }
    })
  }

  let chatbotFeedbackNewList = items.length > 0 && (
      <List>
        {items.map((item, index) => (
          <React.Fragment key={item.chatbotFeedbackId}>
            <ChatbotFeedbackList key={item.chatbotFeedbackId} item={item} />
            {index < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
  );

  let chatbotFeedbackOldList = items.length > 0 && (
      <List>
        {items.slice().reverse().map((item, index) => (
          <React.Fragment key={item.chatbotFeedbackId}>
          <ChatbotFeedbackList key={item.chatbotFeedbackId} item={item} />
          {index < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
  );

  const questionList = sortOrder === options[1] ? chatbotFeedbackNewList : chatbotFeedbackOldList;

  return (
    <PageFirst>
    <div>

      <Header
        title={"챗봇피드백1"}
        leftChild={<SettingsOutlinedIcon sx={{ cursor: 'pointer' }} onClick={() => navigate('/')} />}
        rightChild={<PermIdentityOutlinedIcon sx={{ cursor: 'pointer' }} onClick={() => navigate('/')} />}
      />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={() => navigate('/chatbot')} sx={{ marginRight: 0.1 }}>
          <ArrowBackIosOutlinedIcon />
        </IconButton>
        <div style={{ marginLeft: 'auto', marginRight: 'auto', fontWeight: 'bold' }}>
        AI 대화 피드백
        </div>
      </div>

      <div className="search"> 
        <Select
          value={sortOrder}
          onChange={handleSortChange}
          options={options}
          styles={customStyles}
          className="selectBox"
        />
        
        <SearchFeedback searchChatbotFeedback={searchChatbotFeedback} />
        <MSearchChatbotFeedback isOpen={modalOpen} onClose={handleCloseModal} />
        
      </div>
      
      <div className="ChatbotFeedbackList">
          {questionList}  
      </div>

    </div>
    </PageFirst>
  );
}

export default ChatbotFeedbackHome;
