import React from 'react';
import Modal from '../../Modal';
import '../css/qmodal/MAddQuestion.css';
import '../css/qmodal/ModalOneButton.css';

const MDoneQuestion = (props) => {
  const isOpen = props.isOpen;
  const onClose = props.onClose;

  if(!isOpen) return null;
  return (
    <Modal onClose={onClose}>
      <p className="modalQ">오늘의 질문을 작성하셨습니다.</p>
      <div className="modalClose">
        <button onClick={onClose}>닫기</button>
      </div>
    </Modal>
  );
}

export default MDoneQuestion;