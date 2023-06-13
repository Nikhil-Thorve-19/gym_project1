import React from "react";
import "./Join.css";
const Join = () => {
  return (
    <div className="Join " id="Join-us">
      <div className="Left-j">
        <div>
          <span className="stoke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stoke-text"> WITH US?</span>
        </div>
      </div>
      <div className="Right-j">
        <form action="" className="email-container">
          <input
            type="email"
            name="user-email"
            placeholder="Enter Your Email Adress"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
