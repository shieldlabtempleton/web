import React from "react";
// import Placeholder from "./Placeholder";
import logo1 from "../assets/tgh-logo.png";
import logo2 from "../assets/Op1-Bellini-caicc-green text-2c-rgb-h.png";
import logo3 from "../assets/medical-color-horizontal-transparent.png";
import logo4 from "../assets/moffitt_2c_rgb_logo.jpeg";
import logo5 from "../assets/USF Health Logo3.png";
import logo6 from "../assets/usf_health_voice.png";
import logo7 from "../assets/b2ai_voice.png";

const Collaborators = () => {
  return (
    <div className="Collaborators">
      {/* <Placeholder /> */}
      <h1 className="Collaborators-header">Collaborators</h1>
      <div className="Collaborators-container">
        <img src={logo2} alt="" className="Collaborator-logo" />
        <img src={logo3} alt="" className="Collaborator-logo" />
        <img
          src={logo5}
          alt=""
          className="Collaborator-logo"
          id="USF-health-logo"
        />
        <img
          src={logo6}
          alt=""
          className="Collaborator-logo"
          id="USF-health-voice-logo"
        />
        <img src={logo1} alt="" className="Collaborator-logo" />
        <img
          src={logo4}
          alt=""
          className="Collaborator-logo"
          id="Moffitt-logo"
        />
        <img src={logo7} alt="" className="Collaborator-logo" />
      </div>
    </div>
  );
};

export default Collaborators;
