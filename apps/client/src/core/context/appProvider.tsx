import { FC, PropsWithChildren, useEffect, useState } from "react";

import { coursesList, departments } from "..";
import { AppContext, IAppContext, baseCourses } from "./appContext";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [department, setDepartment] =
    useState<IAppContext["department"]>("civil");
  const [courses, setCourses] = useState<IAppContext["courses"]>(baseCourses);
  const [mul, setMul] = useState(coursesList);
  const [gpa, setGpa] = useState<IAppContext["gpa"]>({
    sem1: {
      earnedCredits: 0,
      totalCredits: coursesList
        .filter((course) => course.semester === 1)
        .map((course) => course.credits)
        .reduce((total, curr) => {
          return total + curr;
        }),
    },
    sem2: {
      earnedCredits: 0,
      totalCredits: coursesList
        .filter((course) => course.semester === 2)
        .map((course) => course.credits)
        .reduce((total, curr) => {
          return total + curr;
        }),
    },
  });

  useEffect(() => {
    const selectedDepartment = departments.filter(
      (dp) => dp.key === department
    )[0];
    setMul((mul) => {
      return mul.map((course) => {
        const overwriteCourse = selectedDepartment.weights.filter(
          (c) => c.name === course.name
        )[0];
        if (overwriteCourse) {
          return { ...overwriteCourse, semester: course.semester };
        }
        return course;
      });
    });
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
