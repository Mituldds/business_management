import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="Layout_Background">
        <div>
          <div>
            <img />
          </div>
          <div className="Register_form">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
