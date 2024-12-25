import React from "react";
import CountUp from "react-countup";
import "./statcard.css";

const StatCard = ({ icon, value, label, bgColor }) => {
  return (
    <div className="card">
      <div className={`icons ${bgColor}`}>
        {icon}
      </div>
      <h2 className="values">
        <CountUp
          start={0}
          end={value}
          duration={1.5}
          separator=","
          formattingFn={(num) => (num < 10 ? `0${num}` : num)}
        />
      </h2>
      <p className="labels">{label}</p>
    </div>
  );
};

export default StatCard;
