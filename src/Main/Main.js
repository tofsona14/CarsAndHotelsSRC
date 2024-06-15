import React, { useRef, useEffect, useState } from "react";
import "./Main.css";
import Car from "../Photos/gelik.webp";
import Hotel from "../Photos/hotel.webp";
import { Link } from "react-router-dom";
import { gsap, Power3 } from "gsap";
import Home from "../Photos/home.svg";
import Cars from "../Photos/car.svg";
import Hotels from "../Photos/hotel.svg";
import Contact from "../Photos/contact.svg";
import User from "../Photos/enter.svg";
import Exit from "../Photos/exit.svg";
import Profile from "../Photos/profile.svg";
import Password from "../Photos/password.svg";
import Enter from "../Photos/enters.svg";
import Contacts from "../Components/Contact";

const Main = () => {
  /* Login States */
  const [login, setLogin] = useState(false);
  const [loginUp, setLoginUp] = useState(false);
  /*freeze scrolling state */
  const [scrollFreezed, setScrollFreezed] = useState(false);
  /* contact Component State */
  const [contacts, setContacts] = useState(false);
  const [contactsUp, setContactsUp] = useState(false);
  let menu = useRef(null);
  let Slogan = useRef(null);
  let imgSt = useRef(null);
  let imgNd = useRef(null);
  let logins = useRef(null);
  let contact = useRef(null);
  useEffect(() => {
    if (login == true) {
      gsap.fromTo(
        logins.current,
        { opacity: 0, x: 1000, y: -1000, rotate: 120 },
        { opacity: 1, x: 0, y: 0, rotate: 0, duration: 0.5 }
      );
    }
  }, [login]);
  useEffect(() => {
    if (contactsUp === true) {
      gsap.fromTo(
        contact.current,
        { x: 0, y: 0, rotate: 0 },
        { x: 1000, y: -1000, rotate: 120, duration: 0.3 }
      );
      setContactsUp(false);
    }
  }, [contactsUp]);
  useEffect(() => {
    if (contacts === true) {
      gsap.fromTo(
        contact.current,
        { x: 1000, y: -1000, rotate: 120 },
        { x: 0, y: 0, rotate: 0, duration: 0.5 }
      );
    }
  }, [contacts]);
  useEffect(() => {
    if (loginUp == true) {
      gsap.fromTo(
        logins.current,
        { opacity: 1, x: 0, y: 0, rotate: 0 },
        { opacity: 0, x: 1000, y: -1000, rotate: 120, duration: 0.5 }
      );
      setLoginUp(false);
    }
  }, [loginUp]);
  useEffect(() => {
    if (scrollFreezed == true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [scrollFreezed]);
  useEffect(() => {
    var animation = gsap.timeline();
    animation
      .fromTo(
        "ul",
        {
          y: -150,
          repeat: 1, // Infinite repeat
          yoyo: true,
          duration: 0.5,
        },
        { y: 3 }
      )
      .fromTo(
        Slogan.current,
        {
          x: -500,
        },
        {
          ease: "bounce",
          x: 0,
          duration: 1,
        },
        "<"
      )
      .fromTo(imgSt.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
      .fromTo(imgNd.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<");
  }, []);
  const contactHandler = (arg) => {
    setContacts(arg);
  };
  const contactUpHandler = (arg) => {
    setContactsUp(arg);
    setScrollFreezed(false);
  };
  return (
    <div className="Main--Main">
      {contacts === true ? (
        <Contacts
          setParentState={contactHandler}
          setParentSecondState={contactUpHandler}
          ref={contact}
        />
      ) : null}
      {login === true ? (
        <div className="Login">
          <div ref={logins} className="login">
            <div
              className="closeIcon"
              onClick={() => {
                setTimeout(() => {
                  setLogin(false);
                }, 200);
                setLoginUp(true);
                setScrollFreezed(false);
              }}
            >
              <img src={Exit} className="close"></img>
            </div>
            <div className="login--Inputs">
              <div className="sss">
                <input type="text" placeholder="Username"></input>
                <img src={Profile} className="iconUser"></img>
              </div>
              <div className="sss">
                <input type="text" placeholder="Password"></input>
                <img src={Password} className="iconUser"></img>
              </div>
            </div>
            <div className="afterLogin">
              <div className="resetAndBut">
                <p>პაროლის აღდგენა</p>
                <div className="logInButAndIcon">
                  <button>შესვლა</button>
                  <img src={Enter} className="iconUser"></img>
                </div>
              </div>
            </div>
            <div className="register">
              <p>რეგისტრაცია</p>
            </div>
          </div>
        </div>
      ) : null}
      <header className="header--Main">
        <nav ref={menu}>
          <ul>
            <ul>
              <Link to="/">
                <div className="li-Icons--choosed--main">
                  <img src={Home}></img>
                  <li className="choosed--Cars">მთავარი</li>
                </div>
              </Link>
              <Link to="/cars">
                <div className="li-Icons">
                  <img src={Cars}></img>
                  <li className="">მანქანები</li>
                </div>
              </Link>
              <div className="li-Icons">
                <div className="icon--ul"></div>
                <img src={Hotels}></img>
                <li>სასტუმროები</li>
              </div>
              <div
                className="li-Icons"
                onClick={() => {
                  setContacts(true);
                  setScrollFreezed(true);
                }}
              >
                <img src={Contact}></img>
                <li>კონტაქტი</li>
              </div>
              <div
                className="li-Icons"
                onClick={() => {
                  setLogin(true);
                  setScrollFreezed(true);
                }}
              >
                <div className="icon--ul"></div>
                <img src={User}></img>
                <li>ავტორიზაცია</li>
              </div>
            </ul>
          </ul>
        </nav>
      </header>
      <main className="main--Main">
        <Link to="/Cars" ref={imgSt}>
          <img src={Car}></img>
        </Link>
        {/* <div ref={Slogan} className="ellipse-shape-divider">
          <div className="cars--Hotels">
            <div className="line"></div>
            <h1>Reserve Your Dream Day</h1>
            <div className="line1"></div>
          </div>
        </div> */}
        <div ref={Slogan} className="ellipse-shape-divider">
          <div className="cars--Hotels2">
            <div className="line"></div>
            <h1>Reserve Your Dream Day</h1>
            <div className="line1"></div>
          </div>
        </div>
        <Link to="/hotels">
          <img className="hotel" ref={imgNd} src={Hotel}></img>
        </Link>
      </main>
    </div>
  );
};

export default Main;
