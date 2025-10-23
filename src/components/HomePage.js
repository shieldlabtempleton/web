import React from "react";
import lablogo from "../assests/SHIELD.png";
import piphoto from "../assests/Templeton.png";
import medicallogo from "../assests/medical-white-vertical-transparent.png";
import bellinilogo from "../assests/Op1-Bellini-caicc-white-1c-rgb-h.png";
import NewsItem from "./NewsItem";
import news1thumbnail from "../assests/DD_437x437.jpg";
import newsarticles from "./NewsArticles";

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
            healthcare focused on smart health systems, human factored design,
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
              The development of new assessment tools that maximize data quality
              (e.g., minimize human error, maximize compliance, while creating
              tools appropriate for all independent of age, gender, cognitive
              skill, etc.)
            </li>
            <li>
              Addressing bias in current health technologies (e.g., how we
              collect and analyze data, and how we build models)
            </li>
            <li>
              The fusion of diverse sensor sources through machine learning
              techniques
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
              <p className="Pi-name">Dr. John M. Templeton</p>
              <p className="Pi-title">
                Assitant Professor <br /> Computer Science and Engineering
              </p>
            </div>
            <div className="Pi-affiliation-container">
              <img src={bellinilogo} className="USF-bellini-logo" alt="" />
              <img src={medicallogo} className="USF-medical-logo" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="News-section">
        <h1 className="News-header">News</h1>
        <NewsItem
          thumbnail={news1thumbnail}
          title={newsarticles[0].title}
          date={newsarticles[0].date}
        />
      </div>
    </div>
  );
};

export default HomePage;
