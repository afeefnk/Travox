import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import "./adminlogin.css";
import logo from "../../assets/images/Logo.svg";

const AdminLogin = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Username and Password are required");
      return;
    }
  };

  return (
    <div className="flex flex-col h-screen items-center bg-custom-pattern bg-center justify-center adminloginscreen">
      <Toaster position="top-center" />
      {/* Logo Section */}
      <div className="mb-9">
        <img src={logo} alt="Logo" className="adminlogo"/>
      </div>

      {/* Login Card Section */}
      <div className="bg-white rounded-lg mains">
        <h2 className="mb-7 lg:ml-12 text-[#25282B] loginheading">Admin Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="text-[#25282B] labels">User Name</label>
            <input
              type="text"
              placeholder="User Name"
              className="rounded-lg mt-1 email outline-none inputs"
            />
          </div>

          <div className="relative">
            <label className="text-[#25282B] labels">Password</label>
            <div className="relative w-full">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className="rounded-lg w-full  mt-1 outline-none inputs passwords"
              />
              <span
                className="absolute top-7 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <IoEyeOff size={20} className="text-[#898989]" />
                ) : (
                  <IoEye size={20} className="text-[#898989]" />
                )}
              </span>
            </div>
          </div>

          <div className="flex justify-between text-sm text-[#25282B]">
            <Link to="/forgotpassword"
              className="hover:underline forgotpassword"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#254396] text-white py-2 px-4 rounded-lg my-6 hover:bg-[#1d3476] transition signin"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
