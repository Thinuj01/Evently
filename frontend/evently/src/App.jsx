/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login Page/Login";
import Register from "./pages/Register Page/Register";
import SectionManager from "./pages/Section Manager/SectionManager";

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/sections" element={<SectionManager/>} />
    </Routes>    
    </>
  )
}

export default App
