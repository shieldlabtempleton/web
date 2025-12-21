import React, { useContext } from "react";
import defaultphoto from "../assets/defaultuser.png";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const PersonItem = ({
  photo,
  firstname,
  middleinitial,
  lastname,
  suffix,
  title,
  role,
  bio,
  career,
  research,
  researchfocus,
  education,
  publications,
  presentations,
  employment,
  teaching,
  service,
  prodev,
  acheivements,
  email,
  linkedin,
  gscholar,
  website,
}) => {
  const slug =
    role === "pi"
      ? `/people/principal-investigator`
      : `/people/${firstname.toLowerCase()}-${lastname.toLowerCase()}`;

  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`Person-container ${theme === "light" ? "" : "dark"}`}
      id={
        role === "pi" && theme === "light"
          ? "pi-photo"
          : role === "phd-student" && theme === "light"
          ? "phd-student-photo"
          : role === "msc-student" && theme === "light"
          ? "msc-student-photo"
          : role === "alumni" && theme === "light"
          ? "alumni-photo"
          : null
      }
    >
      {role === "alumni" ? (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="Profile-link"
        >
          <button className="Person-photo-container">
            <img
              className="Person-photo"
              src={photo ? photo : defaultphoto}
              alt=""
            />
            <div className="Person-name-container">
              <span className="Person-name" id="Current-affiliate-name">
                {title} {firstname} {middleinitial} {lastname}
                <br />
                {suffix}
              </span>
            </div>
          </button>
        </a>
      ) : (
        <NavLink
          to={slug}
          state={{
            photo,
            firstname,
            middleinitial,
            lastname,
            suffix,
            title,
            role,
            bio,
            career,
            research,
            researchfocus,
            education,
            employment,
            publications,
            presentations,
            teaching,
            service,
            prodev,
            acheivements,
            email,
            linkedin,
            gscholar,
            website,
          }}
          className="Profile-link"
        >
          <button className="Person-photo-container">
            <img
              className="Person-photo"
              src={photo ? photo : defaultphoto}
              alt=""
            />
            <div className="Person-name-container">
              <span className="Person-name" id="Current-affiliate-name">
                {title} {firstname} {middleinitial}
                {role == "pi" ? <br /> : null} {lastname}
                {role == "pi" ? null : ","}
                <br />
                {suffix}
              </span>
            </div>
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default PersonItem;
