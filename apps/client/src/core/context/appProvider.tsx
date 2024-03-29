import {
  amber,
  green,
  lightGreen,
  lime,
  orange,
  red,
} from "@mui/material/colors";
import { FC, PropsWithChildren, useCallback, useEffect, useState } from "react";

import { coursesList, departments } from "..";
import { AppContext, IAppContext, baseCourses } from "./appContext";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [department, setDepartment] =
    useState<IAppContext["department"]>("civil");
  const [courses, setCourses] = useState<IAppContext["courses"]>(baseCourses);
  const [mul, setMul] = useState(coursesList);
  const [score, setScore] = useState({
    earnedScore: 0,
    totalScore: 0,
    percentage: 0,
  });
  const [text, setText] = useState({ text: "", color: "" });
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
    both: {
      earnedCredits: 0,
      totalCredits: coursesList
        .map((course) => course.credits)
        .reduce((total, curr) => {
          return total + curr;
        }),
    },
  });

  const calculateScore = useCallback(() => {
    let earnedScore = 0,
      totalScore = 0;
    for (const [key, value] of Object.entries(courses)) {
      earnedScore += value * mul.filter((m) => m.key === key)[0].credits;
      totalScore += 4 * mul.filter((m) => m.key === key)[0].credits;
    }
    const selectedDepartment = departments.filter(
      (dp) => dp.key === department
    )[0];
    const percentage =
      (earnedScore / selectedDepartment.record[0].score) * 20 +
      (earnedScore / selectedDepartment.record[1].score) * 25 +
      (earnedScore / selectedDepartment.record[2].score) * 25 +
      (earnedScore / selectedDepartment.record[3].score) * 30;
    setScore({
      earnedScore,
      totalScore,
      percentage,
    });
  }, [courses, mul]);

  useEffect(() => {
    calculateScore();
  }, [courses, mul, calculateScore]);

  useEffect(() => {
    if (score.percentage >= 120) {
      setText({ text: "Guaranteed success 🎉🎉", color: green[900] });
    } else if (score.percentage >= 110) {
      setText({ text: "Very high chance ✨", color: green[500] });
    } else if (score.percentage >= 105) {
      setText({ text: "High chance", color: lightGreen[500] });
    } else if (score.percentage >= 100) {
      setText({ text: "Possible", color: lime[800] });
    } else if (score.percentage >= 90) {
      setText({ text: "Try a little harder!", color: amber[700] });
    } else if (score.percentage >= 80) {
      setText({ text: "💀 Low chance", color: orange[700] });
    } else if (score.percentage >= 70) {
      setText({ text: "No more 🍻📱💻", color: orange[900] });
    } else if (score.percentage >= 60) {
      setText({ text: "💀💀💀 Very low chance", color: red[600] });
    } else if (score.percentage >= 50) {
      setText({ text: "Consider changing goals?", color: red[900] });
    } else {
      setText({ text: "Let's try again next year 🤗", color: red[900] });
    }
  }, [score]);

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
          return {
            ...overwriteCourse,
            semester: course.semester,
            key: course.key,
          };
        }
        return coursesList.filter((c) => c.name === course.name)[0];
      });
    });
  }, [department]);

  useEffect(() => {
    let sumsem1 = 0,
      sumsem2 = 0;
    for (const [key, value] of Object.entries(courses)) {
      const c = coursesList.filter((c) => c.key === key)[0];
      if (c.semester === 1) {
        sumsem1 += value * c.credits;
      } else if (c.semester === 2) {
        sumsem2 += value * c.credits;
      }
    }
    setGpa((gpa) => {
      return {
        sem1: { earnedCredits: sumsem1, totalCredits: gpa.sem1.totalCredits },
        sem2: { earnedCredits: sumsem2, totalCredits: gpa.sem2.totalCredits },
        both: {
          earnedCredits: sumsem1 + sumsem2,
          totalCredits: gpa.both.totalCredits,
        },
      };
    });
  }, [courses]);

  return (
    <AppContext.Provider
      value={{
        department,
        setDepartment,
        courses,
        setCourses,
        gpa,
        score,
        text,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
