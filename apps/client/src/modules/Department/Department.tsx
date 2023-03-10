import { departmentsList } from "$core/index";
import { Chip, Divider, Grid, Paper, Typography } from "@mui/material";
import { FC } from "react";

export const Department: FC = () => {
  const handleClick = () => {};

  return (
    <>
      <Paper elevation={3} sx={{ marginTop: 4 }}>
        <div className="w-full p-8">
          <Typography variant="h6" gutterBottom>
            Select desired department
          </Typography>
          <Divider variant="fullWidth" sx={{ marginBottom: 4 }} />
          <Grid container spacing={1}>
            {departmentsList.map((dp) => (
              <Grid key={dp.name} sx={{ margin: 1 }}>
                <Chip label={dp.name} onClick={handleClick} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Paper>
    </>
  );
};
