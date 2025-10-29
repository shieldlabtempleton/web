import React from "react";
import { useLocation } from "react-router-dom";

const NewsFullPage = () => {
  const location = useLocation();
  const news = location.state;
  return (
    <div className="News-article-page">
      <div className="News-pic-container">
        <img className="News-pic" src={news.thumbnail} alt="" />
      </div>
      <h1 className="News-article-header">{news.title}</h1>
    </div>
  );
};

export default NewsFullPage;
