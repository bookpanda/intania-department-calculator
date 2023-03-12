import { useAppContext } from "$core/context/appContext";
import { departments } from "$core/data";
import { colorPalette } from "$theme/colors";
import {
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FC } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Result: FC = () => {
  const { department, gpa, score, text } = useAppContext();
  const selectedDepartment = departments.filter(
    (dp) => dp.key === department
  )[0];
  return (
    <Paper elevation={3} sx={{ marginTop: 4 }}>
      <div className="w-full p-8">
        <Typography variant="h6" gutterBottom textAlign="center">
          {departments.filter((dp) => dp.key === department)[0].name}{" "}
          Engineering
        </Typography>
        <Divider variant="fullWidth" sx={{ marginBottom: 4 }} />
        <div className="flex w-full flex-col items-center">
          <Typography variant="h5" marginBottom={2}>
            % of lowest entry score
          </Typography>
          <div className="mb-6 lg:w-3/5">
            <CircularProgressbarWithChildren
              value={Math.min(100, score.percentage)}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "round",
                pathTransitionDuration: 0.5,
                pathColor: colorPalette.red,
                textColor: colorPalette["gray-dark"],
                trailColor: colorPalette["gray-light"],
                backgroundColor: colorPalette.red,
              })}
            >
              <Typography variant="h4">
                {score.percentage.toFixed(2)} %
              </Typography>
            </CircularProgressbarWithChildren>
          </div>
          <Typography
            variant="h5"
            fontWeight="600"
            marginBottom={2}
            color={text.color}
          >
            {text.text}
          </Typography>
          <Typography variant="h5" fontWeight="600" marginBottom={4}>
            GPAX: {(gpa.both.earnedCredits / gpa.both.totalCredits).toFixed(2)}
            <br />
            Score: {score.earnedScore.toFixed(1)} /{" "}
            {score.totalScore.toFixed(1)}
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Year</TableCell>
                <TableCell align="right">Accepted</TableCell>
                <TableCell align="right">Score</TableCell>
                <TableCell align="right">GPAX</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedDepartment.record.map((rc) => (
                <TableRow
                  key={rc.year}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {rc.year}
                  </TableCell>
                  <TableCell align="right">{rc.accept}</TableCell>
                  <TableCell align="right">{rc.score}</TableCell>
                  <TableCell align="right">{rc.gpax}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Paper>
  );
};
