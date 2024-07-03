import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const PageFirst = ({children}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("ACCESS_TOKEN")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="app-wrapper">
      <div className="app-container">
        {children}
      </div>
      <Navbar />
    </div>
  )
}

export default PageFirst;