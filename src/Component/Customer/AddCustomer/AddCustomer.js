import React, { useState } from "react";
import "./AddCustomer.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { fireStore } from "../../../firebaseConfig";
import { toast } from "react-toastify";
import {
  Paper,
  Button,
  TextField,
  Container,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

const AddCustomer = ({ open, handleClose, setCustomerData, customerData }) => {
  const handleCustomerData = (event) => {
    let name, value;
    name = event.target.name;
    value = event.target.value;
    setCustomerData({ ...customerData, [name]: value });
  };

  const SubmitCustomerData = async (e) => {
    e.preventDefault();
    try {
      const dataWithTime = {
        ...customerData,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp(),
      };
      const addCustomer = await addDoc(
        collection(fireStore, "Users"),
        dataWithTime
      );
      setCustomerData({});
      console.log(dataWithTime, "====");
      toast.success(
        `${customerData.customerName} Account Details added successfully`
      );
      handleClose();
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="Customer_Model">
          <Container maxWidth="sm">
            <Paper
              elevation={3}
              style={{
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <form>
                <div className="Name_AcCode">
                  <TextField
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    size="small"
                    name="customerName"
                    value={customerData.customerName}
                    onChange={handleCustomerData}
                  />
                  <TextField
                    label="Account Code"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    size="small"
                    name="AccountCode"
                    value={customerData.AccountCode}
                    onChange={handleCustomerData}
                  />
                </div>
                <div className="email_number">
                  <TextField
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    size="small"
                    name="Email"
                    value={customerData.Email}
                    onChange={handleCustomerData}
                  />
                  <TextField
                    label="Mobile Number"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    size="small"
                    name="MobileNumber"
                    value={customerData.MobileNumber}
                    onChange={handleCustomerData}
                  />
                </div>
                <div className="Date_role">
                  <TextField
                    label="Date"
                    type="date"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    name="Date"
                    value={customerData.Date}
                    onChange={handleCustomerData}
                    fullWidth
                  />

                  <FormControl
                    variant="outlined"
                    type="text"
                    margin="normal"
                    fullWidth
                    size="small"
                  >
                    <InputLabel id="role-label">Role</InputLabel>
                    <Select
                      labelId="role-label"
                      id="role"
                      label="Role"
                      name="Role"
                      value={customerData.Role}
                      onChange={handleCustomerData}
                    >
                      <MenuItem value="Customer">Customer</MenuItem>
                      <MenuItem value="Party">Party</MenuItem>
                      <MenuItem value="Labour">Labour</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  onClick={SubmitCustomerData}
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Container>
        </Box>
      </Modal>
    </>
  );
};

export default AddCustomer;
