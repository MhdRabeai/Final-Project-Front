import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loading } from "../Components/Loading";
import AuthNavbar from "../Components/AuthNavbar";
import Footer from "../Components/Footer";

const AuthRoot = () => {
  return (
    <div className="auth flex flex-col justify-between min-h-screen ">
      <AuthNavbar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default AuthRoot;
