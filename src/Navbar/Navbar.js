import React, { forwardRef } from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Home from "../Photos/home.svg";
import Car from "../Photos/car.svg";
import Hotel from "../Photos/hotel.svg";
import Contact from "../Photos/packets.svg";
import User from "../Photos/enter.svg";
// "li-Icons--choosed";
const Navbar = forwardRef(
  (
    {
      setLogin,
      setContacts,
      setScrollFreezed,
      setFirst,
      setSecond,
      setThird,
      setFourth,
    },
    menu
  ) => {
    return (
      <header className="header--Main">
        <nav className="ss" ref={menu}>
          <ul>
            <Link to="/">
              <div className={setFirst ? setFirst : "li-Icons"}>
                <img src={Home} className="Logos"></img>
                <li>მთავარი</li>
              </div>
            </Link>
            <Link to="/cars">
              <div className={setSecond ? setSecond : "li-Icons"}>
                <img src={Car} className="Logos"></img>
                <li className="choosed--Cars">მანქანები</li>
              </div>
            </Link>
            <Link to="/Hotels">
              <div className={setThird ? setThird : "li-Icons"}>
                <img src={Hotel} className="Logos"></img>
                <li>სასტუმროები</li>
              </div>
            </Link>
            <Link to="/Packets">
              <div className={setFourth ? setFourth : "li-Icons"}>
                <img src={Contact} className="Logos"></img>
                <li>პაკეტები</li>
              </div>
            </Link>
            <div
              className="li-Icons"
              onClick={() => {
                setLogin(true);
                setScrollFreezed(true);
              }}
            >
              <img src={User} className="Logos"></img>
              <li>ავტორიზაცია</li>
            </div>
          </ul>
        </nav>
      </header>
    );
  }
);

export { Navbar };
