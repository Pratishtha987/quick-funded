import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
// import require
import config from "./config.jsx";
// import { load } from "config-json";
// var config = require("config-json");
// const a = load("config/default.json");

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// const myValue = config.get("key", "subkey");
console.log(config);
