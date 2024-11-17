import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { UserProvider } from "./Services/UserContext";



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
          <App />
        </UserProvider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);