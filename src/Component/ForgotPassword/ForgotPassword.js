import React, { useState } from "react";
import "./ForgotPassword.css";
import { TextField } from "@mui/material";

const ForgotPassword = () => {
  const [adminForgotData, setAdminLoginData] = useState({
    email: "",
    oldPwd: "",
    newPwd: "",
    confirmPwd: "",
  });

  const handleForgotOnchange = (event) => {
    let name, value;
    name = event.target.name;
    value = event.target.value;
    setAdminLoginData({ ...adminForgotData, [name]: value });
  };

  const hanldeResetPassword = () => {};

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
                value={adminForgotData.email}
                onChange={handleForgotOnchange}
              />
              <br />
              <br />

              <TextField
                label="Old Password"
                size="small"
                fullWidth
                name="oldPwd"
                type="email"
                value={adminForgotData.oldPwd}
                onChange={handleForgotOnchange}
              />
              <br />
              <br />
              <TextField
                label="New Password"
                size="small"
                fullWidth
                name="newPwd"
                value={adminForgotData.newPwd}
                onChange={handleForgotOnchange}
              />
              <br />
              <br />
              <TextField
                label="Re-enter Password"
                size="small"
                fullWidth
                name="confirmPwd"
                value={adminForgotData.confirmPwd}
                onChange={handleForgotOnchange}
              />
              <br />
              <br />
            </div>
            <br />
            <div>
              <button className="Forgot_password" onClick={hanldeResetPassword}>
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

export default ForgotPassword;
