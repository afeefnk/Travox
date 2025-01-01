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
        [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 2800, 2900, 3000],
        [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500, 13000, 13500, 14540, 1700, 2400, 3200, ], // Company B
      ];
    default:
      return [
        [12000, 8000, 30000, 20000, 15000, 120000, 10000, 25000, 18000, 35000, 20000, 30000], // Default: Company A
        [10000, 7000, 25000, 19000, 14000, 115000, 9000, 23000, 17000, 34000, 19000, 29000], // Default: Company B
      ];
  }
};

// Function to group the 30 days into intervals of 3 days
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

// Generate dynamic labels for x-axis based on selected range
const getXAxisCategories = (range) => {
  if (range === "30 Days") {
    const dayRanges = [];
    for (let i = 1; i <= 30; i += 3) {
      const start = i;
      const end = i + 2 > 30 ? 30 : i + 2; // Handle the case where the last group may have less than 3 days
      dayRanges.push(`${start}-${end} Days`);
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
    chartData[0] = groupDataFor30Days(chartData[0]); // Group Company A data
    chartData[1] = groupDataFor30Days(chartData[1]); // Group Company B data
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
        <div className="overflow-hidden">
          <Chart options={chartOptions} series={chartSeries} type="bar" height={400} />
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
