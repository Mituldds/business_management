import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Admin from "../Admin/Admin";
import { Route, Routes } from "react-router-dom";
import "./Layout.css";
import Customer from "../Customer/Customer";
import Party from "../Party/Party";
import Labour from "../Labour/Labour";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Layout = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        drawerWidth={drawerWidth}
      />

      <Sidebar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        drawerWidth={drawerWidth}
      />

      <Main open={open}>
        <DrawerHeader />
        <div className="Layout_Main">
          {/* {children} */}
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/party" element={<Party />} />
            <Route path="/labour" element={<Labour />} />
          </Routes>
          <div>{/* <CustomerLogin /> */}</div>
        </div>
        <Footer />
      </Main>
    </Box>
  );
};

export default Layout;
