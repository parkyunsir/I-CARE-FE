import React, { useEffect } from 'react';
import "./App.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Header from './Header';

const PageFirst = ({children, header}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("ACCESS_TOKEN")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="app-wrapper">
      <Header title={header.title} type={header.type} routeBack={header.routeBack} />
      <div className="app-container">
        {children}
      </div>
      <Navbar />
    </div>
  )
}

export default PageFirst;