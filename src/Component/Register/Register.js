import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./Register.css";
import { fireStore } from "../../firebaseConfig";
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
  const [errors, setErrors] = useState({});

  const handleOnchangeRegisterUser = async (event) => {
    event.preventDefault();
    let name, value;
    name = event.target.name;
    value = event.target.value;
    setAdminData({
      ...adminData,
      [name]: value,
    });
    // console.log(adminData);
  };

  const submitAdminData = async (e) => {
    e.preventDefault();
    const newError = {};
    let formIsValid = true;

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
    // toast.success(`${adminData.username} your registration successful`);

    // if (!adminData.password) {
    //   formIsValid = false;
    //   newError.password = "*Please enter your password.";
    // } else {
    //   const passwordPattern =
    //     /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;

    //   if (!passwordPattern.test(adminData.password)) {
    //     formIsValid = false;
    //     newError.password = "*Please enter secure and strong password.";
    //   }
    // }

    setErrors(newError);
    navigate("/");
    if (formIsValid) {
      try {
        const dataWithTimestamps = {
          ...adminData,
          created_at: serverTimestamp(),
          updated_at: serverTimestamp(),
        };
        const addAdminData = await addDoc(
          collection(fireStore, "AdminData"),
          dataWithTimestamps
        );
        toast.success(`${adminData.username} Registration successfully`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={submitAdminData}>
        <div className="Register_Layout_Background">
          <div className="Register">
            <div className="Register_img_div">
              <img className="Register_img" src="/images/SentMessageImg.svg" />
            </div>

            <div className="Register_form">
              <div>
                <div className="Register_input">
                  <p>{errors?.username}</p>
                  <TextField
                    // id="outlined-basic"
                    label="Username"
                    // variant="outlined"
                    size="small"
                    fullWidth
                    value={adminData.username}
                    name="username"
                    onChange={handleOnchangeRegisterUser}
                    type="text"
                  />
                  <br />
                  <br />
                  <p>{errors?.email}</p>
                  <TextField
                    // id="outlined-basic"
                    label="Email"
                    // variant="outlined"
                    size="small"
                    fullWidth
                    value={adminData.email}
                    name="email"
                    onChange={handleOnchangeRegisterUser}
                    type="email"
                  />
                  {/* <input type="email" placeholder="Email" /> <br /> */}
                  {/* <br /> */}
                  {/* <input type="password" placeholder="Password" /> <br /> */}
                  <br />
                  <br />
                  <p>{errors?.password}</p>
                  <TextField
                    // id="outlined-basic"
                    label="Password"
                    // variant="outlined"
                    size="small"
                    fullWidth
                    value={adminData.password}
                    name="password"
                    onChange={handleOnchangeRegisterUser}
                    type="text"
                  />
                </div>
                <div className="Register_Remember">
                  <div>
                    <input type="checkbox" /> <span>Remember Me</span>
                  </div>
                  <div>
                    <span className="Register_Register_Forgot">
                      Forgot password?
                    </span>
                  </div>
                </div>
                <button type="submit" value="Register" className="Register_btn">
                  Register
                </button>
                <p>
                  Don't have an Account?{" "}
                  <span className="Register_Register_Forgot">Login</span>{" "}
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
