/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./FeatureCard.css";
import BudgetLogo from "../../Images/calculator.png";
import GuestLogo from "../../Images/user.png";
import Vendor from "../../Images/vendor.png";
import AgendaMng from "../../Images/list.png";

function FeatureCard({ color, title }) {
  const titleImageMap = {
    "Budget Management": BudgetLogo,
    "Guest Management": GuestLogo,
    "Task & Vendor Management": Vendor,
    "Agenda Management": AgendaMng,
  };
  return (
    <div
      className={`featureCard-container ${
        color == "Blue"
          ? "featureCard-container-backBlueC"
          : "featureCard-container-backWhiteC"
      }`}
    >
      <div className="card-img">
        <img src={titleImageMap[title]} alt={title} />
      </div>
      <div className="card-title">
        <h3>{title.replace(" Management", "")} <br /> Management</h3>
      </div>
    </div>
  );
}

export default FeatureCard;
