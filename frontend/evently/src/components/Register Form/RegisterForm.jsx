/* eslint-disable no-unused-vars */
import React from "react";
import "./RegisterForm.css";

function RegisterForm() {
  return (
    <div className="registerForm-container">
      <div className="register-inputbox">
        <input type="text" placeholder="First Name" name="fname" />
        <input type="text" placeholder="Last Name" name="lname" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input type="password" placeholder="Retype-Password" name="repassword" />
        <button type="submit" className="register-button">
          Register
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;
