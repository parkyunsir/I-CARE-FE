import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Splash.css'; // CSS 파일을 추가합니다.

const Splash = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/login'); // 3초 후에 로그인 페이지로 이동
      }, 3000);
  
      return () => {
        clearTimeout(timer);
      };
    }, [navigate]);
  
    return (
      <div className="splash-screen">
        <img
          src={`${process.env.PUBLIC_URL}/splash.png`}
          alt="Splash"
          className="splash-image" // 추가: 이미지에 클래스 적용
        />
      </div>
    );
  };
  
  export default Splash;