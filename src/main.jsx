import React from "react";
import ReactDOM from "react-dom/client";
import Content from "./Content";
import Education from "./Education";
import Expereince from "./Experience";
import "./assets/fonts/Montserrat-VariableFont_wght.ttf";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <div className="leftBox">
        <p>placeholder</p>
      </div>
      <div className="rightBox">
        <div className="contentBox">
          <Content />
        </div>
        <div className="educationBox">
          <div className="label">
            <p className="educationLabel">Education</p>
          </div>
          <Education />
          <Education />
        </div>
        <div className="expereinceBox">
          <div className="label">
            <p className="expereinceLabel">Expereince</p>
          </div>
          <Expereince />
          <Expereince />
        </div>
      </div>
    </div>
  </React.StrictMode>
);
