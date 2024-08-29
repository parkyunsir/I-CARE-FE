import React, { useState } from 'react';
import Modal from '../../Modal';
import '../css/modal/ModalOneButton.css';
import '../css/modal/MAddIcon.css';

const MAddIcon = (props) => {
  const isOpen = props.isOpen;
  const onChange = props.onChange;
  const onSubmit = props.onSubmit;
  const onClose = props.onClose;
  const icons = props.icons;
  const [selectedIcon, setSelectedIcon] = useState();

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
    onChange({target: {name: 'icon', value: icon}});
  }

  if(!isOpen) return null;
  return (
    <Modal onClose={onClose}>
      <h4>오늘 하루를 아이콘으로 표현하면?</h4>
      <div className="modalIcons">
        {icons.map((icon) => 
          <div className={`modalIcon ${selectedIcon === icon ? 'selected' : ''}`}
            key={icon} onClick={() => handleIconClick(icon)}>
            {icon}
          </div>
        )}
      </div>
      <p className="modalP">다음 아이콘 중 하나를 선택해주세요!</p>
      <button className="modalOneButton" onClick={onSubmit}>확인</button>
    </Modal>
  );
}

export default MAddIcon;