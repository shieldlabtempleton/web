import React, { useEffect } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import WOW from "wowjs";
const NewsItem = ({ index, thumbnail, title, date, slug, link }) => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <a
      href={link}
      className="News-item-container wow animate__animated animate__zoomIn"
    >
      <img src={thumbnail} className="News-thumbnail" alt="" />
      <div className="News-info-container">
        <div className="News-title">
          <h1>{title}</h1>
        </div>
        <div className="News-date">{date}</div>
      </div>
      <div className="News-highlighter1" />
      <div className="News-highlighter2" />
      <div className="News-item-arrow-container">
        <FaAngleRight className="News-item-arrow" />
      </div>
    </a>
  );
};

export default NewsItem;
