import { createTheme } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const Typography = () => {
  const theme = useTheme();
  return createTheme(
    {
    typography: {
      headingLarge: {
        [theme.breakpoints.up("xs")]: {
          fontSize: "1.25rem",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "1.875rem",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "2.5rem",
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: "3.125rem",
        },
      },
      headingMedium: {
        [theme.breakpoints.up("xs")]: {
          fontSize: "0.875rem",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "1.3125rem",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "1.75rem",
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: "2.1875rem",
        },
      },
      headingSmall: {
        [theme.breakpoints.up("xs")]: {
          fontSize: "0.625rem",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "0.9375rem",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "1.25rem",
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: "1.5625rem",
        },
      },
      textLarge: {
        [theme.breakpoints.up("xs")]: {
          fontSize: "0.5rem",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "0.75rem",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "1rem",
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: "1.25rem",
        },
      },
      textSmall: {
        [theme.breakpoints.up("xs")]: {
          fontSize: "0.4375rem",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "0.65625rem",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "0.875rem",
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: "1.09375rem",
        },
      },
      textMicro: {
        [theme.breakpoints.up("xs")]: {
          fontSize: "0.375rem",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "0.5625rem",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "0.75rem",
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: "0.9375rem",
        },
      },
    },
  })
}


export default Typography;
