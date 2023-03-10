import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ListHome from "./pages/ListHome";
import React from "react";
import "./App.css";

export default function App() {
  const item = useSelector((state) => state.theme);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:itemId" element={<ListHome />} />
    </Routes>
  );
}
