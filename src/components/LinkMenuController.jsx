import React from "react";
import {
  Box,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles"; // Import useTheme for theme breakpoints
import useMediaQuery from "@mui/material/useMediaQuery"; // Correct import for useMediaQuery
import PropTypes from "prop-types";
import { useNavigate } from "@tanstack/react-router";

//The purpose of this component is to take an indeterminate number of links and display
//them in a pop up menu format when switching to a mobile view. in laptop/desktop view they will still be displayed as a list of links
//TODO: develop the LinkMenuController to handle nested links as well

const LinkMenuController = ({ links }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const theme = useTheme();

  // Detect if the screen is xs or xl
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  const isLG = useMediaQuery(theme.breakpoints.up("sm"));
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Prepare options from the links
  const options = links.map((link) => ({
    href: link.href,
    text: link.text,
    icon: link.icon,
  }));

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    navigate({
      to: options[index].href,
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isSM && (
        <Box>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ bgcolor: "electricBlue.60", padding: 0 }}
          >
            <ListItemButton
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ padding: 0 }}
            >
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "0.75rem" }}>
                    {"Selection: " + options[selectedIndex].text}
                  </Typography>
                }
                secondary={
                  <Typography sx={{ fontSize: "0.75rem" }}>
                    {options[selectedIndex].text}
                  </Typography>
                }
              />
            </ListItemButton>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={index}
                disabled={index === selectedIndex}
                onClick={() => handleMenuItemClick(index, navigate)}
              >
                {option.text}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      )}
      {isLG && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            mt: "2em",
            pt: "1em",
            borderTop: "1px solid",
          }}
        >
          {links.map((link, index) => (
            <Box
              sx={{
                [theme.breakpoints.up("sm")]: {
                  mt: "0.125em",
                },
                [theme.breakpoints.up("md")]: {
                  mt: "0.25em",
                },
                [theme.breakpoints.up("lg")]: {
                  mt: "0.325em",
                },
                [theme.breakpoints.up("xl")]: {
                  mt: "0.45em",
                },
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              key={index}
            >
              {link.icon}
              <Link key={index} href={link.href} underline="hover">
                <Typography variant="textNormal" color="textRK">
                  {link.text}
                </Typography>
              </Link>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

LinkMenuController.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
    }),
  ).isRequired,
};

export default LinkMenuController;
