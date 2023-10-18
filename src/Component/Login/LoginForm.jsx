import React, { useState } from "react";
import "./Login.css";
import { TextField } from "@mui/material";
import { auth, fireStore } from "../../firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const navigate = useNavigate();
  const [adminLoginData, setAdminLoginData] = useState({
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

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(
      auth,
      adminLoginData.email,
      adminLoginData.password
    )
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        console.log("====================================");
        console.log(user);
        console.log("====================================");
        toast.success("User signed in successfully");
        navigate("/home");
        // ...
      })
      .catch((error) => {
        toast.error("signin failed", error);
      });
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
                  label="Email"
                  size="small"
                  fullWidth
                  name="email"
                  onChange={handleOnchangeLogin}
                  value={adminLoginData.email}
                  // id="outlined-basic"
                  // variant="outlined"
                />
                {/* <input type="email" placeholder="Email" /> <br /> */}
                {/* <br /> */}
                {/* <input type="password" placeholder="Password" /> <br /> */}
                <br />
                <br />
                <TextField
                  // id="outlined-basic"
                  label="Password"
                  // variant="outlined"
                  size="small"
                  fullWidth
                  name="password"
                  value={adminLoginData.password}
                  onChange={handleOnchangeLogin}
                />
              </div>

              <div className="Login_Remember">
                <div>
                  <input type="checkbox" /> <span>Remember Me</span>
                </div>
                <div>
                  <span
                    className="Register_Forgot"
                    onClick={handleForgotPassword}
                  >
                    Forgot password?
                  </span>
                </div>
              </div>
              <button type="submit" className="Login_btn" onClick={handleLogin}>
                Login
              </button>
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
