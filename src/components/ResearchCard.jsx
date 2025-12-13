import React from "react";
import { NavLink } from "react-router-dom";

const ResearchCard = ({ Icon, topic, description, data }) => {
  const slug = `/research/${data?.slug}`;
  return (
    <NavLink to={slug} className="Research-card-container">
      <div className="Research-card">
        <div className="front">
          <Icon className="Research-card-icon" />
          <h1 className="Research-card-topic">{topic}</h1>
        </div>
        <div className="back">
          <p>
            {description
              ? description
              : " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default ResearchCard;
