import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import NewsItem from "./NewsItem";
import { ThemeContext } from "../context/ThemeContext";
import newsarticles from "../webdata/NewsArticles";

const NewsFullPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="News-article-page">
      <h1 className={`News-fp-header ${theme === "light" ? "" : "dark"}`}>
        News
      </h1>
      <div className="News-list">
        {newsarticles.map((article, index) => (
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
