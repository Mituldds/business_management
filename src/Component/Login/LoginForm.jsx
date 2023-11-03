import React, { useState } from "react";
import "./Login.css";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { auth, fireStore } from "../../firebaseConfig";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const navigate = useNavigate();
  const [adminLoginData, setAdminLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleOnchangeLogin = (event) => {
    let name, value;
    name = event.target.name;
    value = event.target.value;
    setAdminLoginData({ ...adminLoginData, [name]: value });
  };

  // const handleLogin = async (event) => {
  //   event.preventDefault();
  //   const { email, password } = adminLoginData;

  //   const usersRef = collection(fireStore, "AdminData");
  //   const q = query(usersRef, where("email", "==", email));
  //   const querySnapshot = await getDocs(q);

  //   let foundUsers = [];
  //   querySnapshot.forEach((doc) => {
  //     const userData = doc.data();
  //     foundUsers.push({ ...doc.data(), id: doc.id });
  //   });

  //   if (foundUsers?.length) {
  //     if (foundUsers[0].password == password) {
  //       toast.success("login successful");

  //       navigate("/home");
  //     } else {
  //       toast.error("password not matched");
  //     }
  //   } else {
  //     toast.error("User not found & please enter your valid email ");
  //   }
  // };

  const validate = () => {
    let formIsValid = true;
    const newError = {
      email: "",
      password: "",
    };

    if (!adminLoginData.email) {
      formIsValid = false;
      newError.email = "*Please enter your Email.";
    }

    if (!adminLoginData.password) {
      formIsValid = false;
      newError.password = "*Please enter your Password.";
    }
    setErrors(newError);
    return formIsValid;
  };

  const handleLogin = () => {
    if (validate()) {
      try {
        const auth = getAuth();
        signInWithEmailAndPassword(
          auth,
          adminLoginData.email,
          adminLoginData.password
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            toast.success("User signed in successfully");
            navigate("/admin/customer");
          })
          .catch((error) => {
            toast.error("signin failed", error);
          });
      } catch (error) {
        toast.success("User signed in successfully");
      }
    } else {
      console.log(errors, "=================");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleForgotPassword = () => {
    navigate("/forgotpassword");
  };

  return (
    <>
      <div className="Login_Layout_Background">
        <div className="Login">
          <div className="Login_img_div">
            <img className="Login_img" src="/images/Login/SentMessageImg.svg" />
          </div>
          <div className="Login_form">
            <div>
              <div className="Login_input">
                <TextField
                  sx={{ my: 3 }}
                  variant="filled"
                  label="Email"
                  size="small"
                  fullWidth
                  name="email"
                  onChange={handleOnchangeLogin}
                  value={adminLoginData.email}
                  error={Boolean(errors?.email)}
                  helperText={errors?.email}
                />
                <TextField
                  label="Password"
                  size="small"
                  variant="filled"
                  fullWidth
                  name="password"
                  value={adminLoginData.password}
                  onChange={handleOnchangeLogin}
                  type="password"
                  error={Boolean(errors?.password)}
                  helperText={errors?.password}
                />
              </div>

              <div className="Login_Remember">
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Typography
                  onClick={handleForgotPassword}
                  variant="text"
                  sx={{ "&:hover": { cursor: "pointer", color: "#1769aa" } }}
                >
                  Forgot password ?
                </Typography>
              </div>
              <Button
                sx={{ marginTop: "10px" }}
                variant="contained"
                type="submit"
                onClick={handleLogin}
              >
                Login{" "}
              </Button>
              <p>
                Don't have an Account?{" "}
                <span className="Register_Forgot" onClick={handleRegister}>
                  Register
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
