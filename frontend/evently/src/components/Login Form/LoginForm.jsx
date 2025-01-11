/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";
import {useCookies} from "react-cookie";

function LoginForm() {
  const [credentials, setCredentials] = useState({});
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [cookies, setCookie] = useCookies(["user_id", "first_name", "last_name", "email"]);

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
        console.log(response.data.message);
        if (response.data.message === "Login successful") {
          axios
            .get(`http://localhost:8000/accounts/users/email/${credentials.email}/`)
            .then((response) => {
              setUser(response.data);
              console.log(response.data);
              setCookie("user_id", response.data.user_id, { path: "/" });
              setCookie("first_name", response.data.first_name, { path: "/" });
              setCookie("last_name", response.data.last_name, { path: "/" });
              setCookie("email", response.data.email, { path: "/" });
              window.location.href = "/sections";
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data.message);
          alert(error.response.data.message);
        } else {
          setMessage("An error occurred");
          alert("An error occurred");
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
