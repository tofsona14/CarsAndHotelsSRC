import React, { useRef, useEffect, useState } from "react";
import "./Cars.css";
import { gsap, Power3 } from "gsap";
import Right from "../Photos/right.svg";
import Contact2 from "../Photos/ContactOut.svg";
import { NavbarNd } from "../Navbar/Navbar";
import Contacts from "../Components/Contact";
import Filters from "../Components/filter";
import Benz from "../Photos/b.webp";
import Mazda from "../Photos/d.jpg";
import Filtersa from "../Photos/filter.svg";
import HidedComp from "../Components/HidedComp";
import Login from "../Components/Login";
import Search from "../Photos/search.svg";
import Background from "../Photos/Hot1.jpg";

const Cars = () => {
  /* Login Show/Hide */
  const [blurBackground, setBlurBackground] = useState(
    "body--cars--background"
  );
  const [loginUp, setLoginUp] = useState(false);
  const [login, setLogin] = useState(false);
  const [scrollFreezed, setScrollFreezed] = useState(false);
  /* Login Show/Hide end */
  /* Contact Show/ Hide*/
  const [contacts, setContacts] = useState(false);
  const [contactUp, setContactUp] = useState(false);
  /* Contact Show/Hide */
  const [filterBool, setFilterBool] = useState(true);
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
  const [allInput, setAllInput] = useState({
    Cars: [Benz, Mazda, Benz, Mazda, Benz, Benz, Benz, Benz],
  });
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
    console.log(filterBool);
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
      <NavbarNd
        ref={menu}
        setLogin={setLoginHandler}
        setScrollFreezed={setScrollFreezeHandler}
        setContacts={setContactsHandler}
      />
      <body>
        <div className="body--Cars">
          <div className={blurBackground}></div>
          <div className="wrap--Out--Icons"></div>
          <div className="body--cars--background--shadowed"></div>
          <div className="Filter--Out">
            <img
              src={Contact2}
              onClick={() => {
                setContacts(true);
                setScrollFreezed(true);
              }}
            ></img>
          </div>
          <div className="Search--OutFilter">
            <div className="Search--Outfilter--Child">
              <input
                type="text"
                className="Search--OuterFilter--Search"
                placeholder="სწრაფი ძებნა"
              ></input>
              <img src={Search}></img>
            </div>
          </div>
          {filterBool === false ? (
            <div
              className="filter--Icon"
              onClick={() => {
                setFilterBool(true);
                setFilterBoolUp(false);
              }}
            >
              <img src={Filtersa}></img>
            </div>
          ) : null}
          {filterBool === true ? (
            <div className="body--Cars--First">
              <Filters
                firstState={(prev) => {
                  setFilterBoolUp(prev);
                }}
                secondState={(prev) => {
                  setFilterBool(prev);
                }}
                ref={Filter}
              />
            </div>
          ) : null}

          <div className="body--Cars--Second">
            <div
              className="left--left"
              ref={left}
              onClick={() => {
                gridleft();
              }}
            >
              <img src={Right}></img>
            </div>
            <div
              className={filterBoolUp === false ? "right" : "right--right"}
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
                  {mouseHov === null || mouseHov === i ? (
                    <div
                      className="hidden-div"
                      onMouseEnter={() => {
                        setBlurBackground("body--cars--background--Blured");
                        setMouseHov(i);
                      }}
                      onMouseLeave={() => {
                        setBlurBackground("body--cars--background");
                        setMouseHov(null);
                      }}
                    >
                      <p className="visible-text">მოკლე ინფორმაცია</p>
                      {mouseHov !== null ? (
                        <div
                          className="hided-text"
                          onClick={() => {
                            setOpenProduct(true);
                          }}
                        >
                          <h2>Mercedes Benz</h2>
                          <p>ძრავა: 3.2 ბი-ტურბო</p>
                          <p>მგზავრთა რაოდენობა: 4</p>
                          <p>ფასი: 500 ლარი</p>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                  <div
                    className={
                      prodBlur === true && mouseHov !== i
                        ? `cars--Each--Imgblur`
                        : `cars--Each--Img`
                    }
                    // className={`cars--Each--Img${
                    //   mouseHov == i || mouseHov == null ? "" : "blur"
                    // }`}
                    onMouseEnter={() => {
                      setBlurBackground("body--cars--background--Blured");

                      setMouseHov(i);
                    }}
                    onMouseLeave={() => {
                      setBlurBackground("body--cars--background");
                      setMouseHov(null);
                    }}
                  >
                    <img
                      onClick={() => {
                        setOpenProduct(true);
                      }}
                      src={e}
                    ></img>
                  </div>
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
