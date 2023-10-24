// import React, { useState, useEffect } from "react";
// import { Paper, Button } from "@mui/material";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import "./Party.css";

// const Party = () => {
//   const [openPartyModel, setOpenPartyModel] = useState(false);
//   const [partyEntry, setPartyEntry] = useState();

//   return (
//     <>
//       <div className="Party">
//         <div>Customer</div>

//         <div>
//           <Button color="success" variant="contained" size="small">
//             Add Customer
//           </Button>
//         </div>
//       </div>
//       <br />

//       <div className="Party_table">
//         <TableContainer component={Paper} className="Party_table">
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Role</TableCell>
//                 <TableCell>Account Code</TableCell>
//                 <TableCell>Account Name</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Mobile Number</TableCell>
//                 <TableCell>Created at</TableCell>
//                 <TableCell>Last Updated</TableCell>
//                 <TableCell>Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {customerEntry?.map((rowData, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{rowData.Role || "Nan"}</TableCell>
//                   <TableCell>{rowData.AccountCode || "Nan"}</TableCell>
//                   <TableCell>{rowData.customerName || "Nan"}</TableCell>
//                   <TableCell>{rowData.Email || "Nan"}</TableCell>
//                   <TableCell>{rowData.MobileNumber || "Nan"}</TableCell>
//                   <TableCell>
//                     {new Date(
//                       rowData.created_at.seconds * 1000
//                     ).toLocaleString() || "Nan"}
//                   </TableCell>
//                   <TableCell>
//                     {new Date(
//                       rowData.updated_at.seconds * 1000
//                     ).toLocaleString() || "Nan"}
//                   </TableCell>
//                   <TableCell>
//                     <div className="Party_Action">
//                       <div>
//                         <Button
//                           variant="contained"
//                           color="primary"
//                           size="small"
//                           onClick={() => hanldeEditCustomerEntry(rowData)}
//                         >
//                           Edit
//                         </Button>
//                       </div>
//                       <div>
//                         <Button
//                           variant="contained"
//                           color="error"
//                           size="small"
//                           onClick={() => handleDeleteCustomer(rowData._id)}
//                         >
//                           Delete
//                         </Button>
//                       </div>
//                     </div>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         <AddCustomer
//           open={open}
//           handleClose={handleClose}
//           data={data}
//           setCustomerData={setCustomerData}
//         />
//       </div>
//     </>
//   );
// };

// export default Party;
