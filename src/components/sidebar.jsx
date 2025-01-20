import { Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";

Sidebar.propTypes = {
  children: PropTypes.node,
};

function Sidebar({ children }) {
  return (
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
      <Typography variant="headingLarge">is this responsive?</Typography>
      {children}
    </Paper>
  );
}

export default Sidebar;
