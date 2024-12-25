import React from "react";
import "./navbar.css";
import bell from "../../assets/images/Navbar/bell.svg";
import setting from "../../assets/images/Navbar/settings.svg";
import profile from "../../assets/images/Navbar/profile.svg";
import searchIcon from "../../assets/images/Navbar/search.svg";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between relative">

      {/* Left Section */}
      <div className="flex flex-col">
        <span className="text-[#ACACAC] span1">Good Morning,<span className="span2"> Antoni Conte</span></span>
        <span className="text-[#ACACAC] span3">Your overview  is here</span>
      </div>

      {/* Right Section */}

      <div className="flex items-center space-x-3  justify-end">

        {/* Search Bar */}
        <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-[#E9E9E9] focus:outline-none search"
            />
            <img
              src={searchIcon}
              alt="Search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 listserachicon pr-2"
            />
          </div>

        {/* Notification Icon */}
        <button aria-label="Notifications" className="icon-button">
          <img src={bell} alt="bell icon" className="bellimg lg:duration-200" />
        </button>

        {/* Settings Icon */}
        <button aria-label="Settings" className="icon-button">
          <img src={setting} alt="setting icon" className="settingimg" />
        </button>

        {/* User Profile */}
        <img
          src={profile}
          alt="Profile Avatar"
          className="rounded-full profileicon"
        />
      </div>
    </div>
  );
};

export default Navbar;
