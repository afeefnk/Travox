import React, { useState } from "react";
import stafficon from "../../assets/images/StaffManagement/staff.svg";
import "./staffmanagement.css";

const StaffManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [activeTab, setActiveTab] = useState("addStaff");

  return (
    <div className=" bg-white staffmanage">
      {/* Heading */}

      <h1 className="staffmanagehead">
        {activeTab === "addStaff" && "Add Staff"}
        {activeTab === "manageAdmin" && "Manage Admin"}
        {activeTab === "staffRoles" && "Staff Roles"}
      </h1>

      {/* Tabs */}
      <div className="flex border-b border-[#EEEFFF] mb-4">
        <button
          onClick={() => setActiveTab("addStaff")}
          className={`stafftabs ${activeTab === "addStaff" ? "active" : ""}`}
        >
          <div className="flex gap-2">
            {activeTab === "addStaff" && <img src={stafficon} alt="" />}
            Add a Staff
          </div>
        </button>
        <button
          onClick={() => setActiveTab("manageAdmin")}
          className={`stafftabs ${activeTab === "manageAdmin" ? "active" : ""}`}
        >
          <div className="flex gap-2">
            {activeTab === "manageAdmin" && <img src={stafficon} alt="" />}
            Manage Admin
          </div>
        </button>
        <button
          onClick={() => setActiveTab("staffRoles")}
          className={`stafftabs ${activeTab === "staffRoles" ? "active" : ""}`}
        >
          <div className="flex gap-2">
            {activeTab === "staffRoles" && <img src={stafficon} alt="" />}
            Staff Roles
          </div>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "addStaff" && (
        <div>
          <form className="grid grid-cols-1 md:grid-cols-2 addstaffform">
            <div>
              <label className="addstafflabel">Name</label>
              <input
                type="text"
                className="w-full border border-[#EEEFFF] addstaffinput"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="addstafflabel">Email</label>
              <input
                type="email"
                className="w-full border border-[#EEEFFF] addstaffinput"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className=" addstafflabel">Mobile Number</label>
              <input
                type="text"
                className="w-full border border-[#EEEFFF] addstaffinput"
                placeholder="Enter your number"
              />
            </div>
            <div>
              <label className=" addstafflabel">User Name</label>
              <input
                type="text"
                className="w-full border border-[#EEEFFF] addstaffinput"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="addstafflabel">Password</label>
              <input
                type="password"
                className="w-full border border-[#EEEFFF] addstaffinput"
                placeholder="Enter your password"
              />
            </div>
            <div
              className={`select-wrappers ${isOpen ? "open" : ""}`}
              onClick={toggleDropdown}
            >
              <label className="addstafflabel">Staff Role</label>
              <div className="relative">
                <select
                  className="addstaffinput custom-selects cursor-pointer outline-none"
                  onBlur={() => setIsOpen(false)}
                >
                  <option>staff role</option>
                  <option>Manager</option>
                  <option>Client</option>
                </select>
              </div>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="bg-[#254396] text-white rounded-md hover:bg-[#1e3679] focus:outline-none duration-200 addstaffbtn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
      {activeTab === "manageAdmin" && (
        <div>
          <p>Content for managing admins goes here.</p>
        </div>
      )}
      {activeTab === "staffRoles" && (
        <div>
          <p>Content for managing staff roles goes here.</p>
        </div>
      )}
    </div>
  );
};

export default StaffManagement;
