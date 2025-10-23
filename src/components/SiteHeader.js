import React from "react";
import logo from "../../src/assests/USF_Bellini.png";

function SiteHeader() {
  return (
    <div className="App-header">
      <h1 className="Site-title">SHIELD LAB</h1>
      <img src={logo} className="App-logo" alt="logo" />
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
    </div>
  );
}

export default SiteHeader;
