import React from "react";
import { useLocation } from "react-router-dom";
import NewsItem from "./NewsItem";

const NewsFullPage = () => {
  const location = useLocation();
  const news = location.state;
  return (
    <div className="News-article-page">
      <h1 className="News-fp-header">News</h1>
      <div className="News-list">
        {news.map((article, index) => (
          <NewsItem
            key={index}
            thumbnail={article.thumbnail}
            title={article.title}
            date={article.date}
            slug={article.slug}
            link={article.link}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsFullPage;
