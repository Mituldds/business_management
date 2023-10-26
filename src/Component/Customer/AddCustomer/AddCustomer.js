import React, { useEffect, useState } from "react";
import "./AddCustomer.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AddCustomer = ({ open, handleClose, setData, Data }) => {
  const handleData = (event) => {
    let name, value;
    name = event.target.name;
    value = event.target.value;
    setData({ ...Data, [name]: value });
  };

  console.log(Data, "===========================");
  const SubmitData = async (e) => {
    e.preventDefault();
    try {
      if (
        !Data.Name ||
        !Data.AccountCode ||
        !Data.Email ||
        !Data.MobileNumber ||
        !Data.Date ||
        !Data.Role
      ) {
        toast.error("Please fulfill all requirements");
      } else {
        const dataWithTime = {
          ...Data,
          created_at: serverTimestamp(),
          updated_at: serverTimestamp(),
        };
        const addCustomer = await addDoc(
          collection(fireStore, "Users"),
          dataWithTime
        );
        // setData({});
        toast.success(`${Data?.Name} Account Details added successfully`);
        handleClose();
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      let { _id, ...updatedData } = Data;
      const customerRef = doc(fireStore, "Users", Data._id);

      await updateDoc(customerRef, { ...updatedData });

      handleClose();
      setData({});
    } catch (error) {
      console.error("Error updating document: ", error.message);
    }
  };

  // console.log(Data);

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
                    name="Name"
                    value={Data?.Name}
                    onChange={handleData}
                  />

                  <TextField
                    label="Account Code"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    size="small"
                    type="number"
                    name="AccountCode"
                    value={Data?.AccountCode}
                    onChange={handleData}
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
                    value={Data?.Email}
                    onChange={handleData}
                  />
                  <TextField
                    label="Mobile Number"
                    variant="outlined"
                    margin="normal"
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    size="small"
                    required
                    fullWidth
                    name="MobileNumber"
                    value={Data?.MobileNumber}
                    onChange={handleData}
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
                    value={Data?.Date}
                    onChange={handleData}
                    fullWidth
                  />
                  {/* <DatePicker
                    label="Date"
                    variant="outlined"
                    margin="normal"
                    name="Date"
                    value={Data?.Date}
                    onChange={handleData}
                    slotProps={{
                      textField: { size: "small" },
                    }}
                    sx={{ width: "100%" }}
                    fullWidth
                  /> */}

                  <FormControl
                    variant="outlined"
                    type="text"
                    margin="normal"
                    size="small"
                    fullWidth
                  >
                    <InputLabel id="role-label">Role</InputLabel>
                    <Select
                      labelId="role-label"
                      id="role"
                      label="Role"
                      name="Role"
                      value={Data?.Role}
                      onChange={handleData}
                      readOnly
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
                  onClick={Data?._id ? handleEdit : SubmitData}
                >
                  {Data?._id ? "Edit" : "Submit"}
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
