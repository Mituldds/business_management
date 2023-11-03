import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Register.css";
import { auth, fireStore } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleOnchangeRegisterUser = async (event) => {
    event.preventDefault();
    let name, value;
    name = event.target.name;
    value = event.target.value;

    setAdminData({
      ...adminData,
      [name]: value,
    });
  };

  const validation = () => {
    let formIsValid = true;
    const newError = {
      username: "",
      email: "",
      password: "",
    };

    if (!adminData.username) {
      formIsValid = false;
      newError.username = "*Please enter your username.";
    } else if (!adminData.username.match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      newError.username = "*Please enter alphabet characters only.";
    }

    if (!adminData.email) {
      formIsValid = false;
      newError.email = "*Please enter your email-ID.";
    } else {
      const emailPattern =
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
      if (!emailPattern.test(adminData.email)) {
        formIsValid = false;
        newError.email = "*Please enter valid email-ID.";
      }
    }
    // if (!adminData.password) {
    //   newError.password = "*Please enter your password.";
    // } else {
    //   const passwordPattern =
    //     /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;

    //   if (!passwordPattern.test(adminData.password)) {
    //     newError.password = "*Please enter secure and strong password.";
    //   }
    // }

    setErrors(newError);
    return formIsValid;
  };

  const submitAdminData = async (e) => {
    e.preventDefault();
    if (validation()) {
      try {
        const auth = getAuth();
        createUserWithEmailAndPassword(
          auth,
          adminData.email,
          adminData.password
        )
          .then(async (userCredential) => {
            const user = userCredential.user;

            const dataWithTimestamps = {
              ...adminData,
              username: adminData.username,
              email: adminData.email,
              created_at: serverTimestamp(),
              updated_at: serverTimestamp(),
            };
            const addAdminData = await addDoc(
              collection(fireStore, "AdminData"),
              dataWithTimestamps
            );
            toast.success(`${adminData.username} Registration successfully`);
            navigate("/");
          })
          .catch((error) => {
            console.log(error.message);
            toast.error(error.message);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Please Fullfill all fields");
    }
  };

  const handleRegisterPageLogin = () => {
    navigate("/");
  };

  return (
    <>
      <form onSubmit={submitAdminData}>
        <div className="Register_Layout_Background">
          <div className="Register">
            <div className="Register_img_div">
              <img
                className="Register_img"
                src="/images/Register/SentMessageImg.svg"
              />
            </div>

            <div className="Register_form">
              <div>
                <div className="Register_input">
                  <TextField
                    sx={{ marginBottom: 2 }}
                    label="Username"
                    variant="filled"
                    size="small"
                    fullWidth
                    value={adminData.username}
                    name="username"
                    onChange={handleOnchangeRegisterUser}
                    type="text"
                    error={Boolean(errors?.username)}
                    helperText={errors?.username}
                  />
                  <TextField
                    sx={{ marginBottom: 2 }}
                    label="Email"
                    variant="filled"
                    size="small"
                    fullWidth
                    value={adminData.email}
                    name="email"
                    onChange={handleOnchangeRegisterUser}
                    type="email"
                    error={Boolean(errors?.email)}
                    helperText={errors?.email}
                  />

                  <TextField
                    name="password"
                    label="Password"
                    type="password"
                    variant="filled"
                    size="small"
                    fullWidth
                    value={adminData.password}
                    onChange={handleOnchangeRegisterUser}
                    error={Boolean(errors?.password)}
                    helperText={errors?.password}
                  />
                </div>
                <div className="Register_Remember">
                  <input type="checkbox" />{" "}
                  <span>I have raed and agree to the terms of service</span>
                </div>
                <Button
                  sx={{ marginTop: "10px" }}
                  variant="contained"
                  onClick={submitAdminData}
                >
                  Register{" "}
                </Button>
                <p>
                  Don't have an Account?{" "}
                  <span
                    className="Register_Register_Forgot"
                    onClick={handleRegisterPageLogin}
                  >
                    Login
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
