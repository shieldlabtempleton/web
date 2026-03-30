import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Placeholder from "./Placeholder";
import { researchtopics } from "../webdata/ResearchTopics";
import { ScrollToSectiion } from "./ScrollButtons";
import { ThemeContext } from "../context/ThemeContext";

const ResearchTopicsPage = ({ title, icon }) => {
  const { theme } = useContext(ThemeContext);
  // const research = location.state;
  const { slug } = useParams();

  const RESEARCH_MAP = {
    "ai-ml": researchtopics["aiml"],
    biomechanics: researchtopics["biomechanics"],
    cancer: researchtopics["cancer"],
    cardiovascular: researchtopics["cardiovascular"],
    "commercial-devices": researchtopics["commercialdevices"],
    "computer-vision": researchtopics["computervision"],
    hardware: researchtopics["hardware"],
    hci: researchtopics["hci"],
    neurology: researchtopics["neurology"],
    nlp: researchtopics["nlp"],
    software: researchtopics["software"],
    "public-health": researchtopics["publichealth"],
  };

  const research = RESEARCH_MAP[slug];

  function ResearchTabs({ keywords, thumbnail, title, description }) {
    useEffect(() => {
      const deviceWidth = window.screen.width;
      document.documentElement.style.setProperty(
        "--initial-vw",
        `${deviceWidth}px`,
      );
    }, []);
    return (
      <button
        className={`Research-topic-tab ${theme === "light" ? "" : "dark"}`}
      >
        <div style={{ height: "290px", width: "100%" }}>
          <img src={thumbnail} className="Research-topic-thumbnail" alt="" />
        </div>
        <div
          style={{
            padding: "0 10px",
            gap: "0",
          }}
        >
          <h1
            className={`Research-topic-title ${
              theme === "light" ? "" : "dark"
            }`}
          >
            {title}
          </h1>
          <p className="Research-topic-brief">{description}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              position: "relative",
              background: "blue",
              opacity: 0,
              width: "100%",
            }}
          >
            {keywords.map((item, index) => (
              <p key={index} className="Research-topic-keywords">
                {item}
              </p>
            ))}
          </div>
          <div className="Research-topic-keywords-container">
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
      {research?.researchdata ? (
        <>
          <ScrollToSectiion
            classname={"Scroll-anim-container to-section"}
            sectionid={"research-topics"}
          />
          <ScrollToSectiion
            classname={"Scroll-anim-container to-section"}
            sectionid={"research-topics"}
            id={"Scroll2"}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 10vw",
              flexDirection: "column",
            }}
          >
            <h1
              className={`Research-area-header ${
                theme === "light" ? "" : "dark"
              }`}
            >
              {research.label}
            </h1>
            <span
              className={`Research-topic-desc ${
                theme === "light" ? "" : "dark"
              }`}
            >
              {research.description}
            </span>
          </div>
          <section id="research-topics" style={{ width: "100%" }}>
            <div
              className={
                research.researchdata.length === 1
                  ? "Research-topic-grid a"
                  : research.researchdata.length < 6
                    ? "Research-topic-grid b"
                    : "Research-topic-grid"
              }
            >
              {research.researchdata.map((item, index) => (
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
          </section>
        </>
      ) : (
        <Placeholder />
      )}
    </div>
  );
};

export default ResearchTopicsPage;
