import React from "react";
import "./App.css";
import Navbar from "./Navbar";

const PageFirst = ({children}) => {
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