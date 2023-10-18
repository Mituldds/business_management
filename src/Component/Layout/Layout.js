import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
const Layout = () => {
  return (
    <div className="Layout">
      <div className="Layout_left">
        <Sidebar />
      </div>

      <div className="Layout_right">
        <div>
          <Header />
        </div>
        <div>Component</div>
        <div>footer</div>
      </div>
    </div>
  );
};

export default Layout;

// import React from "react";
// import {
//   AppBar,
//   Box,
//   Divider,
//   Drawer,
//   IconButton,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// // import WidgetsIcon from "@mui/icons-material/Widgets";
// // import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./Layout.css";

// const Layout = () => {
//   const [mobileopen, setMobileopen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileopen(!mobileopen);
//   };
//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography
//         color={"goldenrod"}
//         variant="h6"
//         component="div"
//         sx={{ flexGrow: 1, my: 2 }}
//       >
//         <img alt="logo" height={"70"} width="200" />
//       </Typography>
//       <Divider></Divider>
//       <ul className="mobile_navigation">
//         <li>
//           <Link to={"/home"}>Home</Link>
//         </li>
//         <li>
//           <Link to={"/menu"}>Menu</Link>
//         </li>
//         <li>
//           <Link to={"/about"}>About</Link>
//         </li>
//         <li>
//           <Link to={"/contact"}>Contact</Link>
//         </li>
//         <li>
//           <Link to={"/"}>Login</Link>
//         </li>
//       </ul>
//     </Box>
//   );
//   return (
//     <>
//       <Box>
//         <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               sx={{ mr: 2, display: { sm: "none" } }}
//               onClick={handleDrawerToggle}
//             >
//               {/* <WidgetsRoundedIcon /> */}
//             </IconButton>
//             <Typography
//               color={"goldenrod"}
//               variant="h6"
//               component="div"
//               sx={{ flexGrow: 1 }}
//             >
//               <img alt="logo" height={"70"} width={250} />
//             </Typography>

//             <Box sx={{ display: { xs: "none", sm: "block" } }}>
//               <ul className="navigation_menu">
//                 <li>
//                   <Link to={"/home"}>Home</Link>
//                 </li>
//                 <li>
//                   <Link to={"/menu"}>Menu</Link>
//                 </li>
//                 <li>
//                   <Link to={"/about"}>About</Link>
//                 </li>
//                 <li>
//                   <Link to={"/contact"}>Contact</Link>
//                 </li>
//                 <li>
//                   <Link to={"/"}>Login</Link>
//                 </li>
//               </ul>
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <Box component="nav">
//           <Drawer
//             variant="temporary"
//             open={mobileopen}
//             onClose={handleDrawerToggle}
//             sx={{
//               display: { xs: "block", sm: "none" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: "240px",
//               },
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Box>

//         <Box>
//           <Toolbar />
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Layout;
