import React from "react";
import "./CarsSlider.css";
import Arrows from "../Photos/arrow.svg";
import Benz from "../Photos/xe.jpg";
const CarsSlider = () => {
  const a = [
    Benz,
    Benz,
    Benz,
    Benz,
    Benz,
    Benz,
    Benz,
    Benz,
    Benz,
    Benz,
    Benz,
    Benz,
    Benz,
    Benz,
    Benz,
    Benz,
    Benz,
  ];
  return (
    <div className="CarsSlider--Wrapper">
      <div className="CarsSlider--Left">
        <img src={Arrows}></img>
      </div>
      <div className="CarsSlider--Right">
        <img src={Arrows}></img>
      </div>
      <div className="CarsSlider--Main--Main">
        <div className="CarsSlider--Main">
          {a.map((e, i) => {
            return (
              <div className="CarsSlider--Main--Each">
                <img src={e}></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarsSlider;
