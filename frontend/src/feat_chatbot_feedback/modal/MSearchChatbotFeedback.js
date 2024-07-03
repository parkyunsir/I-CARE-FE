import React from 'react';
import Modal from '../../Modal';
import '../css/cfmodal/ModalOneButton.css';

const MSearchChatbotFeedback = (props) => {
  const isOpen = props.isOpen;
  const onClose = props.onClose;

  if(!isOpen) return null;
  return (
    <Modal onClose={onClose}>
      <p className="modalCF"> 검색 결과가 없습니다.</p>
      <div className="modalClose">
        <button onClick={onClose} >닫기</button>
      </div>
    </Modal>
  );
}

export default MSearchChatbotFeedback;