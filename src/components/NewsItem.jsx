import React, { useContext, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import WOW from "wowjs";
import { ThemeContext } from "../context/ThemeContext";
const NewsItem = ({ index, thumbnail, title, date, slug, link }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <a
      href={link}
      className={`News-item-container wow animate__animated animate__zoomIn ${
        theme === "light" ? "" : "dark"
      }`}
    >
      <img src={thumbnail} className="News-thumbnail" alt="" />
      <div className="News-info-container">
        <div className={`News-title ${theme === "light" ? "" : "dark"}`}>
          <h1>{title}</h1>
        </div>
        <div className={`News-date ${theme === "light" ? "" : "dark"}`}>
          {date}
        </div>
      </div>
      <div
        className={`News-highlighter1  ${theme === "light" ? "" : "dark"}`}
      />
      <div
        className={`News-highlighter2  ${theme === "light" ? "" : "dark"}`}
      />
      <div className="News-item-arrow-container">
        <FaAngleRight
          className={`News-item-arrow ${theme === "light" ? "" : "dark"}`}
        />
      </div>
    </a>
  );
};

export default NewsItem;
