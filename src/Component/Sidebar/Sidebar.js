import React from "react";
import "./Sidebar.css";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CategoryIcon from "@mui/icons-material/Category";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <div>
            <p className="sidebar_title">
              <i>
                <SpaceDashboardIcon className="sidebar_icon" />
              </i>{" "}
              Dashboard
            </p>
          </div>
          <br />

          <li>
            <i>
              <StorefrontIcon className="sidebar_icon" />{" "}
            </i>{" "}
            Account Master
          </li>
          <li>
            <i className="fas fa-info-circle">
              <ContactMailIcon className="sidebar_icon" />
            </i>{" "}
            Item Master
          </li>
          <li>
            <i className="fas fa-cogs">
              <CategoryIcon className="sidebar_icon" />
            </i>{" "}
            Services
          </li>
          <li>
            <i className="fas fa-envelope">
              <StorefrontIcon className="sidebar_icon" />
            </i>{" "}
            Contact Us
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

// Sidebar.js

// Sidebar.js
// import React from "react";
// import "./Sidebar.css";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <ul>
//         <li>
//           <i><StorefrontIcon /> </i> Home
//         </li>
//         <li>
//           <i className="fas fa-info-circle"></i> About
//         </li>
//         <li>
//           <i className="fas fa-cogs"></i> Services
//         </li>
//         <li>
//           <i className="fas fa-envelope"></i> Contact
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
