import { FC, PropsWithChildren, useEffect, useState } from "react";

import { coursesList, nameToKey, weights } from "..";
import { AppContext, IAppContext, baseCourses } from "./appContext";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [department, setDepartment] =
    useState<IAppContext["department"]>("base");
  const [courses, setCourses] = useState<IAppContext["courses"]>(baseCourses);
  const [mul, setMul] = useState(weights.base);
  const [gpa, setGpa] = useState<IAppContext["gpa"]>({
    sem1: {
      earnedCredits: 0,
      totalCredits: coursesList
        .filter((course) => course.semester === 1)
        .reduce((total, curr) => {
          return { ...total, credits: total.credits + curr.credits };
        }).credits,
    },
    sem2: {
      earnedCredits: 0,
      totalCredits: coursesList
        .filter((course) => course.semester === 2)
        .reduce((total, curr) => {
          return { ...total, credits: total.credits + curr.credits };
        }).credits,
    },
  });

  useEffect(() => {
    setMul({ ...mul, ...weights[department as string] });
    console.log(mul);
  }, [department]);

  // useEffect(() => {
  //   let sum = 0;
  //   for (const [key, value] of Object.entries(courses)) {
  //     sum += value * mul[key as string];
  //   }
  // }, [courses]);

  return (
    <AppContext.Provider
      value={{ department, setDepartment, courses, setCourses, gpa }}
    >
      {children}
    </AppContext.Provider>
  );
};
