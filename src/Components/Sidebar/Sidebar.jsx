import React, { useEffect, useState } from "react";
import logo from "../../assets/images/Logo.svg";
import dashboard from "../../assets/images/Sidebar/dashboard.svg";
import admin_management from "../../assets/images/Sidebar/admin_management.svg";
import user_management from "../../assets/images/Sidebar/user_management.svg";
import staff_management from "../../assets/images/Sidebar/staff_management.svg";
import subscription from "../../assets/images/Sidebar/subscriptions.svg";
import accounts from "../../assets/images/Sidebar/accounts.svg";
import permissions from "../../assets/images/Sidebar/permissions.svg";
import change_pswd from "../../assets/images/Sidebar/change_password.svg";
import logout from "../../assets/images/Sidebar/logout.svg";
import "./sidebar.css";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState(() => {
    return localStorage.getItem("activeItem") || "dashboard";
  });

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.includes("dashboard")) {
      setActiveItem("dashboard");
    }
  }, [location]);

  const handleItemClick = (item, path) => {
    setActiveItem(item);
    localStorage.setItem("activeItem", item);
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuthToken");
    navigate("/");
  };
  return (
    <div className="h-screen bg-white flex flex-col  mainsidebar">
      <img src={logo} alt="Travox Logo" className="logo" />
      <div className="divider"></div>

      <nav className="flex flex-col items-center relative sidebartab">
        {/* Dashboard */}

        <div
          onClick={() => handleItemClick("dashboard", "/admin/dashboard")}
          className={`menu activestate ${
            activeItem === "dashboard" ? "active" : ""
          }`}
        >
          <div className="item">
            <img
              src={dashboard}
              alt="Dashboard icon"
              className="sideicon dashboardimg"
            />
            <span className=" spans">Dashboard</span>
          </div>
        </div>

        {/* Admin Management */}
        <div
          onClick={() => handleItemClick("adminmanage", "/admin/adminmanage")}
          className={`menu activestate ${
            activeItem === "adminmanage" ? "active" : ""
          }`}
        >
          <div className="item">
            <img src={admin_management} alt="Admin icon" className="sideicon" />
            <span className="spans">Admin Management</span>
          </div>
        </div>

        {/* User management */}
        <div
          onClick={() => handleItemClick("usermanage", "/admin/usermanage")}
          className={`menu activestate ${
            activeItem === "usermanage" ? "active" : ""
          }`}
        >
          <div className="item">
            <img src={user_management} alt="User icon" className="sideicon" />
            <span className="spans">User Management</span>
          </div>
        </div>

        {/* Staff management */}
        <div
          onClick={() => handleItemClick("staffmanage", "/admin/staffmanage")}
          className={`menu activestate ${
            activeItem === "staffmanage" ? "active" : ""
          }`}
        >
          <div className="item">
            <img src={staff_management} alt="Staff icon" className="sideicon" />
            <span className="spans">Staff Management</span>
          </div>
        </div>

        {/* Subscriptions */}
        <div
          onClick={() => handleItemClick("subscription", "/admin/subscription")}
          className={`menu activestate ${
            activeItem === "subscription" ? "active" : ""
          }`}
        >
          <div className="item">
            <img
              src={subscription}
              alt="Subscription icon"
              className="sideicon"
            />
            <span className="spans">Subscriptions</span>
          </div>
        </div>

        {/* Accounts */}
        <div
          onClick={() => handleItemClick("accounts", "/admin/accounts")}
          className={`menu activestate ${
            activeItem === "accounts" ? "active" : ""
          }`}
        >
           <div className="item">
          <img src={accounts} alt="Accounts icon" className="sideicon" />
          <span className="spans">Accounts</span>
          </div>
        </div>

        {/* Permissions */}
        <div
          onClick={() => handleItemClick("permissions", "/admin/permissions")}
          className={`menu activestate ${
            activeItem === "permissions" ? "active" : ""
          }`}
        >
           <div className="item">
          <img src={permissions} alt="Permission icon" className="sideicon" />
          <span className="spans">Permissions</span>
          </div>
        </div>

        {/* Change Password */}
        <div
          onClick={() => handleItemClick("changepswd", "/admin/changepswd")}
          className={`menu activestate ${
            activeItem === "changepswd" ? "active" : ""
          }`}
        >
           <div className="item">
          <img
            src={change_pswd}
            alt="Change Password icon"
            className="sideicon"
          />
          <span className="spans">Change Password</span>
          </div>
        </div>

        {/* Logout */}
        <div
          onClick={handleLogout}
          className={`menu activestate ${
            activeItem === "logout" ? "active" : ""
          }`}
        >
           <div className="item">
          <img src={logout} alt="Logout icon" className="sideicon" />
          <span className="spans">Logout</span>
          </div>
        </div>
      </nav>
      <div className="divider2"></div>
      <p className="footertext">
        Powered By <br />
        Hoztox Technologies
      </p>
    </div>
  );
};

export default Sidebar;
