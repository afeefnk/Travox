import React from "react";
import Chart from "react-apexcharts";
import "./accountsummary.css";
import income from "../../../assets/images/AccountSummary/income.svg";
import expense from "../../../assets/images/AccountSummary/expense.svg";

const AccountSummary = () => {
  const chartOptions = {
    chart: {
      type: "donut",
      responsive: [
        {
          breakpoint: 868,
          options: {
            chart: {
              width: 300,
            },
          },
        },
      ],
    },
    labels: ["Service", "Transport", "Health", "Food", "Shop"],
    colors: ["#45B020", "#1192EF", "#9614FC", "#D22CD6", "#F5640D"],
    legend: {
      position: "bottom", // Position the legend at the bottom
      fontSize: '14px',   // Font size for the legend items
      fontFamily: 'Switzer Regular',  // Custom font family
      fontWeight: 400,    // Font weight for the legend items
      labels: {
        colors: '#25282B', // Color for the legend items text
      },
      itemMargin: {
        horizontal: 10,  
        vertical: 15,
      }, 
    },
  };
  
  

  const chartSeries = [35, 12, 11, 17, 25];

  return (
    <div className=" maintab">
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
      <Chart options={chartOptions} series={chartSeries} type="donut"/>
    </div>
  );
};

export default AccountSummary;
