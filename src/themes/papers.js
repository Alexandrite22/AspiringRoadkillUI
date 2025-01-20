import { createTheme } from "@mui/material/styles";

const papers = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: {
                variant: "sidebar",
              },
              style: {
                borderWidth: "3px",
              },
            },
          ],
        },
      },
    },
  },
});

export default papers;
