import { coursesList, detailedCourses } from "$core/index";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import { FC } from "react";

import { GradeInput } from "./GradeInput";

export const Semester: FC = () => {
  const sem1Subjects = coursesList.filter((item) => item.semester === 1);
  const sem2Subjects = coursesList.filter((item) => item.semester === 2);
  return (
    <>
      <Paper elevation={3} sx={{ marginTop: 4 }}>
        <div className="w-full p-8">
          <Typography variant="h6" gutterBottom>
            Semester 1
          </Typography>
          <Divider variant="fullWidth" sx={{ marginBottom: 4 }} />
          <Grid container spacing={2}>
            {sem1Subjects.map((course) => (
              <Grid key={course.name} xs={4}>
                <GradeInput name={course.name} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Paper>
      <Paper elevation={3} sx={{ marginTop: 4 }}>
        <div className="w-full p-8">
          <Typography variant="h6" gutterBottom>
            Semester 2
          </Typography>
          <Divider variant="fullWidth" sx={{ marginBottom: 4 }} />
          <Grid container spacing={2}>
            {sem2Subjects.map((course) => (
              <Grid key={course.name} xs={4}>
                <GradeInput name={course.name} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Paper>
    </>
  );
};
