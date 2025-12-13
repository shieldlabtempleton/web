import { createContext } from "react";
import { researchtopics } from "../webdata/ResearchTopics";

export const ResearchContext = createContext();

export const ResearchProvider = ({ children }) => {
  return (
    <ResearchContext.Provider value={{ research_directory: researchtopics }}>
      {children}
    </ResearchContext.Provider>
  );
};
