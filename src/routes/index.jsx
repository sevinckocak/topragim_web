import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/landing/landing";

export default function AppRoutes() {
  console.log("routes render");

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* yanlış bir url girilirse de landing'e düşsün */}
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}
