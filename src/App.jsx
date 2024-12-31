import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./pages/Layout";
import AdminManagement from "./pages/AdminManagement/AdminManagement";
import AddUser from "./pages/UserManagement/AddUser/AddUser";
import ManageUser from "./pages/UserManagement/ManageUser/ManageUser";
import StaffManagement from "./pages/StaffManagement/StaffManagement";
import Subscriptions from "./pages/Subscriptions/Subscriptions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<AdminLogin />} />
        </Route>

        <Route path="/admin" element={<Layout/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="adminmanage" element={<AdminManagement/>}/>
          <Route path="adduser" element={<AddUser/>}/>
          <Route path="manageuser" element={<ManageUser/>}/>
          <Route path="staffmanagement" element={<StaffManagement/>}/>
          <Route path="subscriptions" element={<Subscriptions/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
