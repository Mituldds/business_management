import React from "react";
import { indigo } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";

import { Typography, Toolbar, IconButton, Stack, Avatar } from "@mui/material";

const Footer = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <footer>
      <Toolbar sx={{ padding: "0px !important" }} className="footer">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "antiquewhite",
            width: "100%",
            padding: "15px 40px",
          }}
        >
          <div style={{ color: "black" }}>Business Management</div>
          <div>
            <Typography noWrap color={"black"}>
              Made with using React and Material-UI
            </Typography>
          </div>
        </div>
      </Toolbar>
    </footer>
  );
};

export default Footer;
