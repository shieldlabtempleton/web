import React from "react";
import { useLocation } from "react-router-dom";
import newsarticles from "../webdata/NewsArticles";
import * as Icons from "./Icons";
import image1 from "../assets/gg.png";
import image2 from "../assets/mg.jpeg";
import image3 from "../assets/vvision.jpg";
import image4 from "../assets/ccancer.jpg";
import image5 from "../assets/ssoftware.jpg";
import Placeholder from "./Placeholder";

const ResearchTopicsPage = ({ title, icon }) => {
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

  function ResearchTabs({ keywords, thumbnail, title, description }) {
    return (
      <button className="Research-topic-tab">
        <img src={thumbnail} className="Research-topic-thumbnail" alt="" />
        <div
          style={{
            padding: "0 10px",
            gap: "0",
          }}
        >
          <h1 className="Research-topic-title">{title}</h1>
          <p className="Research-topic-brief">{description}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {keywords.map((item, index) => (
              <p key={index} className="Research-topic-keywords">
                {item}
              </p>
            ))}
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="Research-topics">
      {research.data.researchdata ? (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 10vw",
              flexDirection: "column",
            }}
          >
            <h1 className="Research-area-header">{research.data.label}</h1>
            <span className="Research-topic-desc">
              {research.data.description}
            </span>
          </div>
          <div className="Research-topic-grid">
            {research.data.researchdata.map((item, index) => (
              <ResearchTabs
                key={index}
                thumbnail={item.thumbnail}
                title={item.title}
                description={item.description}
                index={index}
                keywords={item.keywords}
              />
            ))}
          </div>
        </>
      ) : (
        <Placeholder />
      )}
    </div>
  );
};

export default ResearchTopicsPage;
