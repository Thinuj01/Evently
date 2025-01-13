/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./SectionNavbar.css";
import logoBlue from "../../Images/logo Blue.png";
import UserPic from "../../Images/UserPic.png";
import { useCookies } from "react-cookie";

function SectionNavbar({ activeItem, handleChangeActiveItem }) {
  const [cookies, setCookie, removeCookie] = useCookies([
    "user_id",
    "first_name",
    "last_name",
    "event_id",
    "event_name",
  ]);

  if (!cookies.first_name) {
    window.location.href = "/login";
    return null;
  }
  const handleItemClick = (ItemName) => {
    handleChangeActiveItem(ItemName);
    console.log(ItemName);
  };

  const handleLogout = () => {
    removeCookie("user_id", { path: "/" });
    removeCookie("first_name", { path: "/" });
    removeCookie("last_name", { path: "/" });
    removeCookie("event_id", { path: "/" });
    removeCookie("event_name", { path: "/" });
    console.log("Logout");
    window.location.href = "/login";
  };

  const handleBackToEvents = () => {
    removeCookie("event_id", { path: "/" });
    removeCookie("event_name", { path: "/" });
    handleChangeActiveItem("User Events");
  };

  return (
    <div className="Section-navbar-contianer">
      <div className="section-navbar-logo-container">
        <img src={logoBlue} alt="logo" />
        <h2>Evently</h2>
      </div>

      {activeItem !== "User Events" && (
        <>
          <div
            className={`sector-navbar-item ${
              activeItem === "Guest Management"
                ? "sector-navbar-item-active"
                : "sector-navbar-item-normal"
            }`}
            onClick={() => handleItemClick("Guest Management")}
          >
            <h3>Guest Management</h3>
          </div>
          <div
            className={`sector-navbar-item ${
              activeItem === "Budget Management"
                ? "sector-navbar-item-active"
                : "sector-navbar-item-normal"
            }`}
            onClick={() => handleItemClick("Budget Management")}
          >
            <h3>Budget Management</h3>
          </div>
          <div
            className={`sector-navbar-item ${
              activeItem === "Task Management"
                ? "sector-navbar-item-active"
                : "sector-navbar-item-normal"
            }`}
            onClick={() => handleItemClick("Task Management")}
          >
            <h3>Task Management</h3>
          </div>

        </>
      )}

      {activeItem == "User Events" && (
        <>
          <div className="sectionNav-userProPic">
            <img src={UserPic} alt="User" />
          </div>
          <div className="sectionNav-userName">
            <h3>
              {cookies.first_name} {cookies.last_name}
            </h3>
            <h3>Welcome !</h3>
          </div>
          <div className="section-navLogout1">
        <div className="section-navLogout-Btn" onClick={() => handleLogout()}>
          <h3>Logout</h3>
        </div>
      </div>
        </>
      )}

      {cookies.event_id && (
        <>
          <p className="sectionNav-eventName">{cookies.event_name}</p>
          <div className="backtoEventsBtn">
          <p onClick={()=>handleBackToEvents()}>Back to events</p>

          </div>
        </>
      )}

      {activeItem !== "User Events" && (
        <>
      <div className="section-navLogout">
        <div className="section-navLogout-Btn" onClick={() => handleLogout()}>
          <h3>Logout</h3>
        </div>
      </div>
        </>
      )}


    </div>
  );
}

export default SectionNavbar;
