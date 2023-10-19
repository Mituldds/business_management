import React, { useState } from "react";
import "./ResetPwd.css";
import { TextField } from "@mui/material";
import { auth } from "../../firebaseConfig";
import { getAuth, updatePassword } from "firebase/auth";
import { toast } from "react-toastify";

// After Login

const ResetPwd = () => {
  const [adminResetData, setAdminResetData] = useState({
    email: "",
    oldPwd: "",
    newPwd: "",
    confirmPwd: "",
  });

  const handleResetOnchange = (event) => {
    let name, value;
    name = event.target.name;
    value = event.target.value;
    setAdminResetData({ ...adminResetData, [name]: value });
  };

  const handleResetPassword = async () => {
    const auth = getAuth();

    const user = auth.currentUser;
    console.log(user);

    updatePassword(user, adminResetData.newPwd)
      .then(() => {
        toast.success("Password updated successfully");
      })
      .catch((error) => {
        toast.error("password update failed", error);
      });
  };

  return (
    <>
      <div className="Forgot_Layout_Background">
        <div className="Forgot">
          <div>
            <img
              className="Forgot_img"
              src="/images/Reset/SentMessageImg.svg"
            />
          </div>
          <br />
          <div>
            <div>
              <TextField
                label="Email"
                size="small"
                type="email"
                fullWidth
                name="email"
                value={adminResetData.email}
                onChange={handleResetOnchange}
              />
              <br />
              <br />

              <TextField
                label="Old Password"
                size="small"
                fullWidth
                name="oldPwd"
                type="email"
                value={adminResetData.oldPwd}
                onChange={handleResetOnchange}
              />
              <br />
              <br />
              <TextField
                label="New Password"
                size="small"
                fullWidth
                name="newPwd"
                value={adminResetData.newPwd}
                onChange={handleResetOnchange}
              />
              <br />
              <br />
              <TextField
                label="Re-enter Password"
                size="small"
                fullWidth
                name="confirmPwd"
                value={adminResetData.confirmPwd}
                onChange={handleResetOnchange}
              />
              <br />
              <br />
            </div>
            <br />
            <div>
              <button className="Forgot_password" onClick={handleResetPassword}>
                Reset Password
              </button>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPwd;
