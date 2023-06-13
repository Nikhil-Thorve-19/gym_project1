import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
const Plans = () => {
  return (
    <div className="plans-c ">
      <div className="blur plans-blur1"></div>
      <div className="blur plans-blur2"></div>
      <div className="programs-header" style={{ gap: "16px" }}>
        <span className="stoke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stoke-text">NOW WITH US</span>
      </div>
      {/* plans cards */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan">
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src="whiteTick.png" alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span className="span">See more benefits -></span>
            </div>
            <button className="btn ">Join Us</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
