import { createContext, useContext } from "react";

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
  department: string | null;
  setDepartment: (text: string) => void;
  courses: typeof baseCourses;
  setCourses: (courses: IAppContext["courses"]) => void;
}

export const AppContext = createContext<IAppContext>({
  department: null,
  setDepartment: () => null,
  courses: baseCourses,
  setCourses: () => null,
});

export function useAppContext() {
  return useContext(AppContext);
}
