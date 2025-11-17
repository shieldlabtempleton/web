import React from "react";
import PersonItem from "./PersonItem";
import { gradstudents, principalinvestigator, alumni } from "./People";

const PeoplePage = () => {
  return (
    <div className="People">
      <h1 className="People-header" id="Ph1">
        Principal Investigator
      </h1>
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
            suffix={pi.suffix}
            gscholar={pi.gscholar}
          />
        ))}
      </div>
      <h1 className="People-header" id="Ph2">
        Graduate Students
      </h1>
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
            website={person.website}
            researchfocus={person.researchfocus}
            employment={person.employment}
            publications={person.publications}
            presentations={person.presentations}
            prodev={person.prodev}
            education={person.education}
            acheivements={person.acheivements}
            suffix={person.suffix}
            gscholar={person.gscholar}
          />
        ))}
        {/* <PersonItem
          firstname={"Rocky"}
          middleinitial={"D."}
          lastname={"Bull"}
          role={"grad-student"}
        /> */}
      </div>
      <h1 className="People-header" id="Ph3">
        Alumni
      </h1>
      <div className="Alumni-container">
        {alumni.map((alumn, index) => (
          <PersonItem
            firstname={alumn.firstname}
            middleinitial={alumn.middleinitial}
            lastname={alumn.lastname}
            photo={alumn.photo}
            role={alumn.role}
            linkedin={alumn.linkedin}
            suffix={alumn.suffix}
          />
        ))}
      </div>
    </div>
  );
};

export default PeoplePage;
