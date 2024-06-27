import React from "react";
import "./Packets.css";
const PacketsSlider = () => {
  return (
    <>
      <div className="packets--blur"></div>
      <div className="Packets--Slider">
        <div className="Packets--Slider--Child">
          <div className="triangle-container">
            <div className="p">
              <p>სტანდარტული პაკეტი</p>
            </div>
            <div className="triangle-up"></div>
            <div className="triangle-down"></div>
          </div>
          <div className="Packets--Div--Row"></div>
        </div>
      </div>
    </>
  );
};

export default PacketsSlider;
