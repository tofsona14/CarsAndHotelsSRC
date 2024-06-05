import React, { useRef, useEffect, useState } from "react";
import "./Cars.css";
import { Link } from "react-router-dom";
import { gsap, Power3 } from "gsap";
import Right from "../Photos/right.svg";
import Range from "../Photos/x.jpg";
import Home from "../Photos/home.svg";
import Car from "../Photos/car.svg";
import Hotel from "../Photos/hotel.svg";
import Contact from "../Photos/contact.svg";
import User from "../Photos/enter.svg";
import Exit from "../Photos/exit.svg";
import Profile from "../Photos/profile.svg";
import Password from "../Photos/password.svg";
import Enter from "../Photos/enters.svg";
import Contacts from "../Components/Contact";
import Filters from "../Components/filter";

const Cars = () => {
  /* Login Show/Hide */
  const [loginUp, setLoginUp] = useState(false);
  const [login, setLogin] = useState(false);
  const [scrollFreezed, setScrollFreezed] = useState(false);
  /* Login Show/Hide end */
  /* Contact Show/ Hide*/
  const [contacts, setContacts] = useState(false);
  const [contactUp, setContactUp] = useState(false);
  /* Contact Show/Hide */
  /*Gsap animation Start*/
  let menu = useRef(null);
  let Filter = useRef(null);
  let Product = useRef(null);
  let right = useRef(null);
  let left = useRef(null);
  let logins = useRef(null);
  let contact = useRef(null);

  const [allInput, setAllInput] = useState({
    Cars: [
      Range,
      Range,
      Range,
      Range,
      Range,
      Range,
      Range,
      Range,
      Range,
      Range,
      Range,
      Range,
      Range,
    ],
  });
  useEffect(() => {
    if (contacts === true) {
      setScrollFreezed(true);
      gsap.fromTo(
        contact.current,
        {
          opacity: 0,
          x: 1000,
          y: -1000,
          rotate: 120,
        },
        { opacity: 1, x: 0, y: 0, rotate: 0, duration: 0.5 }
      );
      console.log(contacts);
      console.log(contacts);
      console.log(contact.current);
    } else {
      setScrollFreezed(false);
    }
  }, [contacts]);
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
    if (scrollFreezed === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [scrollFreezed]);
  useEffect(() => {
    if (contactUp === true) {
      gsap.fromTo(
        contact.current,
        {
          x: 0,
          y: 0,
          rotate: 0,
        },
        { opacity: 1, x: 1000, y: -1000, rotate: 120, duration: 0.3 }
      );
      setContactUp(false);
    }
    console.log(contactUp);
  }, [contactUp]);
  useEffect(() => {
    if (loginUp === true) {
      gsap.fromTo(
        logins.current,
        { opacity: 1, x: 0, y: 0, rotate: 0 },
        { opacity: 0, x: 1000, y: -1000, rotate: 120, duration: 0.5 }
      );
      setLoginUp(false);
    }
  }, [loginUp]);
  const [mouseHov, setMouseHov] = useState(null);
  useEffect(() => {
    var animation = gsap.timeline();
    animation
      .fromTo(
        "ul",
        {
          y: -150,
        },
        {
          y: 0,
          duration: 0.5,
        }
      )
      .fromTo(
        Filter.current,
        { opacity: 0, x: -500 },
        { opacity: 1, duration: 0.5, x: 0 }
      )
      .fromTo(
        Product.current,
        { opacity: 0, rotate: 90, x: 500, y: 500 },
        {
          opacity: 1,
          rotate: 0,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-0.5>"
      )
      .fromTo(left.current, { opacity: 0 }, { opacity: 1, duration: 0.2 })
      .fromTo(right.current, { opacity: 0 }, { opacity: 1, duration: 0.2 });
  }, []);
  const gridRight = () => {
    Product.current.scrollLeft += 400;
  };
  const gridleft = () => {
    Product.current.scrollLeft -= 400;
  };
  /* functions for child to parent to change parent state from child */
  const Contactss = (newContact) => {
    setContacts(newContact);
  };
  const ContactssUp = (newContactUp) => {
    setContactUp(newContactUp);
  };
  return (
    <div className="Main--Cars">
      {contacts === true ? (
        <div>
          <Contacts
            setParentState={Contactss}
            setParentSecondState={ContactssUp}
            ref={contact}
          />
        </div>
      ) : null}
      {login === true ? (
        <div className="Login">
          <div className="login" ref={logins}>
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
                <img src={Profile} className="iconUser"></img>
                <input type="text" placeholder="Username"></input>
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
        <nav className="ss" ref={menu}>
          <ul>
            <Link to="/">
              <div className="li-Icons">
                <div className="icon--ul"></div>
                <img src={Home} className="Logos"></img>
                <li>მთავარი</li>
              </div>
            </Link>
            <div className="li-Icons--choosed">
              <div className="icon--ul"></div>

              <img src={Car} className="Logos"></img>
              <li className="choosed--Cars">მანქანები</li>
            </div>
            <div className="li-Icons">
              <div className="icon--ul"></div>
              <img src={Hotel} className="Logos"></img>
              <li>სასტუმროები</li>
            </div>
            <div
              className="li-Icons"
              onClick={() => {
                setContacts(true);
              }}
            >
              <img src={Contact} className="Logos"></img>
              <li>კონტაქტი</li>
            </div>
            <div
              className="li-Icons"
              onClick={() => {
                setLogin(true);
                setScrollFreezed(true);
              }}
            >
              <img src={User} className="Logos--user"></img>
              <li>ავტორიზაცია</li>
            </div>
          </ul>
        </nav>
      </header>
      <body>
        <div className="body--Cars">
          <div className="body--Cars--First">
            <Filters ref={Filter} />
          </div>

          <div className="body--Cars--Second">
            <div
              className="left"
              ref={left}
              onClick={() => {
                gridleft();
              }}
            >
              <img src={Right}></img>
            </div>
            <div
              className="right"
              ref={right}
              onClick={() => {
                gridRight();
              }}
            >
              <img src={Right}></img>
            </div>
            <div className="cars--Container" ref={Product}>
              {allInput.Cars.map((e, i) => (
                <div className={`cars--Each`}>
                  <div
                    className={`cars--Each--Img${
                      mouseHov == i || mouseHov == null ? "" : "blur"
                    }`}
                    onMouseEnter={() => {
                      console.log(i);
                      setMouseHov(i);
                    }}
                    onMouseLeave={() => {
                      setMouseHov(null);
                    }}
                  >
                    <img src={e}></img>
                  </div>
                  <div className="cars-image-name">
                    <h2>Mercedes Benz G-Class</h2>
                    <div className="price--fullView">
                      <p>ფასი:300ლარი</p>
                    </div>
                  </div>
                  <div className=""></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Cars;
