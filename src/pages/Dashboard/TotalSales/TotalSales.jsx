import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./totalsales.css";

// Function to get dynamic data for each selected range
const getSalesDataForRange = (range) => {
  switch (range) {
    case "1 Year":
      return [
        [12000, 8000, 30000, 20000, 15000, 120000, 10000, 25000, 18000, 35000, 20000, 30000], // Company A
        [10000, 7000, 25000, 19000, 14000, 115000, 9000, 23000, 17000, 34000, 19000, 29000], // Company B
      ];
    case "6 Months":
      return [
        [15000, 25000, 35000, 30000, 40000, 50000], // Company A
        [20000, 22000, 30000, 25000, 31000, 34000], // Company B
      ];
    case "30 Days":
      return [
        [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000], // Company A
        [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500], // Company B
      ];
    case "15 Days":
      return [
        [12000, 8000, 15000, 20000, 10000, 12000, 18000, 15000, 25000, 16000, 14000, 22000, 18000, 20000, 21000], // Company A
        [10000, 7000, 14000, 19000, 11000, 13000, 17000, 14000, 23000, 15000, 12000, 21000, 16000, 19000, 20000], // Company B
      ];
    case "7 Days":
      return [
        [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 5000, 4500, 2000, 3400, 2600, 7500, 8600, 25000, 45000, 43000, 35000], // Company A
        [1500, 2500, 3500, 4500, 3000, 4500, 1500, 3500, 4200, 3200, 4100, 6300, 2500, 5200, 9500, 15000, 37000, 45000, 28000, 31000], // Company B
      ];
    default:
      return [
        [12000, 8000, 30000, 20000, 15000, 120000, 10000, 25000, 18000, 35000, 20000, 30000], // Default: Company A
        [10000, 7000, 25000, 19000, 14000, 115000, 9000, 23000, 17000, 34000, 19000, 29000], // Default: Company B
      ];
  }
};

// Function to group the 30 days into intervals of 3 days (1-3, 4-6, etc.)
const groupDataFor30Days = (data) => {
  let groupedData = [];
  for (let i = 0; i < data.length; i += 3) {
    // Sum every 3 days
    groupedData.push(data.slice(i, i + 3).reduce((a, b) => a + b, 0));
  }

  // If there are remaining days (less than 3), add them as a final group
  if (data.length % 3 !== 0) {
    groupedData.push(data.slice(groupedData.length * 3).reduce((a, b) => a + b, 0));
  }

  return groupedData;
};

// Function to group the 15 days into intervals of 2 days (1-2, 3-4, etc.)
const groupDataFor15Days = (data) => {
  let groupedData = [];
  for (let i = 0; i < data.length; i += 2) {
    // Sum every 2 days
    groupedData.push(data.slice(i, i + 2).reduce((a, b) => a + b, 0));
  }

  // If there are remaining days (less than 2), add them as a final group
  if (data.length % 2 !== 0) {
    groupedData.push(data.slice(groupedData.length * 2).reduce((a, b) => a + b, 0));
  }

  return groupedData;
};

// Function to group the 7 days into intervals of 3 days (1-3, 4-6, etc.)
const groupDataFor7Days = (data) => {
  let groupedData = [];
  for (let i = 0; i < data.length; i += 3) {
    // Sum every 3 days
    groupedData.push(data.slice(i, i + 3).reduce((a, b) => a + b, 0));
  }

  // If there are remaining days (less than 3), add them as a final group
  if (data.length % 3 !== 0) {
    groupedData.push(data.slice(groupedData.length * 3).reduce((a, b) => a + b, 0));
  }

  return groupedData;
};

// Generate dynamic labels for x-axis based on selected range
const getXAxisCategories = (range) => {
  if (range === "30 Days") {
    // Create labels for every 5th day (Day 5, Day 10, Day 15, ...)
    const dayRanges = [];
    for (let i = 5; i <= 30; i += 5) {
      dayRanges.push(`Day ${i}`);
    }
    return dayRanges;
  } else if (range === "15 Days") {
    const dayRanges = [];
    for (let i = 2; i <= 14; i += 2) {
      dayRanges.push(`Day ${i}`);
    }
    dayRanges.push("Day 15");  // Manually add Day 15 at the end
    return dayRanges;
  } else if (range === "7 Days") {
    const dayRanges = [];
    for (let i = 1; i <= 7; i += 1) {
      return ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];
    }
    return dayRanges;
  } else {
    return [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  }
};



const TotalSales = ({ companies = ["Company A", "Company B"], ranges = ["1 Year", "6 Months", "30 Days", "15 Days", "7 Days"] }) => {
  const [selectedRange, setSelectedRange] = useState("1 Year");

  // Get the dynamic data based on selected range
  const chartData = getSalesDataForRange(selectedRange);

  // For "30 Days", group the data into 3-day intervals
  if (selectedRange === "30 Days") {
    chartData[0] = groupDataFor30Days(chartData[0]); // Group Company A data for 30 days
    chartData[1] = groupDataFor30Days(chartData[1]); // Group Company B data for 30 days
  }

  // For "15 Days", group the data into 2-day intervals
  if (selectedRange === "15 Days") {
    chartData[0] = groupDataFor15Days(chartData[0]); // Group Company A data for 15 days
    chartData[1] = groupDataFor15Days(chartData[1]); // Group Company B data for 15 days
  }

  // For "7 Days", group the data into 3-day intervals
  if (selectedRange === "7 Days") {
    chartData[0] = groupDataFor7Days(chartData[0]); // Group Company A data for 7 days
    chartData[1] = groupDataFor7Days(chartData[1]); // Group Company B data for 7 days
  }

  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: { height: 300 },
            xaxis: { labels: { rotate: -45 } },
          },
        },
      ],
    },
    xaxis: {
      categories: getXAxisCategories(selectedRange), // Use dynamic categories based on selected range
    },
    yaxis: {
      min: 0, // Set min value to 0k
      max: 120000, // Set max value to 120k
      labels: {
        formatter: (val) => `$${val / 1000}k`,
        style: { colors: "#7c8db5" },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    dataLabels: { enabled: false },
    tooltip: {
      y: {
        formatter: (val) => `$${val.toLocaleString()}`,
      },
    },
    fill: {
      colors: chartData.map((_, index) => index % 2 === 0 ? "#E3E9F0" : "#254396"),
    },
    colors: chartData.map((_, index) => index % 2 === 0 ? "#E3E9F0" : "#254396"),
    legend: {
      position: "top",
      horizontalAlign: "right",
      offsetX: 0,
    },
  };

  const chartSeries = companies.map((company, index) => ({
    name: company,
    data: chartData[index],
  }));

  return (
    <div className="sales">
      <h2 className="totalsaleshead">Total Sales</h2>
      <div className="flex mb-6 border-b">
        {ranges.map((range) => (
          <button
            key={range}
            onClick={() => setSelectedRange(range)}
            className={`yearcategory ${
              selectedRange === range
                ? "text-[#254396] border-btm border-t-2 border-t-transparent border-[#254396] font-switzerM"
                : "text-[#ACACAC] hover:text-[#7b7b7b] font-switzerR"
            }`}
          >
            Last {range}
          </button>
        ))}
      </div>
      <div className="innerbox">
        <h3 className="salesanalytics">Sales Analytics</h3>
        <div className="overflow-hidden cursor-pointer">
          <Chart options={chartOptions} series={chartSeries} type="bar" height={400} />
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
