import { Box, Paper, Typography } from "@mui/material";
import { Link, Outlet } from "@tanstack/react-router";
import breakpoints from "../themes/breakpoints";

import Logo from "../assets/Logo.png";

export default function SidebarLayout() {
  return (
    <Box
      sx={{
        margin: 0,
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
        display: "flex",
        [breakpoints.breakpoints.down("tablet")]: {
          flexDirection: "column",
        },
        [breakpoints.breakpoints.up("tablet")]: {
          flexDirection: "row",
        },
      }}
    >
      <Paper
        square={true}
        sx={{
          display: "flex",
          backgroundColor: "electricBlueRK.60",
          [breakpoints.breakpoints.down("tablet")]: {
            width: "100vw",
            height: "5em",
            flexDirection: "row",
            padding: "1em",
          },
          [breakpoints.breakpoints.up("tablet")]: {
            width: "12em",
            height: "100vh",
            flexDirection: "column",
            padding: "1.25em",
          },
          [breakpoints.breakpoints.up("laptop")]: {
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
              Under{"\n"}Construction
            </Typography>
          </Box>
        </Box>
        <Link to="/about" className="[&.active]:font-bold">
          <Typography variant="textLarge" color="textRK">
            About
          </Typography>
        </Link>
      </Paper>
      <Box
        backgroundColor="greyscaleRK.10"
        sx={{
          [breakpoints.breakpoints.down("tablet")]: {
            width: "100vw",
            height: "calc(100vh - 5em)",
            padding: "1em",
          },
          [breakpoints.breakpoints.up("tablet")]: {
            width: "calc(100vw - 12em)",
            height: "100vh",
            padding: "1.5em",
          },
          [breakpoints.breakpoints.up("laptop")]: {
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
