import React from "react";
import StatsCard from "./StatsCard";
import "./styles/statsListCss.css"

const StatsList = ({ stats }) => {
  return (
    <ul className="containerStats">
      {stats?.map((stat) => (
        <StatsCard key={stat.name} stat={stat} />
      ))}
    </ul>
  );
};

export default StatsList;
