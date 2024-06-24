import React, { useRef, useEffect, useState } from "react";
import "./Main.css";
import Car from "../Photos/gelik.webp";
import Hotel from "../Photos/hotel.webp";
import { Link } from "react-router-dom";
import { gsap, Power3 } from "gsap";
import Contacts from "../Components/Contact";
import Login from "../Components/Login";
import { Navbar } from "../Navbar/Navbar";

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
    if (login === true) {
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
    if (scrollFreezed === true) {
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
          x: 0,
          repeat: 1, // Infinite repeat
          duration: 0.5,
        },
        { y: 0, x: 0 }
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
  const LoginExit = (prev) => {
    setLogin(prev);
  };
  const LoginShow = (prev) => {
    setLoginUp(prev);
  };
  const setLoginHandler = (prev) => {
    setLogin(prev);
  };
  const setScrollFreezeHandler = (prev) => {
    setScrollFreezed(prev);
  };
  const setContactsHandler = (prev) => {
    setContacts(prev);
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
        <Login loginsSecond={LoginExit} loginsUp={LoginShow} ref={logins} />
      ) : null}
      <Navbar
        setFirst="li-Icons--choosed"
        ref={menu}
        setLogin={setLoginHandler}
        setScrollFreezed={setScrollFreezeHandler}
        setContacts={setContactsHandler}
      />
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
