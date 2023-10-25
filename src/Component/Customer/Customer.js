import React, { useState, useEffect } from "react";
import { Paper, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { fireStore } from "../../firebaseConfig";
import AddCustomer from "./AddCustomer/AddCustomer";
import "./Customer.css";

const Customer = () => {
  const [open, setOpen] = useState(false);
  const [customerEntry, setCustomerEntry] = useState();
  const [customerData, setCustomerData] = useState({
    Role: "Customer",
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setCustomerData({ Role: "Customer" });
  };

  const getCustomerData = async () => {
    const customerData = collection(fireStore, "Users");
    const q = query(
      customerData,

      where("Role", "==", "Customer")

      // orderBy("AccountCode", "desc") // Sort by the 'time' field in descending order
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => {
      return {
        _id: doc.id,
        ...doc.data(),
      };
    });
    setCustomerEntry(data);
    console.log(data);
  };

  const hanldeEditCustomerEntry = (rowData) => {
    setCustomerData(rowData);
    handleOpen();
  };

  const handleDeleteCustomer = async (id) => {
    try {
      await deleteDoc(doc(fireStore, "Users", id));
      getCustomerData();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
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

      <div className="customer  _table">
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
                  <TableCell>{rowData.Name || "Nan"}</TableCell>
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
                          onClick={() => hanldeEditCustomerEntry(rowData)}
                        >
                          Edit
                        </Button>
                      </div>
                      <div>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          onClick={() => handleDeleteCustomer(rowData._id)}
                        >
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

        <AddCustomer
          open={open}
          handleClose={handleClose}
          Data={customerData}
          setData={setCustomerData}
        />
      </div>
    </>
  );
};

export default Customer;
