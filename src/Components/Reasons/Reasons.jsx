import React from "react";
import "./Reasons.css";
const Reasons = () => {
  return (
    <div className="Reasons Why-us" id="Reasons">
      <div className="left-r">
        <img src="image1.png" alt="" />
        <img src="image2.png" alt="" />
        <img src="image3.png" alt="" />
        <img src="image4.png" alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stoke-text">Why</span>
          <span> Choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src="tick.png" alt=""></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src="tick.png" alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src="tick.png" alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src="tick.png" alt="" />
            <span>RELIABEL PARTNERS</span>
          </div>
        </div>
        <span style={{ color: "gainsboro", fontWeight: "normal" }}>
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src="nb.png" alt="" />
          <img src="adidas.png" alt="" />
          <img src="nike.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
