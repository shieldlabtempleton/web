import React from "react";
import news1thumbnail from "../assests/DD_437x437.jpg";
import NewsItem from "./NewsItem";

const NewsSection = ({ newsarticles }) => {
  return (
    <div className="News-section">
      <h1 className="News-section-header">News</h1>
      <div className="News-list">
        {newsarticles.map((article, index) => (
          <NewsItem
            key={index}
            thumbnail={article.thumbnail}
            title={article.title}
            date={article.date}
            slug={article.slug}
            link={article.link}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
