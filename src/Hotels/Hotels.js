import React, { useRef, useEffect, useState } from "react";
import "./Hotels.css";
import { Navbar } from "../Navbar/Navbar";
import { gsap, Power3 } from "gsap";
import Right from "../Photos/right.svg";
import Contact2 from "../Photos/ContactOut.svg";
import Contacts from "../Components/Contact";
import Filters from "../Components/filter";
import Hot1 from "../Photos/Hot1.jpg";
import Hot2 from "../Photos/Hot2.jpg";
import Filtersa from "../Photos/filter.svg";
import HidedComp from "../Components/HidedComp";
import Login from "../Components/Login";
import Search from "../Photos/search.svg";
import { SliderHotel } from "../Components/Slider";

const Cars = () => {
  const [rightt, setRightt] = useState(false);
  const [lefts, setLefts] = useState(false);
  /* Login Show/Hide */

  const [loginUp, setLoginUp] = useState(false);
  const [login, setLogin] = useState(false);
  const [scrollFreezed, setScrollFreezed] = useState(false);
  /* Login Show/Hide end */
  /* Contact Show/ Hide*/
  const [contacts, setContacts] = useState(false);
  const [contactUp, setContactUp] = useState(false);
  /* Contact Show/Hide */
  const [filterBoolUp, setFilterBoolUp] = useState(false);
  /* carsOpen */
  const [openProduct, setOpenProduct] = useState(false);
  /*Gsap animation Start*/
  let menu = useRef(null);
  let Filter = useRef(null);
  let Product = useRef(null);
  let right = useRef(null);
  let left = useRef(null);
  let logins = useRef(null);
  let contact = useRef(null);
  /* Product Blur */
  const [prodBlur, setProdBlur] = useState(false);
  const [mouseHov, setMouseHov] = useState(null);
  useEffect(() => {
    if (rightt === true) {
      Product.current.scrollLeft += 600;
      setRightt(false);
    }
  }, [rightt]);
  useEffect(() => {
    if (lefts === true) {
      Product.current.scrollLeft -= 600;
      setLefts(false);
    }
  }, [lefts]);
  useEffect(() => {
    if (mouseHov === null) {
      setProdBlur(false);
    } else {
      setProdBlur(true);
    }
  }, [mouseHov]);
  useEffect(() => {
    if (filterBoolUp === true) {
      gsap.fromTo(
        Filter.current,
        {
          duration: 0.5,
          x: 0,
          y: 0,
          ease: "power1.inOut",
        },
        { x: 1000, y: 0 }
      );
    }
    if (filterBoolUp === false) {
      gsap.fromTo(
        Filter.current,
        {
          duration: 0.5,
          x: 1000,
          y: 0,
          ease: "power1.inOut",
        },
        { x: 0, y: 0 }
      );
    }
  }, [filterBoolUp]);
  useEffect(() => {
    if (contacts === true) {
      setScrollFreezed(true);
      gsap.fromTo(
        contact.current,
        {
          opacity: 0,
          x: -1000,
          y: -1000,
          rotate: 120,
        },
        { opacity: 1, x: 0, y: 0, rotate: 0, duration: 0.5 }
      );
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
        { opacity: 1, x: -1000, y: -1000, rotate: 120, duration: 0.3 }
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
        { opacity: 0, x: 500 },
        { opacity: 1, duration: 0.5, x: 0 }
      )
      .fromTo(
        Product.current,
        { x: "150vw" },
        {
          x: 0,
          duration: 1,
          ease: "power3.out",
        }
      )
      .fromTo(left.current, { opacity: 0 }, { opacity: 1, duration: 0.2 })
      .fromTo(right.current, { opacity: 0 }, { opacity: 1, duration: 0.2 });
  }, []);

  /* functions for child to parent to change parent state from child */
  const Contactss = (newContact) => {
    setContacts(newContact);
  };
  const ContactssUp = (newContactUp) => {
    setContactUp(newContactUp);
  };
  const CarsExit = (prev) => {
    setOpenProduct(prev);
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
  const setOpenProdHandler = (prev) => {
    setOpenProduct(prev);
  };
  const goRight = (prev) => {
    setRightt(prev);
  };
  const goLeft = (prev) => {
    setLefts(prev);
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
      {openProduct === true ? (
        <div className="hideComponents">
          <HidedComp firstState={CarsExit} />{" "}
        </div>
      ) : null}
      {login === true ? (
        <Login loginsSecond={LoginExit} loginsUp={LoginShow} ref={logins} />
      ) : null}
      <Navbar
        setThird="li-Icons--choosed"
        ref={menu}
        setLogin={setLoginHandler}
        setScrollFreezed={setScrollFreezeHandler}
        setContacts={setContactsHandler}
      />
      <SliderHotel
        gridRights={goRight}
        gridlefts={goLeft}
        setContacts={setContactsHandler}
        setScrollFreezed={setScrollFreezeHandler}
        setOpenProduct={setOpenProdHandler}
        ref={Product}
      />
    </div>
  );
};

export default Cars;
