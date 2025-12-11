import React from "react";
import { useLocation } from "react-router-dom";
import newsarticles from "./NewsArticles";
import * as Icons from "./Icons";
import image1 from "../assests/bbrain.jpeg";
import image2 from "../assests/aai.avif";
import image3 from "../assests/vvision.jpg";
import image4 from "../assests/ccancer.jpg";
import image5 from "../assests/ssoftware.jpg";
import Placeholder from "./Placeholder";

const ResearchTopics = ({ title, icon }) => {
  const location = useLocation();
  const research = location.state;
  const ICON_MAP = {
    Ai: Icons.AiIcon,
    Biomechanics: Icons.BiomechanicsIcon,
    Brain: Icons.BrainIcon,
    Cell: Icons.CellIcon,
    Heart: Icons.HeartIcon,
    Publichealth: Icons.PublichealthIcon,
    Mobile: Icons.MobileIcon,
    Hardware: Icons.HardwareIcon,
    Nlp: Icons.NlpIcon,
    Software: Icons.SoftwareIcon,
    Vision: Icons.VisionIcon,
    Hci: Icons.HciIcon,
  };

  const thumbnails = [image1, image2, image3, image4, image5];

  const Icon = ICON_MAP[research.data.icon];

  function ResearchTabs({ thumbnail, title, description }) {
    return (
      <button className="Research-topic-tab">
        <img src={thumbnail} className="Research-topic-thumbnail" />
        <div
          style={{
            padding: "0 10px",
            gap: "0",
          }}
        >
          <h1 className="Research-topic-title">Research Title</h1>
          <p className="Research-topic-brief">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </button>
    );
  }

  return (
    <div className="Research-topics">
      <Placeholder />
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 10vw",
          flexDirection: "column",
        }}
      >
        <h1 className="Research-area-header">{research.data.label}</h1>
        <span className="Research-topic-desc">{research.data.description}</span>
      </div>
      <div className="Research-topic-grid">
        {newsarticles.map((article, index) => (
          <ResearchTabs
            key={index}
            thumbnail={thumbnails[index]}
            title={article.title}
            date={article.date}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ResearchTopics;
