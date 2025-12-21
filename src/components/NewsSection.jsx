import React, { useContext } from "react";
import news1thumbnail from "../assets/DD_437x437.jpg";
import NewsItem from "./NewsItem";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { ThemeContext } from "../context/ThemeContext";

const NewsSection = ({ newsarticles }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="News-section">
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
        <span
          className={`News-section-header ${theme === "light" ? "" : "dark"}`}
        >
          News
        </span>
        <NavLink
          className={`All-news-button ${theme === "light" ? "" : "dark"}`}
          to={"/news"}
          state={newsarticles}
        >
          View all news <FaChevronRight className="All-news-chevron" />
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
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
