import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Home from "./Home";
import AdminDashboard from "./AdminDashboard";
import "./Login.css";
// const Toastify = require('react-toastify').default;

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admindashboard" element={<AdminDashboard/>}/>
    </Routes>
    <ToastContainer position="top-center" autoClose={3000} />
  </BrowserRouter>,
  document.getElementById("root")
);
