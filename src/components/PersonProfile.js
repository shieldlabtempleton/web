import React from "react";
import { useLocation } from "react-router-dom";
import defaultphoto from "../assests/defaultuser.png";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";

const PersonProfile = () => {
  const location = useLocation();
  const person = location.state;
  // const { slug } = useParams();
  return (
    <div className="Profile">
      <div className="Profile-photo-container">
        <img
          className="Profile-photo"
          src={person.photo ? person.photo : defaultphoto}
          alt=""
        />
        <p className="Profile-name">
          {person.title} {person.firstname} {person.middleinitial}{" "}
          {person.lastname}
        </p>
        <div className="Profile-links-container">
          {person.email ? (
            <a
              href={`mailto:${person.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope
                className="Profile-links"
                style={{ color: "darkslategray" }}
              />
            </a>
          ) : null}
          {person.linkedin ? (
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                className="Profile-links"
                style={{ color: "#0072b1" }}
              />
            </a>
          ) : null}
        </div>
      </div>
      <div className="Profile-content">
        {person.career ? (
          <div className="Profile-section">
            <h1 className="Profile-header">Career Profile</h1>
            <p className="Profile-text">{person.career}</p>
          </div>
        ) : null}
        {person.research ? (
          <div className="Profile-section">
            <h1 className="Profile-header">Research</h1>
            <p className="Profile-text">{person.research}</p>
          </div>
        ) : null}
        {person.education ? (
          <div className="Profile-section">
            <h1 className="Profile-header">Education</h1>
            <ul className="Profile-text">
              {person.education.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {person.teaching ? (
          <div className="Profile-section">
            <h1 className="Profile-header">Teaching</h1>
            <ul className="Profile-text">
              {person.teaching.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {person.service ? (
          <div className="Profile-section">
            <h1 className="Profile-header">Service</h1>
            <ul className="Profile-text">
              {person.service.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {person.prodev ? (
          <div className="Profile-section">
            <h1 className="Profile-header">Professional Development</h1>
            <ul className="Profile-text">
              {person.prodev.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PersonProfile;
