import React from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { createTheme, ThemeProvider, CssBaseline, Checkbox } from "@mui/material";
import NightsStayIcon from '@mui/icons-material/NightsStay'
import Brightness5Icon from '@mui/icons-material/Brightness5'

import darkModeController from "../themes/colors";
import masterTheme from "../masterTheme";
import { deepmerge } from "@mui/utils";
import SidebarLayout from "../components/sidebarLayout";

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
      <SidebarLayout>
        <Outlet />
      </SidebarLayout>
      <Checkbox
        sx={{ 
          color: "black", 
          "&.Mui-checked": { color: "white"},
          position: "fixed",
          top: 15,
          right: 15,
          margin: 2,
         }}
        icon={<Brightness5Icon style={{ color: "text"}} />}
        checkedIcon={<NightsStayIcon style={{ color: "text" }} />}
        checked={mode === "dark"}
        onChange={colorMode.toggleColorMode}
      />
      <TanStackRouterDevtools />
      </ThemeProvider>
      </ColorModeContext.Provider>
      </>
    );
  },
});
