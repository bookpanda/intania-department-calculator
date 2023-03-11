import { useAppContext } from "$core/context/appContext";
import { coursesList } from "$core/index";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import { FC } from "react";

import { GradeInput } from "./GradeInput";

export const Semester: FC = () => {
  const sem1Subjects = coursesList.filter((item) => item.semester === 1);
  const sem2Subjects = coursesList.filter((item) => item.semester === 2);
  const { gpa } = useAppContext();
  return (
    <>
      <Paper elevation={3} sx={{ marginTop: 4 }}>
        <div className="w-full p-8">
          <Typography variant="h6" gutterBottom>
            Semester 1:{" "}
            {(gpa.sem1.earnedCredits / gpa.sem1.totalCredits).toFixed(2)} / 4.00
          </Typography>
          <Divider variant="fullWidth" sx={{ marginBottom: 4 }} />
          <Grid container spacing={2}>
            {sem1Subjects.map((course) => (
              <Grid
                key={course.name}
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <GradeInput name={course.name} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Paper>
      <Paper elevation={3} sx={{ marginTop: 4 }}>
        <div className="w-full p-8">
          <Typography variant="h6" gutterBottom>
            Semester 2:{" "}
            {(gpa.sem2.earnedCredits / gpa.sem2.totalCredits).toFixed(2)} / 4.00
          </Typography>
          <Divider variant="fullWidth" sx={{ marginBottom: 4 }} />
          <Grid container spacing={2}>
            {sem2Subjects.map((course) => (
              <Grid
                key={course.name}
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <GradeInput name={course.name} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Paper>
    </>
  );
};
