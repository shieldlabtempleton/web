import React from "react";
import PersonItem from "./PersonItem";
import Piphoto from "../assests/Templeton.png";
import alumn1 from "../assests/1643408680791.jpeg";

const PeoplePage = () => {
  return (
    <div className="People">
      <h1 className="People-header">Principal Investigator</h1>
      <PersonItem
        title={"Dr."}
        firstname={"John"}
        middleinitial={"M."}
        lastname={"Templeton"}
        photo={Piphoto}
        role={"pi"}
        career={
          "Multidisciplinary engineer with experience in research and development and human factored design for mobile device-based neurocognitive health assessment systems. Dedicated to inclusive, collaborative, and experience-based teaching practices and proficient in both entrepreneurial and leadership skills."
        }
        research={
          "Combining Undergraduate and Master's degrees in Biomedical Engineering with my current work in Computer Science and Engineering for the formation of mobile and wearable assessment configurations used for the understanding of Neurocognitive Functions. "
        }
        education={[
          "PhD in Computer Science and Engineering, University of Notre Dame, 2022",
          "Masters of Science in Biomedical Engineering, Arizona State University, 2016",
          "Bachelor of Science in Biomedical Engineering, Arizona State University, 2015",
        ]}
        teaching={[
          "Instructor of Record - CSE10101| CDT30010 - Elements of Computing - Spring 2022",
          "Instructor of Record - CSE40333 - Mobile Application Design - Spring 2021",
          "Teaching Fellow - CSE20311 - Fundamentals of Computing - Fall 2019, Spring 2020, Fall 2020",
          "SVS Teaching Fellow - CSE40567 - Computer Security - Spring 2019",
          "SVS Teaching Fellow - CSE30341 - Operating Systems - Spring 2019",
          "SVS Teaching Fellow - CSE30151 - Theory of Computing - Spring 2019",
          "Graduate TA - CSE60641 - Graduate Operating Systems - Fall 2018",
          "Graduate TA - CSE40814 - Mobile Computing - Fall 2017",
          "Graduate TA - CSE40175 - Ethical and Professional Issues - Spring 2017 ",
        ]}
        service={[
          "Indiana Parkinson's Foundation - Board of Directors - 2021, 2022",
          "St. Joseph High School - Baseball Coach - 2020, 2021, 2022",
        ]}
        prodev={[
          "Leadership Advancing Socially Engaged Research | LASER - 2019 - 2020",
        ]}
        email={"jtemplet@usf.edu"}
        linkedin={
          "https://www.linkedin.com/in/john-templeton-csebme?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BcBirwnkDQcy6ENghB30sWg%3D%3D"
        }
      />
      <h1 className="People-header">Graduate Students</h1>
      <PersonItem
        firstname={"Rocky"}
        middleinitial={"D."}
        lastname={"Bull"}
        role={"alumni"}
      />
      <h1 className="People-header">Alumni</h1>
      <PersonItem
        firstname={"Taofeek"}
        lastname={"Braimoh, MSc"}
        photo={alumn1}
        role={"alumni"}
        linkedin={
          "https://www.linkedin.com/in/taofeek-braimoh?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgU4HDiGyQ56pK9jhlzvfSw%3D%3D"
        }
      />
    </div>
  );
};

export default PeoplePage;
