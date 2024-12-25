import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./pages/Layout";
import AdminManagement from "./pages/AdminManagement/AdminManagement";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
