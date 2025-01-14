/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./RegisterForm.css";
import axios from "axios";

function RegisterForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/accounts/users/", formData)
      .then((response) => {
        console.log("User added", formData);
        alert("User added successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="registerForm-container">
      <form onSubmit={handleSubmit}>
        <div className="register-inputbox">
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Retype-Password"
            name="repassword"
          />
          <button type="submit" className="register-button">
            Register
          </button>
        </div>
        <a href="/login">If you already have a account...</a>
      </form>
    </div>
  );
}

export default RegisterForm;
