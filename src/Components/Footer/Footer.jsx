import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src="instagram.png" alt="" />
          <img src="facebook.png" alt="" />
        </div>
        <div className="logo-f">
          <img src="logo.png" alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
