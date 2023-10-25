import React, { useState, useEffect } from "react";
import { Paper, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import AddCustomer from "../Customer/AddCustomer/AddCustomer";
import "./Party.css";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { fireStore } from "../../firebaseConfig";

const Party = () => {
  const [openPartyModel, setOpenPartyModel] = useState(false);
  const [partyEntry, setPartyEntry] = useState();
  const [partyData, setPartyData] = useState({
    Role: "Party",
  });

  const handleOpen = () => setOpenPartyModel(true);

  const handleClose = () => {
    setOpenPartyModel(false);
    setPartyData({
      Role: "Party",
    });
  };

  const getPartyData = async () => {
    const PartyData = collection(fireStore, "Users");

    const q = query(
      PartyData,
      where("Role", "==", "Party")
      // orderBy("AccountCode", "desc")
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => {
      return {
        _id: doc.id,
        ...doc.data(),
      };
    });
    setPartyEntry(data);
  };

  const AddPartyData = () => {
    handleOpen(true);
  };

  const hanldeEditPartyEntry = (rowData) => {
    setPartyData(rowData);
    handleOpen();
  };
  const handleDeleteParty = async (id) => {
    try {
      await deleteDoc(doc(fireStore, "Users", id));
      getPartyData();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  useEffect(() => {
    getPartyData(openPartyModel);
  }, [openPartyModel]);
  return (
    <>
      <div className="Party">
        <div>Party</div>

        <div>
          <Button
            color="success"
            variant="contained"
            size="small"
            onClick={AddPartyData}
          >
            Add Party
          </Button>
        </div>
      </div>
      <br />

      <div className="Party_table">
        <TableContainer component={Paper} className="Party_table">
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
              {partyEntry?.map((rowData, index) => (
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
                    <div className="Party_Action">
                      <div>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={() => hanldeEditPartyEntry(rowData)}
                        >
                          Edit
                        </Button>
                      </div>
                      <div>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          onClick={() => handleDeleteParty(rowData._id)}
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
          open={openPartyModel}
          handleClose={handleClose}
          Data={partyData}
          setData={setPartyData}
        />
      </div>
    </>
  );
};

export default Party;
