import React from "react";
import ReactDOM from "react-dom";
import MainLayout from "./Components/MainLayout";
import "./Themes/app.scss";
//import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>,
  document.getElementById("root")
);
