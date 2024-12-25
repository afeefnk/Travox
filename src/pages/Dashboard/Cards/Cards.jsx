import React from 'react'
import StatCard from "./StatCard";
import companies from "../../../assets/images/Cards/companies.svg";
import admins from "../../../assets/images/Cards/admins.svg";
import staffs from "../../../assets/images/Cards/staffs.svg";
import active_sub from "../../../assets/images/Cards/active_subscriptions.svg";
import inactive_sub from "../../../assets/images/Cards/inactive_subscriptions.svg";
import "./cards.css";

const Cards = () => {
    const stats = [
        {
          icon: <img src={companies} alt="" className="w-7 h-7" />,
          value: 355,
          label: "Total Companies",
          bgColor:  "bg-[#EEEFFF]",
        },
        {
          icon: <img src={admins} alt="" className="w-7 h-7" />,
          value: 3,
          label: "Total Admin",
          bgColor:  "bg-[#FFF0EC]",
        },
        {
          icon: <img src={staffs} alt="" className="w-7 h-7" />,
          value: 5,
          label: "Total Staffs",
          bgColor: "bg-[#FFF9ED]",
        },
        {
          icon: <img src={active_sub} alt=""className="w-7 h-7" />,
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

export default Cards
