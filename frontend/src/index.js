// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Ensure this file exists
import reportWebVitals from "./reportWebVitals"; // Ensure this file exists

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
