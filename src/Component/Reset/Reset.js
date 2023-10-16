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
              <input
                className="Reset_Input_Email"
                type="email"
                placeholder="admin@example.com"
              />
            </div>
            <br />
            <div>
              <button className="Reset_password">Reset Password</button>
            </div>
            <br />
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
