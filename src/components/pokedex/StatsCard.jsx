import React from "react";
import "./styles/statsCardCss.css"

const StatsCard = ({ stat }) => {
  return (
    <li className="statsItem">
      <h4>{stat.name}</h4>
      <span>{stat.value}</span>
    </li>
  );
};

export default StatsCard;
