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
import ChartDataLabels from "chartjs-plugin-datalabels";  // Import the plugin

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);  // Register the plugin

const AccountSummary = () => {
  const data = {
    labels: ['Service', 'Transport', 'Health', 'Food', 'Shop'],
    datasets: [{
      data: [35, 12, 11, 17, 25],
      backgroundColor: [
        '#45B020',
        '#1192EF',
        '#9614FC',
        '#D22CD6',
        '#F5640D'
      ],
      hoverOffset: 30,
    }],
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          font: {
            weight: 'bold',
            size: 14,
          },
          anchor: 'center',  // Position the label in the center of each segment
          align: 'center',   // Align text in the center
          padding: 10,       // Add padding around the text
          display: true,     // Display the data labels
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
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "280px", cursor: "pointer" }}>
        <div style={{ width: "280px", height: "280px" }}>
          <Doughnut data={data} options={config} />
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
