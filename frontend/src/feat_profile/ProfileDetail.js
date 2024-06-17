import React from "react";
import { useLocation } from "react-router-dom";
import './css/ProfileDetail.css';
import Header from "../Header";
import PageFirst from "../PageFirst";

const ProfileDetail = () => {
  const location = useLocation();
  const date = location.state?.date;
  const weekday = location.state?.weekday;
  const image = location.state?.image;

  return (
    <PageFirst>
    <div className="profileDetail">
      <Header title="워드클라우드" type="back" />
      <div className="date">
        {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일({weekday})
      </div>
      <div className="wordCloud">
        <img src={image} alt="wordCloud" />
      </div>
    </div>
    </PageFirst>
  );
}

export default ProfileDetail;