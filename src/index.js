/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { UserProvider } from "./Services/UserContext";
import ContextProvider from "./Services/ChatContext";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <ConfigProvider theme={{ token: { colorPrimary: "#4f9451" } }}>
        <UserProvider>
          <ContextProvider>


            <App />
          </ContextProvider>
        </UserProvider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
