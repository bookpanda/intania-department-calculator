import { createTheme } from "@mui/material";

import { colorPalette } from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: colorPalette.red,
      dark: colorPalette["red-dark"],
    },
  },
});
