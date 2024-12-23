import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("adminAuthToken");
    navigate("/");
  };

  return (
    <div className='text-center'>
     <h1>Dashboard</h1>
     <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Dashboard
