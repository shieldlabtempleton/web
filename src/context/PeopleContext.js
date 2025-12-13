import { createContext } from "react";
import { principalinvestigator } from "../webdata/People";
import { gradstudents } from "../webdata/People";
import { alumni } from "../webdata/People";

export const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  return (
    <PeopleContext.Provider
      value={{ pi: principalinvestigator, grad: gradstudents, alumn: alumni }}
    >
      {children}
    </PeopleContext.Provider>
  );
};
