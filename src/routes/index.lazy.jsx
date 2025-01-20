import { Paper, Typography } from "@mui/material";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Paper
      sx={{ p: 2,
      backgroundColor: "greyscaleRK.20",
      display: "flex",
     }}>
      <Typography variant="headingLarge" color="textRK">Home</Typography>
    </Paper>
  )
}
