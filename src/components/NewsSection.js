import React from "react";
import news1thumbnail from "../assests/DD_437x437.jpg";
import NewsItem from "./NewsItem";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const NewsSection = ({ newsarticles }) => {
  return (
    <div className="News-section">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "flex-end",
          // backgroundColor: "red",
          padding: "40px 0",
        }}
      >
        <span className="News-section-header">News</span>
        <NavLink to={"/news"} state={newsarticles} style={{}}>
          <button className="All-news-button">
            View all news <FaChevronRight className="All-news-chevron" />
          </button>
        </NavLink>
      </div>
      <div className="News-list">
        {newsarticles.slice(0, 5).map((article, index) => (
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
