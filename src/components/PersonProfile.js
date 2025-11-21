import React from "react";
import { useLocation } from "react-router-dom";
import defaultphoto from "../assests/defaultuser.png";
import { FaLinkedin, FaGoogleScholar } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
import ReactMarkdown from "react-markdown";

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
          {person.role === "pi" ? null : ","} {person.suffix}
        </p>
        <div className="Profile-links-container">
          {person.email ? (
            <a
              href={`mailto:${person.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdMail className="Profile-links" id="Email-icon" />
            </a>
          ) : null}
          {person.linkedin ? (
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="Profile-links" id="Linkedin-icon" />
            </a>
          ) : null}
          {person.gscholar ? (
            <a href={person.gscholar} target="_blank" rel="noopener noreferrer">
              <FaGoogleScholar className="Profile-links" id="Gscholar-icon" />
            </a>
          ) : null}
          {person.website ? (
            <a href={person.website} target="_blank" rel="noopener noreferrer">
              <TbWorldWww className="Profile-links" id="Website-icon" />
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
        {person.researchfocus ? (
          <div className="Profile-section">
            <h1 className="Profile-header">Research Focus</h1>
            <p className="Profile-text">{person.researchfocus}</p>
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
        {person.employment ? (
          <div className="Profile-section">
            <h1 className="Profile-header">Employment History</h1>
            <ul className="Profile-text">
              {person.employment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {person.publications ? (
          <div className="Profile-section">
            <h1 className="Profile-header">Publications</h1>
            <ul className="Profile-text">
              {person.publications.map((item, index) => (
                <li key={index}>
                  <ReactMarkdown>{item}</ReactMarkdown>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {person.presentations ? (
          <div className="Profile-section">
            <h1 className="Profile-header">Presentations</h1>
            <ul className="Profile-text">
              {person.presentations.map((item, index) => (
                <li key={index}>
                  <ReactMarkdown>{item}</ReactMarkdown>
                </li>
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
        {person.acheivements ? (
          <div className="Profile-section">
            <h1 className="Profile-header">Acheivements</h1>
            <ul className="Profile-text">
              {person.acheivements.map((item, index) => (
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
