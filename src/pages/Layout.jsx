import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        {/* Add overflow-auto or overflow-y-auto to make content scrollable */}
        <div className="flex-1 overflow-y-auto bg-[#FBFBFB]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
