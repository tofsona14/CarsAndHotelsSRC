import React, { forwardRef } from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Home from "../Photos/home.svg";
import Car from "../Photos/car.svg";
import Hotel from "../Photos/hotel.svg";
import Contact from "../Photos/packets.svg";
import User from "../Photos/enter.svg";

const Navbar = forwardRef(
  ({ setLogin, setContacts, setScrollFreezed }, menu) => {
    return (
      <header className="header--Main">
        <nav className="ss" ref={menu}>
          <ul>
            <Link to="/">
              <div className="li-Icons--choosed">
                <img src={Home} className="Logos"></img>
                <li>მთავარი</li>
              </div>
            </Link>
            <Link to="/cars">
              <div className="li-Icons">
                <img src={Car} className="Logos"></img>
                <li className="choosed--Cars">მანქანები</li>
              </div>
            </Link>
            <Link to="/Hotels">
              <div className="li-Icons">
                <img src={Hotel} className="Logos"></img>
                <li>სასტუმროები</li>
              </div>
            </Link>
            <div
              className="li-Icons"
              onClick={() => {
                setContacts(true);
              }}
            >
              <img src={Contact} className="Logos"></img>
              <li>პაკეტები</li>
            </div>
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
const NavbarNd = forwardRef(
  ({ setLogin, setContacts, setScrollFreezed }, menu) => {
    return (
      <header className="header--Main">
        <nav className="ss" ref={menu}>
          <ul>
            <Link to="/">
              <div className="li-Icons">
                <img src={Home} className="Logos"></img>
                <li>მთავარი</li>
              </div>
            </Link>
            <div className="li-Icons--choosed">
              <img src={Car} className="Logos"></img>
              <li className="choosed--Cars">მანქანები</li>
            </div>
            <Link to="/Hotels">
              <div className="li-Icons">
                <img src={Hotel} className="Logos"></img>
                <li>სასტუმროები</li>
              </div>
            </Link>
            <div
              className="li-Icons"
              onClick={() => {
                setContacts(true);
              }}
            >
              <img src={Contact} className="Logos"></img>
              <li>პაკეტები</li>
            </div>
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
const NavbarTh = forwardRef(
  ({ setLogin, setContacts, setScrollFreezed }, menu) => {
    return (
      <header className="header--Main">
        <nav className="ss" ref={menu}>
          <ul>
            <Link to="/">
              <div className="li-Icons">
                <img src={Home} className="Logos"></img>
                <li>მთავარი</li>
              </div>
            </Link>
            <Link to="/Cars">
              <div className="li-Icons">
                <img src={Car} className="Logos"></img>
                <li className="choosed--Cars">მანქანები</li>
              </div>
            </Link>
            <Link to="/Hotels">
              <div className="li-Icons--choosed">
                <img src={Hotel} className="Logos"></img>
                <li>სასტუმროები</li>
              </div>
            </Link>
            <div
              className="li-Icons"
              onClick={() => {
                setContacts(true);
              }}
            >
              <img src={Contact} className="Logos"></img>
              <li>პაკეტები</li>
            </div>
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

export { Navbar, NavbarNd, NavbarTh };
