import React from "react";
// import Placeholder from "./Placeholder";
import logo1 from "../assests/tgh-logo.png";
import logo2 from "../assests/Op1-Bellini-caicc-green text-2c-rgb-h.png";
import logo3 from "../assests/medical-color-horizontal-transparent.png";
import logo4 from "../assests/moffitt_2c_rgb_logo.jpeg";
import logo5 from "../assests/USF Health Logo3.png";
import logo6 from "../assests/usf_health_voice.png";
import logo7 from "../assests/b2ai_voice.png";

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
