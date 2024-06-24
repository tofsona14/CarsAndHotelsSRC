import React, { useState, useRef } from "react";
import "./Packets.css";
import { Navbar } from "../Navbar/Navbar";
import PacketsSlider from "./PacketsSlider";
const Packets = () => {
  return (
    <>
      <Navbar setFourth="li-Icons--choosed" />
      <PacketsSlider />
    </>
  );
};

export default Packets;
