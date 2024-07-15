import React from 'react';
import Modal from '../../Modal';
import '../css/qmodal/MAddQuestion.css';
import '../css/qmodal/ModalTwoButton.css';

const MCheckQuestion = (props) => {
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const onOutputClick = props.onOutputClick;


  if(!isOpen) return null;
  return (
    <Modal onClose={onClose}>
      <p className="modalQ">정말 등록하시겠습니까?</p>
      <div className="modalTwoButton">
        <button className="yes" onClick={onOutputClick}>등록</button>
        <button className="no" onClick={onClose}>취소</button>
      </div>
    </Modal>
  );
}

export default MCheckQuestion;