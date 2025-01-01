/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";

function LoginForm() {
  const [credentials, setCredentials] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/accounts/users/check/", credentials)
      .then((response) => {
        setMessage(response.data.message);
        alert(response.data.message);
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data.message);
          alert(error.response.data.message);
        } else {
          setMessage("An error Occured");
          alert("An error Occured");
        }
      });
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <div className="login-inputbox">
          <input
            type="text"
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
          <button type="submit" className="login-button">
            Login
          </button>

          <a href="/register">Create a Account</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
