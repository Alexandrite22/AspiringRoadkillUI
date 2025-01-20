import React from "react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { createTheme, ThemeProvider, CssBaseline, Button } from "@mui/material";

import darkModeController from "../themes/colors";
import masterTheme from "../masterTheme";
import { deepmerge } from "@mui/utils";

import { Paper } from "@mui/material";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const Route = createRootRoute({
  component: function Component() {
    const colorMode = React.useMemo(
      () => ({
        // The dark mode switch would invoke this method
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        },
      }),
      [],
    );
    const [mode, setMode] = React.useState("light");
    const theme = React.useMemo(
      () => createTheme(deepmerge(masterTheme, darkModeController(mode))),
      [mode],
    );

    return (
      <>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
            <Paper
              sx={{
                width: "15vw",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                backgroundColor: "electricBlueRK.60",
                padding: 2,
              }}
            >
              <Button onClick={colorMode.toggleColorMode}>Light/Dark</Button>
              <Link to="/" className="[&.active]:font-bold">
                Home
              </Link>{" "}
              <Link to="/about" className="[&.active]:font-bold">
                About
              </Link>
            </Paper>
            <div style={{ marginLeft: "15vw", padding: "1rem" }}>
              <Outlet />
            </div>
            <TanStackRouterDevtools />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </>
    );
  },
});
