import React, { useState } from "react";
import Modal from '../../Modal';
import { postProfile } from "../api/api-profile";

const MAddProfile = (props) => {
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const onUpdate = props.onUpdate;
  const initProfileState = props.initProfileState;
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseLoading = () => {
    setIsLoading(false);
  }

  const onAddProfile = () => {
    setIsLoading(true);
    postProfile()
      .then(response => {
        if(response) {
          setIsLoading(false);
          onUpdate(response);
          onClose();
          initProfileState();
        }
      });
  }

  if(!isOpen) return null;
  return (
    <Modal onClose={onClose}>
      <h4>워드클라우드 프로필을 생성하시겠습니까?</h4>
      <div className="modalTwoButton">
        <button className="yes" onClick={onAddProfile}>생성</button>
        <button className="no" onClick={onClose}>취소</button>
      </div>
      {isLoading && 
        <Modal onClose={handleCloseLoading}>
          <h3>생성 중</h3>
          <p>5초 이내 생성됩니다.</p>
        </Modal>}
    </Modal>
  );
}

export default MAddProfile;