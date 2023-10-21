import React, { useState, useEffect } from "react";
import { Paper, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../firebaseConfig";
import AddCustomer from "./AddCustomer/AddCustomer";
import "./Customer.css";

const Customer = () => {
  const [open, setOpen] = useState(false);
  const [customerEntry, setCustomerEntry] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getCustomerData = async () => {
    const customerData = collection(fireStore, "Users");
    const querySnapshot = await getDocs(customerData);
    const data = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setCustomerEntry(data);
    console.log(data);
  };

  useEffect(() => {
    getCustomerData();
  }, [open]);

  return (
    <>
      <div className="Customer">
        <div>Customer</div>

        <div>
          <Button
            color="success"
            variant="contained"
            size="small"
            onClick={handleOpen}
          >
            Add Customer
          </Button>
        </div>
      </div>
      <br />

      <div className="customer_table">
        <TableContainer component={Paper} className="customer_table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Role</TableCell>
                <TableCell>Account Code</TableCell>
                <TableCell>Account Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Created at</TableCell>
                <TableCell>Last Updated</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerEntry?.map((rowData, index) => (
                <TableRow key={index}>
                  <TableCell>{rowData.Role || "Nan"}</TableCell>
                  <TableCell>{rowData.AccountCode || "Nan"}</TableCell>
                  <TableCell>{rowData.customerName || "Nan"}</TableCell>
                  <TableCell>{rowData.Email || "Nan"}</TableCell>
                  <TableCell>{rowData.MobileNumber || "Nan"}</TableCell>
                  <TableCell>
                    {new Date(
                      rowData.created_at.seconds * 1000
                    ).toLocaleString() || "Nan"}
                  </TableCell>
                  <TableCell>
                    {new Date(
                      rowData.updated_at.seconds * 1000
                    ).toLocaleString() || "Nan"}
                  </TableCell>
                  <TableCell>
                    <div className="Action">
                      <div>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                        >
                          Edit
                        </Button>
                      </div>
                      <div>
                        <Button variant="contained" color="error" size="small">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <AddCustomer open={open} handleClose={handleClose} />
      </div>
    </>
  );
};

export default Customer;
