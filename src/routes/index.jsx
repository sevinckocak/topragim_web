import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/landing/landing";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages/home/home";

export default function AppRoutes() {
  console.log("routes render");

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}
