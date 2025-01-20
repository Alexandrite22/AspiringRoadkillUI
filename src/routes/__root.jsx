import React from "react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { createTheme, ThemeProvider, CssBaseline, Button } from "@mui/material";

import darkModeController from "../themes/colors";
import masterTheme from "../masterTheme";
import Sidebar from "../components/sidebar";
import { deepmerge } from "@mui/utils";

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
            <Sidebar>
              <Link to="/" className="[&.active]:font-bold">
                Home
              </Link>{" "}
              <Link to="/about" className="[&.active]:font-bold">
                About
              </Link>
              <Button onClick={colorMode.toggleColorMode}>Light/Dark</Button>
            </Sidebar>
            <Outlet />
            <TanStackRouterDevtools />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </>
    );
  },
});
