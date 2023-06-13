import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
export default function Programs() {
  return (
    <div className="programs" id=" Programs">
      {/* Headers */}
      <div className="programs-header p">
        <span className="stoke-text">Explor our</span>
        <span>Programs</span>
        <span className="stoke-text">To shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src="rightArrow.png" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
