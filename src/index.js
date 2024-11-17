import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { UserProvider } from "./Services/UserContext";
import { Loading } from "./Components/Loading";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <Suspense fallback={<Loading />}>
        <ConfigProvider theme={{ token: { colorPrimary: "#4f9451" } }}>
          <UserProvider>
            <App />
          </UserProvider>
        </ConfigProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
