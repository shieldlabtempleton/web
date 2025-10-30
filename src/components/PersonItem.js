import React from "react";
import defaultphoto from "../assests/defaultuser.png";
import { NavLink } from "react-router-dom";

const PersonItem = ({
  photo,
  firstname,
  middleinitial,
  lastname,
  title,
  role,
  bio,
  career,
  research,
  researchfocus,
  education,
  publications,
  employment,
  teaching,
  service,
  prodev,
  acheivements,
  email,
  linkedin,
}) => {
  const slug =
    role === "pi"
      ? `/people/principal-investigator`
      : `/people/${firstname}-${lastname}`;
  return (
    <div
      className="Person-container"
      id={
        role === "pi"
          ? "pi-photo"
          : role === "grad-student"
          ? "grad-student-photo"
          : "alumni-photo"
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
            <p className="Person-name">
              {title} {firstname} {middleinitial} {lastname}
            </p>
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
            title,
            role,
            bio,
            career,
            research,
            researchfocus,
            education,
            employment,
            publications,
            teaching,
            service,
            prodev,
            acheivements,
            email,
            linkedin,
          }}
          className="Profile-link"
        >
          <button className="Person-photo-container">
            <img
              className="Person-photo"
              src={photo ? photo : defaultphoto}
              alt=""
            />
            <p className="Person-name">
              {title} {firstname} {middleinitial} {lastname}
            </p>
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default PersonItem;
