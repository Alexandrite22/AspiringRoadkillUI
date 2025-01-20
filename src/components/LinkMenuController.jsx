import React from "react";
import { Box, Link, List, ListItemButton, ListItemText, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles"; // Import useTheme for theme breakpoints
import useMediaQuery from '@mui/material/useMediaQuery'; // Correct import for useMediaQuery
import PropTypes from 'prop-types';
import { useNavigate } from '@tanstack/react-router';

const LinkMenuController = ({ links }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const theme = useTheme();

    // Detect if the screen is xs or xl
    const isXS = useMediaQuery(theme.breakpoints.down('sm')); // This will return true for xs sizes
    const isXL = useMediaQuery(theme.breakpoints.up('md')); // This will return true for larger screen sizes like lg or xl

    // Open the menu when clicking the list item
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Prepare options from the links
    const options = links.map(link => ({
        href: link.href,
        text: link.text,
        icon: link.icon
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
            {isXS && (
                <Box>
                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{ bgcolor: 'electricBlue.60', 
                            padding: 0,
                        }}
                    >
                        <ListItemButton
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="when device is locked"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                            sx={{ padding: 0 }}
                        >
                            <ListItemText
                                primary={"Selection: " + options[selectedIndex].text}
                                secondary={options[selectedIndex].text}
                            />
                        </ListItemButton>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
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
            {isXL && (
                <Box>
                    {links.map((link, index) => (
                        <Box key={index}>
                            {link.icon}
                            <Link key={index} href={link.href} underline="hover">
                                {link.text}
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
        })
    ).isRequired
};

export default LinkMenuController;
