import { useAppContext } from "$core/context/appContext";
import { departments } from "$core/data";
import { colorPalette } from "$theme/colors";
import { Divider, Paper, Typography } from "@mui/material";
import { FC } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Result: FC = () => {
  const { department } = useAppContext();
  const percentage = 80;
  return (
    <Paper elevation={3} sx={{ marginTop: 4 }}>
      <div className="w-full p-8">
        <Typography variant="h6" gutterBottom textAlign="center">
          {departments.filter((dp) => dp.key === department)[0].name}{" "}
          Engineering
        </Typography>
        <Divider variant="fullWidth" sx={{ marginBottom: 4 }} />
        <div className="flex w-full justify-center">
          <div className="w-3/5">
            <CircularProgressbarWithChildren
              value={percentage}
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
              <Typography variant="h4">{percentage} %</Typography>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </Paper>
  );
};
