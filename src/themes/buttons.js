import { createTheme } from "@mui/material/styles";

const buttons = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: {
                variant: "standard",
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

export default buttons;
