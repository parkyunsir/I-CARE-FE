import React from "react";
import "./Navbar.css";
import { Link, useLocation, matchPath } from "react-router-dom";

const Navbar = () => {
  // 현재 주소
  const location = useLocation();

  const isChatBotLink = matchPath({path: '/chatbot/*'}, location.pathname); //00봇
  const isSecondLink = matchPath({path: '/second/*'}, location.pathname); //실시간 영상
  const isDiaryLink = matchPath({path: '/diary/*'}, location.pathname); //공감일기
  const isProfileLink = matchPath({path: '/profile/*'}, location.pathname); //워드 클라우드
  const isQuestionLink = matchPath({path: '/question/*'}, location.pathname); //일일문답
  return (
    <nav className="navbar">
      
      {/* 00봇 아이콘 */}
      <Link to="/chatbot" className="nav-link" style={{ textDecoration: 'none', fontSize:'0.7rem'}}>
        <div>
          {isChatBotLink ? (
          <img src="/bot.png" alt="챗봇" /> //선택 했을 때
          ) : (
          <img src="/bot_un.png" alt="챗봇" /> // 선택 안 했을 때
          )}
          <div className={isChatBotLink ? 'active' : 'inactive'}>00봇</div>
        </div>
      </Link>

      {/* 실시간 영상 */}
      <Link to="/second" className="nav-link" style={{ textDecoration: 'none', fontSize:'0.7rem'}}>
        <div>
          {isSecondLink ? (
          <img src="/video.png" alt="실시간 영상" /> //선택 했을 때
          ) : (
          <img src="/video_un.png" alt="실시간 영상" /> // 선택 안 했을 때
          )}
          <div className={isSecondLink ? 'active' : 'inactive'}>실시간 영상</div>
        </div>
      </Link>

      {/* 일기 작성 */}
      <Link to="/diary" className="nav-link" style={{ textDecoration: 'none', fontSize:'0.7rem'}}>
        <div> 
          {isDiaryLink ? (
          <img src="/diary.png" alt="공감일기" /> //선택 했을 때
          ) : (
          <img src="/diary_un.png" alt="공감일기" /> // 선택 안 했을 때
          )}
          <div className={isDiaryLink ? 'active' : 'inactive'}>공감일기</div>
        </div>
      </Link>

      {/* 워드 클라우드 */}
      <Link to="/profile" className="nav-link" style={{ textDecoration: 'none', fontSize:'0.7rem'}}>
        <div>
          {isProfileLink ? (
          <img src="/word_cloud.png" alt="워드클라우드" /> //선택 했을 때
          ) : (
          <img src="/word_cloud_un.png" alt="워드클라우드" /> // 선택 안 했을 때
          )}
          <div className={isProfileLink ? 'active' : 'inactive'}>워드클라우드</div>
        </div>
      </Link>

      {/* 1일 1문답 */}
      <Link to="/question" className="nav-link" style={{ textDecoration: 'none', fontSize:'0.7rem'}}>
        <div>
          {isQuestionLink ? (
          <img className="big_image" src="/question.png" alt="일일문답" /> //선택 했을 때
          ) : (
          <img className="big_image" src="/question_un.png" alt="일일문답" /> // 선택 안 했을 때
          )}
          <div className={isQuestionLink ? 'active' : 'inactive'}>일일문답</div>
        </div>
      </Link>

    </nav>
  );
};

export default Navbar;