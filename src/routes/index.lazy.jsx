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
      <Typography variant="h1" color="textRK">
        Home
      </Typography>
      <Typography variant="h2" color="textRK">
        Home
      </Typography>
      <Typography variant="body1" color="textRK">
        Home
      </Typography>
      <Typography variant="body2" color="textRK">
        Home
      </Typography>
    </Paper>
  );
}
