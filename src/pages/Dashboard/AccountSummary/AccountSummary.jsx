import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./accountsummary.css";
import income from "../../../assets/images/AccountSummary/income.svg";
import expense from "../../../assets/images/AccountSummary/expense.svg";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the plugin

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels); // Register the plugin

const AccountSummary = () => {
  const data = {
    labels: ["Service", "Transport", "Health", "Food", "Shop", "Savings"],
    datasets: [
      {
        data: [25, 12, 11, 17, 15, 20],
        backgroundColor: ["#45B020", "#1192EF", "#9614FC", "#D22CD6", "#F5640D", "#821d30"],
        hoverOffset: 30,
      },
    ],
  };

  const config = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        font: {
          family: "Switzer Medium, sans-serif", // Customize font family
          size: 12,                   // Customize font size
        },
        color: "#FFFFFF", // Set data labels color to white
        anchor: "center",
        align: "center",
        padding: 10,
        display: true,
        formatter: (value, context) => {
          const dataset = context.chart.data.datasets[context.datasetIndex];
          const total = dataset.data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(0); // Calculate percentage with 1 decimal
          return `${percentage}%`; // Display as percentage
        },
      },
      legend: {
        position: "bottom", // Move legend to the bottom
        align: "center",
        labels: {
          usePointStyle: true, // Use point-style indicators
          font: {
            size: 10, // Custom font size for legend
            family: "Switzer Regular, sans-serif", // Custom font family for legend
          },
          color: "#25282B", // Custom font color for legend
          padding: 18,
        },
      },
    },
  };
  
  
  
  

  return (
    <div className="maintab">
      <h2 className="accountsummary">Account Summary</h2>
      <div className="flex gap-5 justify-center reports">
        <div className="incomebox w-full">
          <div className="flex gap-2">
            <img src={income} alt="" />
            <p className="reporttext">Income</p>
          </div>
          <p className="amount">+$27,785</p>
        </div>
        <div className="expensebox w-full">
          <div className="flex gap-2">
            <img src={expense} alt="" />
            <p className="reporttext">Expense</p>
          </div>
          <p className="amount">-$27,785</p>
        </div>
      </div>

      {/* Container for the chart */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: "280px", height: "280px", cursor:"pointer" }}>
          <Doughnut data={data} options={config} />
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
