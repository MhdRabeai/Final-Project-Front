import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AiChat from "../Components/AiChat";
import { useUserInfo } from "../Services/UserContext";

const DashRoot = () => {
  const { user } = useUserInfo();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user["role"]);
    return () => {};
  }, []);
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
    </div>
  );
};

export default DashRoot;
