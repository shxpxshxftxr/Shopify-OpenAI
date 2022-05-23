import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./client/App";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
