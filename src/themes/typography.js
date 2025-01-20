import { createTheme } from "@mui/material/styles";

import breakpoints from "./breakpoints";

//Current rough formula is laptop screen is 1x, desktop is 1.25x, tablet is 0.75x, and mobile is 0.5x
//may tweak later with testing
const typography = createTheme({
  typography: {
    headingLarge: {
      [breakpoints.breakpoints.up("mobile")]: {
        fontSize: "1.25rem",
      },
      [breakpoints.breakpoints.up("tablet")]: {
        fontSize: "1.875rem",
      },
      [breakpoints.breakpoints.up("laptop")]: {
        fontSize: "2.5rem",
      },
      [breakpoints.breakpoints.up("desktop")]: {
        fontSize: "3.125rem",
      },
    },
    headingMedium: {
      [breakpoints.breakpoints.up("mobile")]: {
        fontSize: "0.875rem",
      },
      [breakpoints.breakpoints.up("tablet")]: {
        fontSize: "1.3125rem",
      },
      [breakpoints.breakpoints.up("laptop")]: {
        fontSize: "1.75rem",
      },
      [breakpoints.breakpoints.up("desktop")]: {
        fontSize: "2.1875rem",
      },
    },
    headingSmall: {
      [breakpoints.breakpoints.up("mobile")]: {
        fontSize: "0.625rem",
      },
      [breakpoints.breakpoints.up("tablet")]: {
        fontSize: "0.9375rem",
      },
      [breakpoints.breakpoints.up("laptop")]: {
        fontSize: "1.25rem",
      },
      [breakpoints.breakpoints.up("desktop")]: {
        fontSize: "1.5625rem",
      },
    },
    textLarge: {
      [breakpoints.breakpoints.up("mobile")]: {
        fontSize: "0.5rem",
      },
      [breakpoints.breakpoints.up("tablet")]: {
        fontSize: "0.75rem",
      },
      [breakpoints.breakpoints.up("laptop")]: {
        fontSize: "1rem",
      },
      [breakpoints.breakpoints.up("desktop")]: {
        fontSize: "1.25rem",
      },
    },
    textSmall: {
      [breakpoints.breakpoints.up("mobile")]: {
        fontSize: "0.4375rem",
      },
      [breakpoints.breakpoints.up("tablet")]: {
        fontSize: "0.65625rem",
      },
      [breakpoints.breakpoints.up("laptop")]: {
        fontSize: "0.875rem",
      },
      [breakpoints.breakpoints.up("desktop")]: {
        fontSize: "1.09375rem",
      },
    },
    textMicro: {
      [breakpoints.breakpoints.up("mobile")]: {
        fontSize: "0.375rem",
      },
      [breakpoints.breakpoints.up("tablet")]: {
        fontSize: "0.5625rem",
      },
      [breakpoints.breakpoints.up("laptop")]: {
        fontSize: "0.75rem",
      },
      [breakpoints.breakpoints.up("desktop")]: {
        fontSize: "0.9375rem",
      },
    },
  },
});

export default typography;
