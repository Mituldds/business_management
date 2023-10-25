import React, { useEffect, useState } from "react";
import { Paper, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import "./Labour.css";
import AddCustomer from "../Customer/AddCustomer/AddCustomer";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { fireStore } from "../../firebaseConfig";

const Labour = () => {
  const [openLabourModel, setOpenLabourModel] = useState(false);
  const [labourEntry, setLabourEntry] = useState();
  const [labourData, setLabourData] = useState({
    Role: "Labour",
  });

  const handleOpen = () => {
    setOpenLabourModel(true);
  };
  const handleClose = () => {
    setOpenLabourModel(false);
    setLabourData({
      Role: "Labour",
    });
  };
  const AddLabourData = () => {
    handleOpen(true);
  };

  const getLabourData = async () => {
    const LabourData = collection(fireStore, "Users");

    const q = query(LabourData, where("Role", "==", "Labour"));
    const querySnapshot = await getDocs(q);
    const Data = querySnapshot.docs.map((doc) => {
      return {
        _id: doc.id,
        ...doc.data(),
      };
    });
    setLabourEntry(Data);
  };

  const hanldeEditLabourEntry = (rowData) => {
    setLabourData(rowData);
    handleOpen();
  };
  const handleDeleteLabour = async (id) => {
    try {
      await deleteDoc(doc(fireStore, "Users", id));
      getLabourData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLabourData(openLabourModel);
  }, [openLabourModel]);

  return (
    <>
      <div className="Labour">
        <div>Labour</div>

        <div>
          <Button
            color="success"
            variant="contained"
            size="small"
            onClick={AddLabourData}
          >
            Add Labour
          </Button>
        </div>
      </div>
      <br />

      <div className="Labour_table">
        <TableContainer component={Paper} className="Labour_table">
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
              {labourEntry?.map((rowData, index) => (
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
                    <div className="Labour_Action">
                      <div>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={() => hanldeEditLabourEntry(rowData)}
                        >
                          Edit
                        </Button>
                      </div>
                      <div>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          onClick={() => handleDeleteLabour(rowData._id)}
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
          open={openLabourModel}
          handleClose={handleClose}
          Data={labourData}
          setData={setLabourData}
        />
      </div>
    </>
  );
};

export default Labour;
