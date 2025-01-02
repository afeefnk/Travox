import React, { useState } from 'react';
import "./totalsales.css";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = () => {
  const [timeframe, setTimeframe] = useState('Last 1 Year');

  const generateLabels = (timeframe) => {
    const today = new Date();
    const labels = [];
  
    const getMonthAndDay = (date) => {
      const month = date.toLocaleString('default', { month: 'short' });
      const day = date.getDate();
      return `${month} ${day}`;
    };
  
    const getMonth = (date) => {
      return date.toLocaleString('default', { month: 'short' });
    };
  
    switch (timeframe) {
      case 'Last 1 Year':
        for (let i = 1; i <= 12; i++) {
          const month = new Date(today.getFullYear(), today.getMonth() - i, 1);
          labels.unshift(getMonth(month));
        }
        break;
      case 'Last 6 Months':
        for (let i = 1; i <= 6; i++) {
          const month = new Date(today.getFullYear(), today.getMonth() - i, 1);
          labels.unshift(getMonth(month));
        }
        break;
      case 'Last 30 Days':
        for (let i = 29; i >= 0; i--) {
          const day = new Date(today);
          day.setDate(today.getDate() - (i + 1)); // Exclude today and go back 30 days
          if (i % 5 === 0) { // Show every 5th day
            labels.unshift(getMonthAndDay(day));
          }
        }
        break;
      case 'Last 15 Days':
        for (let i = 14; i >= 0; i--) {
          const day = new Date(today);
          day.setDate(today.getDate() - (i + 1)); // Exclude today and go back 15 days
          labels.unshift(getMonthAndDay(day)); // Show both month and day
        }
        break;
      case 'Last 7 Days':
        // Start from yesterday and go back 7 days, excluding the current day
        for (let i = 6; i >= 0; i--) {
          const day = new Date(today);
          day.setDate(today.getDate() - (i + 1)); // Exclude today and go back 7 days
          labels.unshift(getMonthAndDay(day)); // Show both month and day
        }
        break;
      default:
        break;
    }
  
    return labels;
  };
  

  const getFilteredData = () => {
    const labels = generateLabels(timeframe);
    switch (timeframe) {
      case 'Last 1 Year':
        return {
          labels,
          data1: [20000, 10000, 40000, 25000, 12000, 9000, 10000, 35000, 30000, 40000, 15000, 20000],
          data2: [15000, 20000, 35000, 30000, 18000, 20000, 7000, 40000, 25000, 35000, 10000, 15000],
        };
      case 'Last 6 Months':
        return {
          labels,
          data1: [10000, 35000, 30000, 40000, 15000, 20000],
          data2: [7000, 40000, 25000, 35000, 10000, 15000],
        };
      case 'Last 30 Days':
        return {
          labels,
          data1: [10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000, 105000, 110000, 115000, 100000, 125000, 130000, 135000, 140000, 145000, 150000, 155000],
          data2: [8000, 12000, 18000, 22000, 26000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000, 105000, 110000, 115000, 120000, 125000, 130000, 135000, 140000, 145000, 150000],
        };
      case 'Last 15 Days':
        return {
          labels,
          data1: [15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,45000, 40000, 35000, 30000, 25000, 20000, 15000],
          data2: [12000, 18000, 22000, 28000, 32000, 38000, 42000, 45000, 42000, 38000, 32000, 28000, 22000, 18000, 12000],
        };
      case 'Last 7 Days':
        return {
          labels,
          data1: [3000, 4000, 5000, 6000, 7000, 8000, 9000],
          data2: [2500, 3500, 4500, 5500, 6500, 7500, 8500],
        };
      default:
        return {
          labels: [],
          data1: [],
          data2: [],
        };
    }
  };

  const { labels, data1, data2 } = getFilteredData();

  const data = {
    labels,
    datasets: [
      {
        label: 'Company A',
        data: data1,
        backgroundColor: '#E3E9F0',
        hoverBackgroundColor: '#22c55e',
      },
      {
        label: 'Company B',
        data: data2,
        backgroundColor: '#254396',
        hoverBackgroundColor: '#22c55e',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        display: false, // This line disables the data labels
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            // Only show the value (without any label text)
            return `$${tooltipItem.raw / 1000}k`; // Adjust the format as needed
          },
        },
        bodyFont: {
          family: 'Switzer Regular',
          size: 12,
          weight: 'bold',
          color: '#ffffff', // Text color of the tooltip value
        },
        backgroundColor: '#22c55e', // Tooltip background color
        padding: 10, // Padding inside the tooltip
        position: 'nearest', // Default position, but we can adjust alignment
        yAlign: 'bottom', // Align the tooltip to the top of the bar
        xAlign: 'center', // Align the tooltip to the center horizontally
      },
      legend: {
        position: 'top', // Place the legend at the top
        align: 'end', // Align it to the right (end of the top)
        labels: {
          boxWidth: 20, // Adjust the size of the legend color box
          font: {
            family: 'Switzer Regular',
            size: 12, // Font size of the legend text
          },
          padding: 10, // Padding between the legend items
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#ACACAC',
          font: {
            family: 'Switzer Light',
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: '#EEEFFF',
        },
        ticks: {
          color: '#ACACAC',
          callback: function(value) {
            return `$${value / 1000}k -`;
          },
          font: {
            family: 'Switzer Light',
            size: 12,
          },
        },
        border: {
          display: false, // This will remove the y-axis line
        },
      },
    },
  };
  
  
  
  
  
  return (
    <div className="border border-[#EEEFFF] salestab" >
      <div className="items-center mb-4">
        <h2 className="totalsaleshead">Total Sales</h2>
        <div className="space-x-20 border-b border-[#EEEFFF] yeartabs">
          {['Last 1 Year', 'Last 6 Months', 'Last 30 Days', 'Last 15 Days', 'Last 7 Days'].map((period) => (
            <button
              key={period}
              className={` ${timeframe === period ? 'text-[#254396] border-b-2 border-[#254396] font-switzerM pb-1' : 'text-[#ACACAC] font-switzerR'}`}
              onClick={() => setTimeframe(period)}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      <div className='bg-white border border-[#EEEFFF] saleschart'>
        <h1 className='salesanalytics'>Sales Analytics</h1>
        <Bar data={data} options={options} className="cursor-pointer" height={100} />
      </div>
    </div>
  );
};

export default SalesChart;
