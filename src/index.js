

import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';
// import './standings/playoffPicture.css';
import App from "./App";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
