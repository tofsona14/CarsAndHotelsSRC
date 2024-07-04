import React, { useState } from "react";
import "./Packets.css";

const EachPacket = ({ label }) => {
  const [each, setEach] = useState(false);
  return (
    <>
      <div
        className={
          !each ? "triangle-container" : "triangle-container-increased"
        }
        onMouseEnter={() => {
          setEach(true);
        }}
        onMouseLeave={() => {
          setEach(false);
        }}
      >
        <div className="p">
          <p>{label}</p>
        </div>
        <div className="innerDiv--Triangle-container">
          <div className="innerText--Triangle-container"></div>
        </div>
      </div>
    </>
  );
};

export default EachPacket;
