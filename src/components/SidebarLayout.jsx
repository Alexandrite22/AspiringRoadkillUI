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
        id="sidebar-body"
        square={true}
        sx={{
          display: "flex",
          backgroundColor: "electricBlueRK.60",
          justifyContent: "space-between",
          [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "5em",
            flexDirection: "row",
            padding: "1em",
            justifyContent: "space-between",
          },
          [theme.breakpoints.up("sm")]: {
            width: "15em",
            height: "100vh",
            flexDirection: "column",
            padding: "1.25em",
          },
          [theme.breakpoints.up("lg")]: {
            width: "18em",
            padding: "1.5em",
          },
        }}
      >
        <Box
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            },
            [theme.breakpoints.up("sm")]: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <img
              style={{ width: "50px", height: "50px" }}
              src={Logo}
              alt="Logo"
              id="sidebar-logo"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "0.25em",
              }}
            >
              <Typography variant="h6" color="textRK">
                Under
              </Typography>
              <Typography variant="h6" color="textRK">
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
        </Box>
        <Box>
          <Typography variant="textMicro" color="textRK">
            © 2025 Under Construction
          </Typography>
        </Box>
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
