import React, { useState } from "react";
import "./subcription.css";
import leftarrow from "../../../assets/images/Cards/leftArrow.svg";
import rightarrow from "../../../assets/images/Cards/rightArrow.svg";
const SubscriptionTable = () => {
  const [activeTab, setActiveTab] = useState("Expiry In 30 Days");

  // Sample subscription data with more items
  const subscriptionData = [
    {
      id: 1,
      companyName: "Design Brugg Website",
      startDate: "14 Jun",
      endDate: "14 Aug",
      icon: "B",
      expiryDate: new Date("2025-01-14"),
    },
    {
      id: 2,
      companyName: "Development AI Chatbot",
      startDate: "10 Feb",
      endDate: "10 Jul",
      icon: "A",
      expiryDate: new Date("2024-12-26"),
    },
    {
      id: 3,
      companyName: "Design AI Tool",
      startDate: "01 Dec",
      endDate: "01 Jan",
      icon: "D",
      expiryDate: new Date("2025-01-01"),
    },
    {
      id: 4,
      companyName: "Marketing Dashboard",
      startDate: "01 Dec",
      endDate: "15 Dec",
      icon: "M",
      expiryDate: new Date("2024-12-30"),
    },
    {
      id: 6,
      companyName: "Advanced Web Security",
      startDate: "10 Jan",
      endDate: "20 Jan",
      icon: "W",
      expiryDate: new Date("2025-01-20"),
    },
    {
      id: 7,
      companyName: "Advanced Web Security",
      startDate: "10 Jan",
      endDate: "20 Jan",
      icon: "B",
      expiryDate: new Date("2025-01-20"),
    },
    {
      id: 8,
      companyName: "Advanced Web Security",
      startDate: "10 Jan",
      endDate: "20 Jan",
      icon: "A",
      expiryDate: new Date("2025-01-20"),
    },
    {
      id: 9,
      companyName: "Advanced Web Security",
      startDate: "10 Jan",
      endDate: "20 Jan",
      icon: "D",
      expiryDate: new Date("2025-01-20"),
    },
    {
      id: 10,
      companyName: "Advanced Web Security",
      startDate: "10 Jan",
      endDate: "20 Jan",
      icon: "W",
      expiryDate: new Date("2025-01-20"),
    },
    {
      id: 11,
      companyName: "Advanced Web Security",
      startDate: "10 Jan",
      endDate: "20 Jan",
      icon: "A",
      expiryDate: new Date("2025-01-20"),
    },
  ];

  // Get current date
  const currentDate = new Date();

  // Filter subscriptions based on expiry category
  const getFilteredData = () => {
    const next30Days = new Date(currentDate);
    next30Days.setDate(currentDate.getDate() + 30);

    const next15Days = new Date(currentDate);
    next15Days.setDate(currentDate.getDate() + 15);

    const next7Days = new Date(currentDate);
    next7Days.setDate(currentDate.getDate() + 7);

    switch (activeTab) {
      case "Expiry In 30 Days":
        return subscriptionData.filter(
          (item) =>
            item.expiryDate <= next30Days && item.expiryDate >= currentDate
        );
      case "Expiry In 15 Days":
        return subscriptionData.filter(
          (item) => item.expiryDate <= next15Days && item.expiryDate > next7Days
        );
      case "Expiry In 7 Days":
        return subscriptionData.filter(
          (item) =>
            item.expiryDate <= next7Days && item.expiryDate >= currentDate
        );
      default:
        return subscriptionData;
    }
  };

  // Pagination state and logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Change as necessary
  const filteredCompanies = getFilteredData();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedCompanies = filteredCompanies.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className=" subscriptionmain">
      <div className="tablecontainer">
        <h2 className="subscription">Subscription</h2>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 justify-between">
          {["Expiry In 30 Days", "Expiry In 15 Days", "Expiry In 7 Days"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`expirydays ${
                  activeTab === tab
                    ? "text-[#254396] border-bt border-t-2 border-b-[#254396] border-t-transparent"
                    : "text-[#ACACAC] hover:text-[#7b7b7b]" 
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="companynamehead">Company Name</th>
                <th className="expirydatehead">Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              {paginatedCompanies.map((item) => (
                <tr key={item.id} className="border-b last:border-none cursor-pointer">
                  <td className="firstcol">
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#CBF9FF] font-medium text-blue-500`}
                    >
                      {item.icon}
                    </div>
                    <span className="tablecmpyname">{item.companyName}</span>
                  </td>
                  <td className="secondcol">
                    <span className="tabledates">
                      {item.startDate} - {item.endDate}
                    </span>
                  </td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      <div className="flex justify-between items-center pagination">
  <p className="paginationtext">
    Showing{" "}
    <span className="text-[#25282B]">
      {itemsPerPage * (currentPage - 1) + 1} to{" "}
      {Math.min(currentPage * itemsPerPage, filteredCompanies.length)}{" "}
      of {filteredCompanies.length}
    </span>{" "}
    entries
  </p>
  <div className="flex">
  <button
  onClick={() => handlePageChange(currentPage - 1)}
  disabled={currentPage === 1}
  className={`px-2 py-2 flex items-center ${
    currentPage === 1
      ? "text-gray-300 cursor-not-allowed font-extrabold"
      : "text-[#25282B] font-extrabold"
  }`}
>
  <img
    src={leftarrow}
    alt="Previous"
    className={`w-4 h-4 ${
      currentPage === 1 ? "grayscale opacity-10" : ""
    }`}
    style={{
      filter: currentPage === 1 ? "grayscale(100%)" : "none",
    }}
  />
</button>

    {Array.from({ length: totalPages }).map((_, i) => (
      <button
        key={i}
        onClick={() => handlePageChange(i + 1)}
        className={`px-1 py-2 ${
          currentPage === i + 1
            ? "border-[#25282B] text-[#25282B] underline swipepage"
            : "border-gray-300 text-[#ACACAC] swipepage"
        }`}
      >
        {i + 1}
      </button>
    ))}
    <button
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`px-2 py-2 flex items-center ${
        currentPage === totalPages
          ? "text-gray-100 cursor-not-allowed font-extrabold"
          : "text-[#25282B] font-extrabold"
      }`}
    >
      <img
        src={rightarrow}
        alt="Next"
        className={`w-4 h-4 ${
          currentPage === totalPages ? "grayscale opacity-10" : ""
        }`}
        style={{
          filter: currentPage === totalPages ? "grayscale(100%)" : "none",
        }}
      />
    </button>
  </div>
</div>


    </div>
  );
};

export default SubscriptionTable;
