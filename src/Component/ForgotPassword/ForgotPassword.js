import React, { useState } from "react";
import "./ForgotPassword.css";
import { toast } from "react-toastify";
import { TextField } from "@mui/material";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [forgotAdminData, setFogotAdminData] = useState({
    email: "",
    message: "",
  });

  const handleForgotPasswordAdminData = (event) => {
    let name, value;
    name = event.target.name;
    value = event.target.value;
    setFogotAdminData({ ...forgotAdminData, [name]: value });
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, forgotAdminData.email)
      .then(() => {
        // Password reset email sent!
        toast.success("Password reset email sent successfully.");
      })
      .catch((error) => {
        toast.error(error.message);
        // ..
      });
  };
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="Reset_Layout_Background">
        <div className="Reset">
          <div>
            <img className="Reset_img" src="/images/Reset/SentMessageImg.svg" />
          </div>
          <br />
          <div>
            <div>
              {/* <input
                className="Reset_Input_Email"
                type="email"
                placeholder="admin@example.com"
                name="email"
                value={forgotAdminData.email}
                onChange={handleForgotPasswordAdminData}
              /> */}
              <TextField
                label="Email"
                size="small"
                fullWidth
                name="email"
                type="email"
                onChange={handleForgotPasswordAdminData}
                value={forgotAdminData.email}
              />
            </div>
            <br />
            <div>
              <button className="Reset_password" onClick={handleForgotPassword}>
                Send Email
              </button>
            </div>
            <br />
            <div>
              <button className="Go_back" onClick={handleGoBack}>
                Go back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
