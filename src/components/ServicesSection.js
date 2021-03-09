import React from "react";
// import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <h2>
        High <span>quality</span> services
      </h2>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <img src={clock} alt="clock icon" />
            <h3>EFFICIENT</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={teamwork} alt="clock icon" />
            <h3>TEAMWORK</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={diaphragm} alt="clock icon" />
            <h3>DIAPHRAGM</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={money} alt="clock icon" />
            <h3>AFFORDABLE</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="" />
      </div>
    </div>
  );
};

export default ServicesSection;
