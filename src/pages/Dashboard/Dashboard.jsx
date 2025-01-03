import React from "react";
import Cards from "./Cards/Cards";
import SubscriptionTable from "./Subscription/SubscriptionTable";
import AccountSummary from "./AccountSummary/AccountSummary";
import TotalSales from "./TotalSales/TotalSales";

const Dashboard = () => {
  return (
    <div className="bg-[#FBFBFB]">
      <Cards />
      <div className="flex">
        <SubscriptionTable />
        <AccountSummary />
      </div>
      <TotalSales/>
    </div>
  );
};

export default Dashboard;
