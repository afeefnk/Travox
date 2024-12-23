import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Layout
