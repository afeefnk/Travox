import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("adminAuthToken");
    navigate("/");
  };

  return (
    <div className=' bg-gray-200 w-full'>
     <h1>Dashboard</h1>
     <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Dashboard
