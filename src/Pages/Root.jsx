import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
export const Root = () => {
  return (
    <div className="dark:bg-black dark:text-white min-h-screen">
      <Navbar />

      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};
