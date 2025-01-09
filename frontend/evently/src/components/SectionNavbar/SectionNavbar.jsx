/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './SectionNavbar.css';
import logoBlue from '../../Images/logo Blue.png';
import UserPic from '../../Images/UserPic.png';

function SectionNavbar({ activeItem, handleChangeActiveItem }) {
  const handleItemClick = (ItemName) => {
    handleChangeActiveItem(ItemName);
    console.log(ItemName);
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
            <img src={UserPic} alt='User' />
          </div>
          <div className="sectionNav-userName">
            <h3>Test User</h3>
            <h3>Welcome !</h3>
          </div>
        </>
      )} 
    </div>
  );
}

export default SectionNavbar;
