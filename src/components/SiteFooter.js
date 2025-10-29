import React from "react";
import logo from "../../src/assests/USF_Bellini.png";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const SiteFooter = () => {
  return (
    <div className="App-footer">
      <div className="Footer-box-1">
        <h1 className="Footer-header-1">SHIELD LAB</h1>
        <p className="Footer-note-1">
          4204 E Fowler Ave,
          <br /> Tampa, FL 33620 USA.
          <br />
          Phone
          <br />
          Fax
          <br />
          shieldlabtempleton@gmail.com
        </p>
        <p className="Footer-note-1">
          ©2025 University of South Florida Bellini College of Artificial
          Intelligence, Cybersecurity and Computing
        </p>
      </div>
      <div className="Footer-box-2">
        <div className="Footer-box-3">
          <img className="Footer-logo" src={logo} alt="" />
        </div>
        <div className="Footer-box-4">
          <ul className="Footer-links">
            <li>
              <a href="https://www.usf.edu/ai-cybersecurity-computing/about/mission.aspx">
                Mission
              </a>
            </li>
            <li>
              <a>Leadership</a>
            </li>
            <li>
              <a>Faculty</a>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
          <ul className="Footer-socials">
            <li style={{ marginLeft: "-3px" }}>
              <a href="https://www.usf.edu/ai-cybersecurity-computing/about/mission.aspx">
                <FaFacebook className="Footer-icon" />
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.usf.edu/ai-cybersecurity-computing/about/mission.aspx">
                <FaInstagram className="Footer-icon" />
                Instagram
              </a>
            </li>
            <li style={{ marginLeft: "-5px" }}>
              <a href="https://www.usf.edu/ai-cybersecurity-computing/about/mission.aspx">
                <FaXTwitter className="Footer-icon" />
                X/Twitter
              </a>
            </li>
            <li style={{ marginLeft: "-7px" }}>
              <a href="https://www.usf.edu/ai-cybersecurity-computing/about/mission.aspx">
                <FaLinkedin className="Footer-icon" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiteFooter;
