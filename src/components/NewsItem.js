import React from "react";

const NewsItem = ({ thumbnail, title, date }) => {
  return (
    <button className="News-item-container">
      <img src={thumbnail} className="News-thumbnail" alt="" />
      <div className="News-info-container">
        <h2 className="News-title">{title}</h2>
        <div className="News-date">{date}</div>
      </div>
      <div className="News-highlighter1" />
      <div className="News-highlighter2" />
    </button>
  );
};

export default NewsItem;
