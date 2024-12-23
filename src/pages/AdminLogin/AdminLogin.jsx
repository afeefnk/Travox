import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { BASE_URL } from "../../Utils/Config";
import "./adminlogin.css";
import logo from "../../assets/images/Logo.svg";
import { useEffect } from "react";

const AdminLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check for missing email or password
    if (!email || !password) {
      toast.error("Username and Password are required");
      return;
    }
  
    try {
      setLoading(true);  // Start loading indicator
      console.log("Attempting to send request to backend...");
  
      // Make the API request
      const response = await axios.post(`${BASE_URL}/superadmin/admin-login/`, {
        email: email,
        password: password,
      });
  
      console.log("Response:", response);
  
      // Check for a successful response
      if (response.status === 200) {
        const adminToken = response.data.access;
        const expirationTime = 24 * 60 * 60 * 1000;  // 1 day expiration
        const logoutTime = new Date().getTime() + expirationTime;
  
        // Store the token and logout time in localStorage
        localStorage.setItem("adminAuthToken", adminToken);
        localStorage.setItem("logoutTime", logoutTime);
  
        // Show success toast
        console.log("Showing success toast...");
        toast.success("Admin Login Success");
  
        // Wait for toast to be visible before navigating
        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 1500);  // Wait for 1.5 seconds before navigating
      } else {
        throw new Error(response.data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error during login request:", error);
  
      // Handle different error scenarios
      if (error.response && error.response.status === 400) {
        toast.error("Invalid username or password");
      } else {
        toast.error(
          error.message || "An error occurred during login. Please try again later."
        );
      }
    } finally {
      setLoading(false);  // Stop loading indicator
    }
  };

  useEffect(() => {
    const adminToken = localStorage.getItem("adminAuthToken");
    const logoutTime = localStorage.getItem("logoutTime");

    if (adminToken && logoutTime) {
      const currentTime = new Date().getTime();
      if (currentTime >= logoutTime) {
        // Token has expired, perform logout
        localStorage.removeItem("adminAuthToken");
        localStorage.removeItem("logoutTime");
        navigate("/");
      } else {
        navigate("/admin/dashboard");
      }
    }
  }, [navigate]);

  return (
    <div className="flex flex-col h-screen items-center bg-custom-pattern bg-center justify-center adminloginscreen">
      <Toaster position="top-center" />
      {/* Logo Section */}
      <div className="mb-9">
        <img src={logo} alt="Logo" className="adminlogo" />
      </div>

      {/* Login Card Section */}
      <div className="bg-white rounded-lg mains">
        <h2 className="mb-7 lg:ml-12 text-[#25282B] loginheading">
          Admin Login
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="text-[#25282B] labels">Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="rounded-lg mt-1 email outline-none inputs"
            />
          </div>

          <div className="relative">
            <label className="text-[#25282B] labels">Password</label>
            <div className="relative w-full">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
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
            <Link to="/" className="hover:underline forgotpassword">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#254396] text-white py-2 px-4 rounded-lg my-6 hover:bg-[#1d3476] transition signin"
            disabled={loading}
          >
            {loading ? "Please Wait..." : <p>Log In</p>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
