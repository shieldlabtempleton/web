import React from "react";
import PersonItem from "./PersonItem";
import alumn1 from "../assests/1643408680791.jpeg";
import { gradstudents, principalinvestigator } from "./People";

const PeoplePage = () => {
  return (
    <div className="People">
      <h1 className="People-header">Principal Investigator</h1>
      <div className="Pi-container">
        {principalinvestigator.map((pi, index) => (
          <PersonItem
            title={pi.title}
            firstname={pi.firstname}
            middleinitial={pi.middleinitial}
            lastname={pi.lastname}
            photo={pi.photo}
            role={pi.role}
            research={pi.research}
            education={pi.education}
            service={pi.service}
            career={pi.career}
            teaching={pi.teaching}
            prodev={pi.prodev}
            acheivements={pi.acheivements}
            email={pi.email}
            linkedin={pi.linkedin}
          />
        ))}
      </div>
      <h1 className="People-header">Graduate Students</h1>
      <div className="Grad-students-container">
        {gradstudents.map((person, index) => (
          <PersonItem
            key={index}
            photo={person.photo}
            title={person.title}
            firstname={person.firstname}
            middleinitial={person.middleinitial}
            lastname={person.lastname}
            role={person.role}
            email={person.email}
            linkedin={person.linkedin}
            researchfocus={person.researchfocus}
            publications={person.publications}
            prodev={person.prodev}
            education={person.education}
            acheivements={person.acheivements}
          />
        ))}
        {/* <PersonItem
          firstname={"Rocky"}
          middleinitial={"D."}
          lastname={"Bull"}
          role={"grad-student"}
        /> */}
      </div>
      <h1 className="People-header">Alumni</h1>
      <div className="Alumni-container">
        <PersonItem
          firstname={"Taofeek"}
          lastname={"Braimoh, MSc '25"}
          photo={alumn1}
          role={"alumni"}
          linkedin={
            "https://www.linkedin.com/in/taofeek-braimoh?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgU4HDiGyQ56pK9jhlzvfSw%3D%3D"
          }
        />
      </div>
    </div>
  );
};

export default PeoplePage;
