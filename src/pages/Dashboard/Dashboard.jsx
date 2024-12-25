import React from "react";
import Cards from "./Cards/Cards";
import SubscriptionTable from "./Subscription/SubscriptionTable";
import AccountSummary from "./AccountSummary/AccountSummary";

const Dashboard = () => {
  return (
    <div className="bg-[#FBFBFB]">
      <Cards />
      <div className="flex">
        <SubscriptionTable />
        <AccountSummary />
      </div>
    </div>
  );
};

export default Dashboard;
