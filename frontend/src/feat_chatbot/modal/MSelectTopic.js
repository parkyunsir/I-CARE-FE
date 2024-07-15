import React, { useState, useEffect, useRef } from 'react';
import Modal from '../../Modal';
import '../css/modal/MSelectTopic.css';
import { getTopicList } from '../api/api-chatbot';

const MSelectTopic = (props) => {
  const [topicList, setTopicList] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState({
    chatBotTopicId: null,
    topic: ''
  });
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const onSelectTopic = props.onSelectTopic;
  const topicRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    getTopicList()
      .then(topicList => {
        if(topicList) {
          setTopicList(topicList);
        }
      })
      .then(() => {
        if(topicRef.current) {
          const modalHeight = topicRef.current.scrollHeight;
          const viewportHeight = window.innerHeight;
          if (modalHeight > viewportHeight * 0.4) {
            setIsOverflow(true);
          } else {
            setIsOverflow(false);
          }
        }
      })
  });

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  }

  const onSelect = () => {
    if(selectedTopic.chatBotTopicId) {
      onSelectTopic(selectedTopic.topic);
    }
  }

  if(!isOpen) return null;
  return (
    <Modal onClose={onClose}>
      <div className="modalTopic">
        <img src="/bot_topic.png" alt="챗봇" />
        <h3>AI에게 물어보세요!</h3>
        <div className={`topic-container ${isOverflow ? 'topic-overflow' : ''}`} ref={topicRef}>
          {topicList.map((topic) => 
            <div className={`topic ${selectedTopic.chatBotTopicId === topic.chatBotTopicId ? 'selected' : ''}`}
              key={topic.chatBotTopicId} onClick={() => handleTopicClick(topic)}>
              {topic.topic}
            </div>
          )}
        </div>
        <button className="start" onClick={onSelect}>확인</button>
      </div>
    </Modal>
  )
}

export default MSelectTopic;