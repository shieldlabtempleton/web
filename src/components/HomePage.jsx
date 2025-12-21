import React, { useContext } from "react";
import lablogo from "../assets/SHIELD.png";
import piphoto from "../assets/Templeton.png";
import medicallogo from "../assets/medical-white-vertical-transparent.png";
import bellinilogo from "../assets/Op1-Bellini-caicc-white-1c-rgb-h.png";
import NewsItem from "./NewsItem";
import newsarticles from "../webdata/NewsArticles";
import NewsSection from "./NewsSection";
import { ThemeContext } from "../context/ThemeContext";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="Home">
      <div className={`Home-intro ${theme === "light" ? "" : "dark"}`}>
        <div>
          <img src={lablogo} className="Lab-logo" alt="" />
          <p className={`Lab-title ${theme === "light" ? "" : "dark"}`}>
            SMARTER HEALTH <br /> INNOVATING, ENABLING & LINKING DEVICES
          </p>
        </div>
        <div className="Lab-description">
          <p>
            SHIELD LAB is specifically focused on the intersection of tech and
            healthcare, focused on smart health systems, human factored design,
            IoT, mobile computing, and machine learning applications in
            healthcare given Dr. Templeton's background in Biomedical
            Engineering and Computer Science and Engineering. Current research
            areas, focused on mTBI, cancer, diabetes, heart disease, cystic
            fibrosis, and pharmacological / interventional effects across
            conditions, are being actively integrated to drive innovation in the
            following areas
          </p>
          <ul
            className={`horizontal-numbered-list ${
              theme === "light" ? "" : "dark"
            }`}
          >
            <li>
              Developing new assessment tools that will maximize data quality
              (e.g., making tools for all that minimize human error and maximize
              compliance).
            </li>
            <li>
              Addressing bias in current iterations of health technologies
              (e.g., focusing on how to collect and analyze data, and how models
              should be built).
            </li>
            <li>
              Fusing diverse sensor sources through machine learning to improve
              diagnosis capability and identify condition-specific digital
              biomarkers.
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`Principal-investigator ${theme === "light" ? "" : "dark"}`}
      >
        <div class="Pi-content-container">
          <h1 className={`Pi-header ${theme === "light" ? "" : "dark"}`}>
            Principal Investigator
          </h1>
          <div className="Inner-pi-content-container">
            <div className="Pi-photo-container">
              <img src={piphoto} className="Pi-photo" alt="" />
              <span className={`Pi-name ${theme === "light" ? "" : "dark"}`}>
                Dr. John M. Templeton
              </span>
              <span className={`Pi-title ${theme === "light" ? "" : "dark"}`}>
                Assitant Professor <br /> Computer Science and Engineering
              </span>
            </div>
            <div className="Pi-affiliation-container">
              <img src={bellinilogo} className="USF-bellini-logo" alt="" />
              <img src={medicallogo} className="USF-medical-logo" alt="" />
            </div>
          </div>
        </div>
      </div>
      <NewsSection newsarticles={newsarticles} />
    </div>
  );
};

export default HomePage;
