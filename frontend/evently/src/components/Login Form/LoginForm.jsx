/* eslint-disable no-unused-vars */
import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="login-form-container">
      <div className="login-inputbox">
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit" className="login-button">
          Login
        </button>
        <a href="/register">Create a Account</a>
      </div>
    </div>
  );
}

export default LoginForm;
