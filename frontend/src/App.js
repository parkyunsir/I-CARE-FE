import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import DiaryDetail from "./feat_diary/DiaryDetail";
import DiaryCalendar from "./feat_diary/DiaryCalendar";
import AddDiary from "./feat_diary/AddDiary";
import QuestionHome from "./feat_question/QuestionHome";
import ProfileList from "./feat_profile/ProfileList";
import ProfileDetail from "./feat_profile/ProfileDetail";
import Login from "./feat_login/Login";
import SignUp from "./feat_login/SignUp";
import Splash from "./feat_login/Splash";
import AddChild from "./feat_login/AddChild";
import OnBoarding1 from "./feat_login/OnBoarding1";
import OnBoarding2 from "./feat_login/OnBoarding2";
import OnBoarding3 from "./feat_login/OnBoarding3";
import OnBoarding4 from "./feat_login/OnBoarding4";
import SelectChild from "./feat_login/SelectChild";
import ChatBotStart from "./feat_chatbot/ChatBotStart";
import ChatBotFeedbackList from "./feat_chatbot/ChatBotFeedbackList";
import KakaoAccountVerify from './feat_settings/KakaoAccountVerify';
import MainSettings from './feat_settings/MainSettings';
import PasswordChange from './feat_settings/PasswordChange';
import PasswordVerify from './feat_settings/PasswordVerify';


function App() {
  // localStorage.removeItem("ACCESS_TOKEN");
  return (
    <Routes>
      {/*챗봇*/}
      <Route path="/chatbot" element={<ChatBotStart />} />
      <Route path="/chatbot/feedback" element={<ChatBotFeedbackList/>} />
      
      {/* 일기 */}
      <Route path="/diary" element={<DiaryCalendar />} />
      <Route path="/diary/detail" element={<DiaryDetail />} />
      <Route path="/diary/add" element={<AddDiary />} />

      {/* 프로필(워드클라우드) */}
      <Route path="/profile" element={<ProfileList />} />
      <Route path="/profile/detail" element={<ProfileDetail />} />

      {/* 1일 1질문 */}
      <Route path="/question" element={<QuestionHome />} />

      {/* 로그인 */}
      <Route path="/login" element={<Login />} />

      {/* 회원가입 */}
      <Route path="/signup" element={<SignUp />} />

      {/* 자녀추가 */}
      <Route path="/addchild" element={<AddChild />} />

      {/* 자녀선택 */}
      <Route path="/selectchild" element={<SelectChild />} />

      {/* 스플래시 */}
      <Route path="/" element={<Navigate to="/splash" />} />
      <Route path="/splash" element={<Splash />} />

      {/* 온보딩 */}
      <Route path="/onboarding1" element={<OnBoarding1 />} />
      <Route path="/onboarding2" element={<OnBoarding2 />} />
      <Route path="/onboarding3" element={<OnBoarding3 />} />
      <Route path="/onboarding4" element={<OnBoarding4 />} />

      {/* 설정 */}
      <Route path="/kakaoaccount" element={<KakaoAccountVerify/>} />
      <Route path="/mainsettings" element={<MainSettings />} />
      <Route path="/changepassword" element={<PasswordChange/>} />
      <Route path="/verifypassword" element={<PasswordVerify/>} />

    </Routes>
  );
}

export default App;
