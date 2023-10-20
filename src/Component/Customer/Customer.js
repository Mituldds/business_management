import React, { useState } from "react";
import {
  Paper,
  Typography,
  Button,
  TextField,
  Container,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Customer.css";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 4.9, 2.4),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.9, 2.4),
  createData("Eclair", 262, 16.0, 24, 6.0, 4.9, 2.4),
  createData("Cupcake", 305, 3.7, 67, 4.3, 4.9, 2.4),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 4.9, 2.4),
];

const data = [
  {
    role: "Admin",
    accountCode: "AC123",
    accountName: "John Doe",
    email: "johndoe@example.com",
    mobileNumber: "123-456-7890",
    createdAt: "2023-01-01",
    lastUpdated: "2023-10-20",
  },
  {
    role: "User",
    accountCode: "AC456",
    accountName: "Jane Smith Jane Smi",
    email: "janesmith@example.com",
    mobileNumber: "987-654-3210",
    createdAt: "2023-02-15",
    lastUpdated: "2023-10-19",
  },
  // Add more data as needed
];
const Customer = () => {
  const [open, setOpen] = useState(false);
  const [customerData, setCustomerData] = useState({
    customerName: "",
    AccountCode: "",
    Email: "",
    MobileNumber: "",
    Date: "",
    Role: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCustomerData = (event) => {
    let name, value;
    name = event.target.name;
    value = event.target.value;
    setCustomerData({ ...customerData, [name]: value });
  };

  const SubmitCustomerData = () => {};

  return (
    <>
      <div className="Customer">
        <div>Customer</div>

        <div>
          <Button variant="contained" size="small" onClick={handleOpen}>
            Add Customer
          </Button>
        </div>
      </div>
      <br />
      <div>
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
                <Typography variant="h5" component="h2" gutterBottom>
                  Add Customer
                </Typography>
                <form onClick={SubmitCustomerData}>
                  <div className="Name_AcCode">
                    <TextField
                      label="Name"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      size="small"
                      name="name"
                      value={customerData.name}
                      onChange={handleCustomerData}
                    />
                    <TextField
                      label="Account Code"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      size="small"
                      name=""
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
                      onChange={handleCustomerData}
                    />
                    <TextField
                      label="Mobile Number"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      size="small"
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
                      onChange={handleCustomerData}
                      fullWidth
                    />
                    <FormControl
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      size="small"
                      onChange={handleCustomerData}
                    >
                      <InputLabel id="role-label">Role</InputLabel>
                      <Select labelId="role-label" id="role" label="Role">
                        <MenuItem value="user">Customer</MenuItem>
                        <MenuItem value="admin">Party</MenuItem>
                        <MenuItem value="admin">Labour</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              </Paper>
            </Container>
          </Box>
        </Modal>
      </div>

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
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.accountCode}</TableCell>
                  <TableCell>{row.accountName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.mobileNumber}</TableCell>
                  <TableCell>{row.createdAt}</TableCell>
                  <TableCell>{row.lastUpdated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Customer;
