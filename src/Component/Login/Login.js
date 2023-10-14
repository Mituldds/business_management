import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="Layout_Background">
        <div className="Login">
          <div className="Login_img_div">
            <img className="Login_img" src="/images/SentMessageImg.svg" />
          </div>
          <div className="Login_form">
            <div className="Login_input">
              <input type="email" placeholder="Email" /> <br />
              <br />
              <input type="password" placeholder="Password" /> <br />
            </div>
            <div className="Login_Remember">
              <div>
                <input type="checkbox" /> <span>Remember Me</span>
              </div>
              <div>
                <span className="Register_Forgot">Forgot password?</span>
              </div>
            </div>
            <button className="Login_btn">Login</button>
            <p>
              Don't have an Account?{" "}
              <span className="Register_Forgot">Register</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
