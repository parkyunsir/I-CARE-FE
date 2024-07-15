import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Splash.css'; 

const OnBoarding4 = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      localStorage.clear();
      const timer = setTimeout(() => {
        navigate('/login'); 
      }, 2000);
  
      return () => {
        clearTimeout(timer);
      };
    }, [navigate]);
  
    return (
      <div className="splash-screen">
        <img
          src={`${process.env.PUBLIC_URL}/onboarding4.png`}
          alt="Splash"
          className="splash-image" // 추가: 이미지에 클래스 적용
        />
      </div>
    );
  };
  
  export default OnBoarding4;