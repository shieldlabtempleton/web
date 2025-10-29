import React from "react";
import Placeholder from "./Placeholder";
import ResearchCard from "./ResearchCard";
import { ReactComponent as Heart } from "../assests/heart.svg";
import { ReactComponent as Brain } from "../assests/brain.svg";
import { ReactComponent as Cell } from "../assests/cell.svg";
import { ReactComponent as Biomechanics } from "../assests/biomechanics.svg";
import { ReactComponent as Publichealth } from "../assests/public-health.svg";

const ResearchPage = () => {
  return (
    <div className="Research">
      <div className="Research-items">
        {/* <ResearchCard Icon={Biomechanics} topic={"Biomechanics"} />
        <ResearchCard Icon={Cell} topic={"Cancer"} />
        <ResearchCard Icon={Heart} topic={"Cardiology"} description={""} />
        <ResearchCard Icon={Brain} topic={"Neurology"} />
        <ResearchCard Icon={Publichealth} topic={"Public Health"} /> */}
        <Placeholder />
      </div>
    </div>
  );
};

export default ResearchPage;
