import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
export const Root = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
};
