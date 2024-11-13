import React from "react";
import { NavLink } from "react-router-dom";

const AuthNavbar = () => {
  return (
    <header className="rounded-b-3xl rounded-e-none flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-[#4f9451] text-sm py-2 shadow-2xl  dark:drop-shadow-[0_5px_10px_rgba(255,255,255,0.5)]">
      <nav className="max-w-[86rem] w-full mx-auto px-4 sm:flex items-center sm:justify-between ">
        <div className="flex justify-between items-center md:flex-none">
          <NavLink
            className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
            to="/"
          >
            <img src="logo.png" alt="logo" width={200} />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default AuthNavbar;
