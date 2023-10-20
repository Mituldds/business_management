import React from "react";
import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const Sidebar = ({ handleDrawerClose, open, drawerWidth }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [openDropDown, setOpenDropDown] = React.useState(false);

  const handleClick = () => {
    setOpenDropDown(!openDropDown);
  };

  const handleCustomer = () => {
    navigate("/admin/customer");
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#21273C",
          color: "#fff",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Typography
          variant="small"
          noWrap
          component="div"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Business Management
        </Typography>

        <IconButton onClick={handleDrawerClose} style={{ color: "white" }}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {/* {["Account Master", "Customer", "party", "Labour", "Item Master"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )} */}

        <ListItem onClick={handleClick}>
          <ListItemText primary="Account Master" />
          {openDropDown ? <MailIcon /> : <InboxIcon />}
        </ListItem>
        {openDropDown && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem className="sub-menu-item" onClick={handleCustomer}>
                <ListItemText primary="Customer" />
              </ListItem>
              <ListItem className="sub-menu-item">
                <ListItemText primary="party" />
              </ListItem>
              <ListItem className="sub-menu-item">
                <ListItemText primary="Labour" />
              </ListItem>
            </List>
          </Collapse>
        )}
        <List>
          <ListItem>
            <ListItemText>Item Master</ListItemText>
            {<MailIcon />}
          </ListItem>
        </List>
      </List>
    </Drawer>
  );
};

export default Sidebar;
