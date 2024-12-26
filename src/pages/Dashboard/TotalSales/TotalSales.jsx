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
        [20000, 18000, 16000, 14000, 13000, 11000, 9000, 10000, 8000, 7000, 6000, 5000], // Company A
        [22000, 21000, 20000, 19000, 18000, 17000, 16000, 15000, 14000, 13000, 12000, 11000], // Company B
      ];
    default:
      return [
        [12000, 8000, 30000, 20000, 15000, 120000, 10000, 25000, 18000, 35000, 20000, 30000], // Default: Company A
        [10000, 7000, 25000, 19000, 14000, 115000, 9000, 23000, 17000, 34000, 19000, 29000], // Default: Company B
      ];
  }
};

const TotalSales = ({ companies = ["Company A", "Company B"], ranges = ["1 Year", "6 Months", "30 Days", "15 Days", "7 Days"] }) => {
  const [selectedRange, setSelectedRange] = useState("1 Year");

  // Get the dynamic data based on selected range
  const chartData = getSalesDataForRange(selectedRange);

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
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
    },
    yaxis: {
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
                ? "text-[#254396] border-btm border-t-2 border-t-transparent border-[#254396]"
                : "text-[#ACACAC] hover:text-[#7b7b7b]"
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
