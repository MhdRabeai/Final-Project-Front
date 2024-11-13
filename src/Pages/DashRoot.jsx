import React from "react";
import { Link } from "react-router-dom";

const DashRoot = () => {
  return (
    <div>
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
    </div>
  );
};

export default DashRoot;
