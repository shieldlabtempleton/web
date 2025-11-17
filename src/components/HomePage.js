import React from "react";
import lablogo from "../assests/SHIELD.png";
import piphoto from "../assests/Templeton.png";
import medicallogo from "../assests/medical-white-vertical-transparent.png";
import bellinilogo from "../assests/Op1-Bellini-caicc-white-1c-rgb-h.png";
import NewsItem from "./NewsItem";
import newsarticles from "./NewsArticles";
import NewsSection from "./NewsSection";

const HomePage = () => {
  return (
    <div className="Home">
      <div className="Home-intro">
        <div>
          <img src={lablogo} className="Lab-logo" alt="" />
          <p className="Lab-title">
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
          <ul className="horizontal-numbered-list">
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
      <div className="Principal-investigator">
        <div class="Pi-content-container">
          <h1 className="Pi-header">Principal Investigator</h1>
          <div className="Inner-pi-content-container">
            <div className="Pi-photo-container">
              <img src={piphoto} className="Pi-photo" alt="" />
              <span className="Pi-name">Dr. John M. Templeton</span>
              <span className="Pi-title">
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
