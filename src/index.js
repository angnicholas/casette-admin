import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";
import "./index.css";

//require("dotenv").config();

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <HashRouter basename="/">
    <Routes />
  </HashRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
