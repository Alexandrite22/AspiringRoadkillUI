import { Paper, Typography } from "@mui/material";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <Paper
      elevation={5}
      sx={{
        p: 2,
        backgroundColor: "greyscaleRK.20",
        display: "flex",
        height: "100%",
      }}
    >
      <Typography variant="headingLarge" color="textRK">
        Home
      </Typography>
    </Paper>
  );
}
