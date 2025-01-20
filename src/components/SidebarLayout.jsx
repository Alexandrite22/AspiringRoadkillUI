import { Box, Paper, Typography } from "@mui/material";
import { Outlet } from "@tanstack/react-router";
import LinkMenuController from "./LinkMenuController";
import { useTheme } from "@mui/material/styles";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Logo from "../assets/Logo.png";

export default function SidebarLayout() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        margin: 0,
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
        display: "flex",
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
        },
        [theme.breakpoints.up("sm")]: {
          flexDirection: "row",
        },
      }}
    >
      <Paper
        square={true}
        sx={{
          display: "flex",
          backgroundColor: "electricBlueRK.60",
          [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "5em",
            flexDirection: "row",
            padding: "1em",
          },
          [theme.breakpoints.up("sm")]: {
            width: "12em",
            height: "100vh",
            flexDirection: "column",
            padding: "1.25em",
          },
          [theme.breakpoints.up("lg")]: {
            width: "15em",
            padding: "1.5em",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img style={{ width: "50px" }} src={Logo} alt="Logo" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "0.25em",
            }}
          >
            <Typography variant="textNormal" color="textRK">
              Under
            </Typography>
            <Typography variant="textNormal" color="textRK">
              Construction
            </Typography>
          </Box>
        </Box>
        <LinkMenuController
          links={[
            { href: "/", text: "Home", icon: <HomeIcon /> },
            { href: "/about", text: "About", icon: <InfoIcon /> },
          ]}
        />
      </Paper>
      <Box
        backgroundColor="greyscaleRK.10"
        sx={{
          [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "calc(100vh - 5em)",
            padding: "1em",
          },
          [theme.breakpoints.up("sm")]: {
            width: "calc(100vw - 12em)",
            height: "100vh",
            padding: "1.5em",
          },
          [theme.breakpoints.up("lg")]: {
            width: "calc(100vw - 15em)",
            padding: "2em",
          },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
