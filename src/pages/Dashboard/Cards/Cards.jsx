import React, { useEffect, useState } from "react";
import StatCard from "./StatCard";
import axios from "axios";
import { BASE_URL } from "../../../Utils/Config";
import companies from "../../../assets/images/Cards/companies.svg";
import admins from "../../../assets/images/Cards/admins.svg";
import staffs from "../../../assets/images/Cards/staffs.svg";
import active_sub from "../../../assets/images/Cards/active_subscriptions.svg";
import inactive_sub from "../../../assets/images/Cards/inactive_subscriptions.svg";
import "./cards.css";

const Cards = () => {
  const [totalCompanies, setTotalCompanies] = useState(0);
  const [totalAdmins, setTotalAdmins] = useState(0);
  const [totalStaffs, setTotalStaffs] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch total companies
    axios
      .get(`${BASE_URL}/superadmin/user_count/`)
      .then((response) => {
        setTotalCompanies(response.data.user_count);
        console.log("Total Companies:", response.data.user_count);
      })
      .catch((error) => {
        console.error("There was an error fetching the total companies:", error);
      });

    // Fetch total admins (add your API endpoint for admins)
    axios
      .get(`${BASE_URL}/superadmin/admin_count/`)
      .then((response) => {
        setTotalAdmins(response.data.admin_count);
        console.log("Total Admins:", response.data.admin_count);
      })
      .catch((error) => {
        console.error("There was an error fetching the total admins:", error);
      })

    axios
      .get(`${BASE_URL}/superadmin/staff_count/`)
      .then((response) => {
        setTotalStaffs(response.data.staff_count);
        console.log("Total Staffs:", response.data.staff_count);
      })
      .catch((error) => {
        console.error("There was an error fetching the total staffs:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const stats = [
    {
      icon: <img src={companies} alt="" className="w-7 h-7" />,
      value: loading ? "Loading..." : totalCompanies,
      label: "Total Companies",
      bgColor: "bg-[#EEEFFF]",
    },
    {
      icon: <img src={admins} alt="" className="w-7 h-7" />,
      value: loading ? "Loading..." : totalAdmins, // Use totalAdmins here
      label: "Total Admin",
      bgColor: "bg-[#FFF0EC]",
    },
    {
      icon: <img src={staffs} alt="" className="w-7 h-7" />,
      value: loading ? "Loading..." : totalStaffs,
      label: "Total Staffs",
      bgColor: "bg-[#FFF9ED]",
    },
    {
      icon: <img src={active_sub} alt="" className="w-7 h-7" />,
      value: 45,
      label: "Active Subscriptions",
      bgColor: "bg-[#F5FDFD]",
    },
    {
      icon: <img src={inactive_sub} alt="" className="w-7 h-7" />,
      value: 30,
      label: "Inactive Subscriptions",
      bgColor: "bg-[#FFF5FD]",
    },
  ];

  return (
    <div className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 cards">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          bgColor={stat.bgColor}
        />
      ))}
    </div>
  );
};

export default Cards;
