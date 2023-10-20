import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Stack } from "@mui/material";
import { indigo } from "@mui/material/colors";
import "./Header.css";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = ({ drawerWidth, open, handleDrawerOpen }) => {
  const theme = useTheme();

  return (
    <AppBar position="fixed" open={open} style={{ backgroundColor: "white" }}>
      <Toolbar className="navbar">
        <IconButton
          color="white"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon style={{ color: "#F9EBD8" }} />
        </IconButton>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ color: "white" }}>Business Management</div>

          <div className="navbar_right">
            <Typography variant="h6" noWrap color={"white"}>
              DDS
            </Typography>

            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: indigo[400] }}>DS</Avatar>
            </Stack>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
