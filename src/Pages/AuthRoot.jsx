import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loading } from "../Components/Loading";
import AuthNavbar from "../Components/AuthNavbar";
import Footer from "../Components/Footer";
import AiChat from "../Components/AiChat";

const AuthRoot = () => {
  return (
    <div className="auth flex flex-col justify-between min-h-screen ">
      <AuthNavbar />
      <Suspense fallback={<Loading />}>
        <AiChat />
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default AuthRoot;
