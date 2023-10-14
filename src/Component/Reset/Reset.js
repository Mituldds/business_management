import React from "react";
import "./Reset.css";

const Reset = () => {
  return (
    <>
      <div className="Reset_Layout_Background">
        <div className="Reset">
          <div>
            <img className="Reset_img" src="/images/SentMessageImg.svg" />
          </div>
          <br />
          <div>
            <div>
              <input type="email" />
            </div>
            <div>
              <button className="Reset_password">Reset Password</button>
            </div>
            <div>
              <button className="Go_back">Go back</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
