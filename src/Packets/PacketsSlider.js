import React from "react";
import "./Packets.css";
import EachPacket from "./PacketsEach";
const PacketsSlider = () => {
  return (
    <>
      <div className="packets--blur"></div>
      <div className="Packets--Slider">
        <div className="Packets--Slider--Child">
          <EachPacket label={"სტანდარტული პაკეტი"} />
          <EachPacket label={"პრემიუმ პაკეტი"} />
          <EachPacket label={"თქვენზე მორგებული პაკეტი"} />
        </div>
      </div>
    </>
  );
};

export default PacketsSlider;
