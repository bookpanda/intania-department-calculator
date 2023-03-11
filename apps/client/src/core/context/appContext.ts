import { createContext, useContext } from "react";

import { coursesList } from "..";

export const baseCourses = {
  engDrawing: 0,
  engMaterials: 0,
  explEngWorld: 0,
  comProg: 0,
  calculusI: 0,
  calculusII: 0,
  physicsI: 0,
  physicsII: 0,
  chem: 0,
  expEngI: 0,
  expEngII: 0,
  physLabI: 0,
  physLabII: 0,
  chemLab: 0,
};

export interface IAppContext {
  department: string;
  setDepartment: (text: string) => void;
  courses: typeof baseCourses;
  setCourses: (courses: IAppContext["courses"]) => void;
  gpa: {
    sem1: { earnedCredits: number; totalCredits: number };
    sem2: { earnedCredits: number; totalCredits: number };
  };
}

export const AppContext = createContext<IAppContext>({
  department: "base",
  setDepartment: () => null,
  courses: baseCourses,
  setCourses: () => null,
  gpa: {
    sem1: { earnedCredits: 0, totalCredits: 0 },
    sem2: { earnedCredits: 0, totalCredits: 0 },
  },
});

export function useAppContext() {
  return useContext(AppContext);
}
