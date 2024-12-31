import React, { useState } from "react";
import stafficon from "../../assets/images/Subscriptions/staff.svg";
import edit from "../../assets/images/Subscriptions/editicon.svg";
import deletes from "../../assets/images/Subscriptions/deleteicon.svg";
import "./subscription.css";

const Subscriptions = () => {
  const [activeTab, setActiveTab] = useState("addSubscriptionplan");

  const plans = [
    { name: "3 Months", subscribers: 35, color: "text-[#23B95F]" },
    { name: "6 Months", subscribers: 25, color: "text-[#2346B9]" },
    { name: "1 Year", subscribers: 15, color: "text-[#B93523]" },
  ];

  return (
    <div className=" bg-white subscriptions">
      {/* Heading */}

      <h1 className="subscriptionhead">
        {activeTab === "addSubscriptionplan" && "Add Subscription"}
        {activeTab === "manageSubsciptions" && "Manage Subscriptions"}
      </h1>

      {/* Tabs */}
      <div className="flex border-b border-[#EEEFFF] mb-4">
        <button
          onClick={() => setActiveTab("addSubscriptionplan")}
          className={`subscriptiontabs ${activeTab === "addSubscriptionplan" ? "active" : ""}`}
        >
          <div className="flex gap-2">
            {activeTab === "addSubscriptionplan" && <img src={stafficon} alt="" />}
            Add a Subscription Plan
          </div>
        </button>
        <button
          onClick={() => setActiveTab("manageSubsciptions")}
          className={`subscriptiontabs ${activeTab === "manageSubsciptions" ? "active" : ""}`}
        >
          <div className="flex gap-2">
            {activeTab === "manageSubsciptions" && <img src={stafficon} alt="" />}
            Manage Subscriptions
          </div>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "addSubscriptionplan" && (
        <div className="bg-white p-6 w-60 text-center">
          <div className="mb-5 p-4 border border-[#25282B] rounded-md">
            <p className="plan">Plan Name: 3 Months</p>
          </div>
          <div className="mb-5 p-4 border border-[#25282B] rounded-md">
            <p className="plan">Duration: 90 Days</p>
          </div>
          <button className="w-full bg-[#254396] text-white hover:bg-[#1d3476] transition duration-300 plansbt">
            Submit
          </button>
        </div>
      )}
      {activeTab === "manageSubsciptions" && (
      
        <div className="space-y-4 w-60 pt-6 pl-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-3 border rounded-md bg-[#F0FCFF] border-[#9ED6F9]"
            >
              <p className="planname">Plan Name: {plan.name}</p>
              <p className={`activesubscribers ${plan.color}`}>
                Active Subscribers: {plan.subscribers}
              </p>
            </div>
          ))}
          <div className="flex justify-end gap-6 items-center mt-2 text-sm text-[#ACACAC]">
            <button className="flex gap-2 subactionbtns">
              Edit
              <img src={edit} alt="" />
            </button>
            <button className="flex gap-2 subactionbtns">
              Delete
              <img src={deletes} alt="" />
            </button>
          </div>
        </div>
     
      )}
    </div>
  );
};

export default Subscriptions;
