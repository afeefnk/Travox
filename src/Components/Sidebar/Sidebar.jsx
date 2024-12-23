import React from 'react'
import logo from "../../assets/images/Logo.svg";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="h-screen bg-white flex flex-col items-center transition-all duration-300 mainsidebar">
      <img src={logo} alt="Travox Logo" className="logo mb-8" />
    </div>
  )
}

export default Sidebar
