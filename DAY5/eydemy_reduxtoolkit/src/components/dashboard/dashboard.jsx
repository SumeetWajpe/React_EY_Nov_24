import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
}
