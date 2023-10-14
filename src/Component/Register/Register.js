import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="Layout_Background">
        <div className="Register">
          <div className="Register_img_div">
            <img className="Register_img" src="/images/SentMessageImg.svg" />
          </div>
          <div className="Register_form">
            <div className="Register_input">
              <input type="text" placeholder="Username" /> <br />
              <br />
              <input type="email" placeholder="Email" /> <br />
              <br />
              <input type="password" placeholder="Password" /> <br />
              <br />
            </div>
            <input type="checkbox" />{" "}
            <span>I have read and agree to the trms and service.</span>
            <br />
            <br />
            <button className="Register_btn">Register</button>
            <p>
              Already have an Account? <span className="Login_text">Login</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
