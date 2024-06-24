import React from "react";
import "./Packets.css";
import Tbilisi from "../Photos/Tbilisi.jpg";
const PacketsSlider = () => {
  return (
    <>
      <div className="packets--blur"></div>
      <div className="Packets--Slider">
        <div className="Packets--Slider--Child">
          <div>სტანდარტი</div>
          <div>პრემიუმი</div>
          <div className="Packets--Div--Row">
            <p>მორგებული</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PacketsSlider;
