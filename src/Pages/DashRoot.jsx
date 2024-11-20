import React from "react";
import { Link, Outlet } from "react-router-dom";
import AiChat from "../Components/AiChat";
// import AiChat from "../Components/AiChat";

const DashRoot = () => {
  return (
    <div className="relative">
      <ul>
        <li>
          <Link to="admin">Admin</Link>
        </li>
        <li>
          <Link to="pharmacy">pharmacy</Link>
        </li>
        <li>
          <Link to="doct">Doct</Link>
        </li>
        <li>
          <Link to="user">user</Link>
        </li>
      </ul>
      <AiChat />
      <Outlet />
    </div>
  );
};

export default DashRoot;
