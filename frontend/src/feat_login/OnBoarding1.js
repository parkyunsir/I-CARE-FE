import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Splash.css';

const OnBoarding1 = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      localStorage.clear();
      const timer = setTimeout(() => {
        navigate('/onboarding2'); 
      }, 2000);
  
      return () => {
        clearTimeout(timer);
      };
    }, [navigate]);
  
    return (
      <div className="splash-screen">
        <img
          src={`${process.env.PUBLIC_URL}/onboarding1.png`}
          alt="Splash"
          className="splash-image" // 추가: 이미지에 클래스 적용
        />
      </div>
    );
  };
  
export default OnBoarding1;