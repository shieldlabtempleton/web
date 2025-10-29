import React from "react";
import Placeholder from "./Placeholder";
import logo1 from "../assests/tgh-logo.png";
import logo2 from "../assests/Op1-Bellini-caicc-green text-2c-rgb-h.png";
import logo3 from "../assests/medical-color-horizontal-transparent.png";

const Collaborators = () => {
  return (
    <div className="Collaborators">
      {/* <Placeholder /> */}
      <h1 className="Collaborators-header">Collaborators</h1>
      <div className="Collaborators-container">
        <img src={logo2} alt="" className="Collaborator-logo" />
        <img src={logo3} alt="" className="Collaborator-logo" />
        <img src={logo1} alt="" className="Collaborator-logo" />
      </div>
    </div>
  );
};

export default Collaborators;
