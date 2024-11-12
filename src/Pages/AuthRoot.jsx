import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loading } from "../Components/Loading";

const AuthRoot = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
};

export default AuthRoot;
