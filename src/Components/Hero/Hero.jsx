import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="Left-h">
        <Header />
        {/* the best ads  */}
        <div className=" the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the malad</span>
        </div>
        {/* the best ads  */}

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stoke-text">Shape </span>
            <span> Your</span>
          </div>
          <div>
            <span> Ideal body </span>
          </div>
          <div>
            <span className="nth-of-type">
              In here we will help you to shape and build your idel body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learns More</button>
        </div>

        {/* buttons */}
      </div>
      <div className="Right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src="heart.png" alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src="hero_image.png" alt="" className="hero-img" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src="hero_image_back.png"
          alt=""
          className="hero-img-back"
        />
        {/* calories */}

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src="calories.png" alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
