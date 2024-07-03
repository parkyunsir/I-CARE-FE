import React, { useEffect, useState } from "react";
import MAddProfile from "./modal/MAddProfile";
import MCheck from "./modal/MCheck";
import { getProfileState } from "./api/api-profile";

const AddProfile = (props) => {
  const onUpdate = props.onUpdate;
  const [profileState, setProfileState] = useState(0);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isCheckPopupOpen, setIsCheckPopupOpen] = useState(false);

  useEffect(() => {
    try {
      getProfileState()
        .then((profileState) => {
          setProfileState(profileState);
        });
    } catch(error) {
      console.error('Error profile state : ', error);
    }
  }, []);

  const handleOpenPopup = () => {
    setIsAddPopupOpen(true);
  }

  const handleClosePopup = () => {
    setIsAddPopupOpen(false);
    setIsCheckPopupOpen(false);
  }

  const addButton = profileState >= 5 ? (
    <button onClick={handleOpenPopup} className="plus"><span>+</span> {profileState}/5</button>
  ) : (
    <button className="block"><span>+</span> {profileState}/5</button>
  );

  return (
    <div>
      {addButton}
      <MAddProfile isOpen={isAddPopupOpen} onClose={handleClosePopup}
        onUpdate={onUpdate} />
      <MCheck isOpen={isCheckPopupOpen} onClose={handleClosePopup} />
    </div>
  );
}

export default AddProfile;