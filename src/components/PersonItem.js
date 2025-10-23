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
  career,
  research,
  education,
  teaching,
  service,
  prodev,
  email,
  linkedin,
}) => {
  const slug =
    role === "pi"
      ? `/people/principal-investigator`
      : `/people/${firstname}-${lastname}`;
  return (
    <div className="Person-container">
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
            career,
            research,
            education,
            teaching,
            service,
            prodev,
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
          </button>
        </NavLink>
      )}
      <p className="Person-name">
        {title} {firstname} {middleinitial} {lastname}
      </p>
    </div>
  );
};

export default PersonItem;
