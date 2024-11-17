import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AiChat from "../Components/AiChat";

 const Root = () => {
  return (
    <div className="dark:bg-black dark:text-white min-h-screen  bg-[#F6F6F6] flex flex-col justify-between font-sans">
      <Navbar />
      <div className=" relative">
        <AiChat />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;