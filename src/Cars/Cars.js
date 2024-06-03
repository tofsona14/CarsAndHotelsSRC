import React, { useRef, useEffect, useState } from "react";
import "./Cars.css";
import { Link } from "react-router-dom";
import Slider from "react-slider";
import { gsap, Power3 } from "gsap";
import Arrow from "../Photos/arrow.svg";
import Left from "../Photos/left.svg";
import Right from "../Photos/right.svg";
import Range from "../Photos/x.jpg";
import Brabus from "../Photos/d.jpg";
import Mazda from "../Photos/xe.jpg";
import camaro from "../Photos/xex.jpg";
import Benz from "../Photos/b.webp";
import Home from "../Photos/home.svg";
import Car from "../Photos/car.svg";
import Hotel from "../Photos/hotel.svg";
import Contact from "../Photos/contact.svg";
import User from "../Photos/enter.svg";
import Exit from "../Photos/exit.svg";
import Profile from "../Photos/profile.svg";
import Password from "../Photos/password.svg";
import Enter from "../Photos/enters.svg";
import Search from "../Photos/search.svg";
import Contacts from "../Components/Contact";

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

  /*price Slider */
  const [lAndD, setLAndD] = useState(true);
  const [prices, setPrices] = useState([false, false]);
  const MIN = 50;
  const MAX = 800;
  const [values, setValues] = useState([MIN, MAX]);
  /* end Slider */
  const marka = ["ყველა", "Mercedes Benz", "Mazda", "Chevrolet", "Bmw"];
  const modeli = [
    ["ყველა"],
    ["CLS", "C-Class", "G-Class"],
    ["Mazda-6", "Mazda-9"],
    ["Chevrolet-Camaro"],
    ["M5"],
  ];
  const [arrow, setArrow] = useState([
    "arrowDown",
    "arrowDown",
    ["arrowDown", "arrowDown"],
    "arrowDown",
  ]);
  const [markaClicked, setMarkaClicked] = useState([
    "dropdown-content--offClicked",
    "dropdown-content--offClicked",
    ["dropdown-content--offClicked", "dropdown-content--offClicked"],
    "dropdown-content--offClicked",
  ]);
  const [chooseModel, setChooseModel] = useState("მოდელი");
  const [year, setYear] = useState({
    first: [2024, 2023, 2022, 2021, 2020],
    second: [2024, 2023, 2022, 2021, 2020],
  });
  const [allInput, setAllInput] = useState({
    marka: {
      0: "ყველა",
    },
    modeli: {
      0: ["ყველა"],
    },
    choose: 0,
    years: {
      first: ["ყველა"],
      second: ["ყველა"],
    },
    location: ["ყველა", "თბილისი", "ბათუმი", "მესტია"],
    arrow: {
      0: "arrowDown",
    },
    markaClicked: {
      0: "dropdown-content--offClicked",
    },
    chooseMarka: "მწარმოებელი",
    chooseModel: "მოდელი",
    chooseStYear: "დან",
    chooseNdYear: "მდე",
    chooseLocation: "მდებარეობა",
    choosePrice: {
      first: [50, 100, 200, 300, 400, 500, 600, 700, 800],
      second: [100, 200, 300, 400, 500, 600, 700, 800],
    },
    Cars: [Benz, Brabus, Mazda, camaro, Benz, Benz],
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

    setAllInput((prev) => {
      const a = { ...prev };
      marka.map((e, i) => {
        a.marka[i] = e;
      });
      modeli.map((e, i) => {
        a.modeli[i] = e;
      });
      arrow.map((e, i) => {
        a.arrow[i] = e;
      });
      markaClicked.map((e, i) => {
        a.markaClicked[i] = e;
      });
      year.first.map((e, i) => {
        a.years.first[i] = e;
      });
      year.second.map((e, i) => {
        a.years.second[i] = e;
      });

      return a;
    });
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
          <div ref={Filter} className="body--Cars--First">
            <div className="body--Cars--First--h1">
              <div className="searchAndIcon">
                <input
                  className="Search"
                  type="text"
                  placeholder="ძებნა..."
                ></input>
                <img src={Search} className="search--Icon"></img>
              </div>
            </div>
            <div className="body--Cars--First--Filters--First">
              <div className="body--Cars--First--Filters--First--Inputs">
                <div className="button--h3">
                  <div
                    className="dropdown"
                    onClick={() => {
                      if (
                        allInput.markaClicked[0] ==
                        "dropdown-content--offClicked"
                      ) {
                        setAllInput((prev) => {
                          var a = { ...prev };
                          a.markaClicked[0] = "dropdown-content--clicked";
                          return a;
                        });
                        setAllInput((prev) => {
                          const a = { ...prev };
                          a.arrow[0] = "arrowUp";
                          return a;
                        });
                      } else {
                        setAllInput((prev) => {
                          const a = { ...prev };
                          a.markaClicked[0] = "dropdown-content--offClicked";
                          return a;
                        });
                        setAllInput((prev) => {
                          const a = { ...prev };
                          a.arrow[0] = "arrowDown";
                          return a;
                        });
                      }
                    }}
                  >
                    <div className="dropdown-btn-witharrow">
                      <div className="dropdown-btn">{allInput.chooseMarka}</div>
                      <img src={Arrow} className="arrowDown"></img>
                    </div>
                    <div className={`${allInput.markaClicked[0]}`}>
                      {marka.map((e, i) => (
                        <div
                          className="dropdown-item"
                          onClick={() => {
                            setAllInput((prev) => {
                              const a = { ...prev };
                              a.choose = i;
                              return a;
                            });
                            setAllInput((prev) => {
                              const a = { ...prev };
                              a.chooseMarka = e;
                              return a;
                            });
                            setChooseModel("მოდელი");
                          }}
                        >
                          {e}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="button--h3">
                  <div
                    className="dropdowns"
                    onClick={() => {
                      if (markaClicked[1] == "dropdown-content--offClicked") {
                        setMarkaClicked((prev) => {
                          const a = [...prev];
                          a[1] = "dropdown-content--clicked";
                          return a;
                        });
                        setArrow((prev) => {
                          const a = prev;
                          a[1] = "arrowUp";
                          return a;
                        });
                      } else {
                        setMarkaClicked((prev) => {
                          const a = [...prev];
                          a[1] = "dropdown-content--offClicked";
                          return a;
                        });
                        setArrow((prev) => {
                          const a = prev;
                          a[1] = "arrowDown";
                          return a;
                        });
                      }
                    }}
                  >
                    <div className="dropdown-btn-witharrow">
                      <div className="dropdown-btn">{chooseModel}</div>
                      <img src={Arrow} className="arrowDown"></img>
                    </div>
                    <div className={markaClicked[1]}>
                      {allInput.modeli[allInput.choose].map((e, i) => (
                        <div
                          className="dropdown-item"
                          onClick={() => {
                            setChooseModel(e);
                          }}
                        >
                          {e}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="button--h3">
                  <div className="years--dropdowns">
                    <div
                      className="dropdownss"
                      onClick={() => {
                        if (
                          markaClicked[2][0] == "dropdown-content--offClicked"
                        ) {
                          setMarkaClicked((prev) => {
                            const a = [...prev];
                            a[2][0] = "dropdown-content--clicked";
                            return a;
                          });
                          setArrow((prev) => {
                            const a = prev;
                            a[2][0] = "arrowUp";
                            return a;
                          });
                        } else {
                          setMarkaClicked((prev) => {
                            const a = [...prev];
                            a[2][0] = "dropdown-content--offClicked";
                            return a;
                          });
                          setArrow((prev) => {
                            const a = prev;
                            a[2][0] = "arrowDown";
                            return a;
                          });
                        }
                      }}
                    >
                      <div className="dropdown-btn-witharrow">
                        <div className="dropdown-btn">
                          {allInput.chooseStYear}
                        </div>
                        <img src={Arrow} className="arrowDown"></img>
                      </div>
                      <div className={markaClicked[2][0]}>
                        {allInput.years.first.map((e, i) => (
                          <div
                            className="dropdown-item"
                            onClick={() => {
                              setAllInput((prev) => {
                                const a = { ...prev };
                                a.chooseStYear = e;
                                return a;
                              });
                            }}
                          >
                            {e}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="dropdownss"
                      onClick={() => {
                        if (
                          markaClicked[2][1] == "dropdown-content--offClicked"
                        ) {
                          setMarkaClicked((prev) => {
                            const a = [...prev];
                            a[2][1] = "dropdown-content--clicked";
                            return a;
                          });
                          setArrow((prev) => {
                            const a = prev;
                            a[2][1] = "arrowUp";
                            return a;
                          });
                        } else {
                          setMarkaClicked((prev) => {
                            const a = [...prev];
                            a[2][1] = "dropdown-content--offClicked";
                            return a;
                          });
                          setArrow((prev) => {
                            const a = prev;
                            a[2][1] = "arrowDown";
                            return a;
                          });
                        }
                      }}
                    >
                      <div className="dropdown-btn-witharrow">
                        <div className="dropdown-btn">
                          {allInput.chooseNdYear}
                        </div>
                        <img src={Arrow} className="arrowDown"></img>
                      </div>
                      <div className={markaClicked[2][1]}>
                        {allInput.years.second.map((e, i) => (
                          <div
                            className="dropdown-item"
                            onClick={() => {
                              setAllInput((prev) => {
                                const a = { ...prev };
                                a.chooseNdYear = e;
                                return a;
                              });
                            }}
                          >
                            {e}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button--h3">
                  <div
                    className="dropdownsss"
                    onClick={() => {
                      if (markaClicked[3] == "dropdown-content--offClicked") {
                        setMarkaClicked((prev) => {
                          const a = [...prev];
                          a[3] = "dropdown-content--clicked";
                          return a;
                        });
                        setArrow((prev) => {
                          const a = prev;
                          a[3] = "arrowUp";
                          return a;
                        });
                      } else {
                        setMarkaClicked((prev) => {
                          const a = [...prev];
                          a[3] = "dropdown-content--offClicked";
                          return a;
                        });
                        setArrow((prev) => {
                          const a = prev;
                          a[3] = "arrowDown";
                          return a;
                        });
                      }
                    }}
                  >
                    <div className="dropdown-btn-witharrow">
                      <div className="dropdown-btn">
                        {allInput.chooseLocation}
                      </div>
                      <img src={Arrow} className="arrowDown"></img>
                    </div>
                    <div className={markaClicked[3]}>
                      {allInput.location.map((e, i) => (
                        <div
                          className="dropdown-item"
                          onClick={() => {
                            setAllInput((prev) => {
                              const a = { ...prev };
                              a.chooseLocation = e;
                              return a;
                            });
                          }}
                        >
                          {e}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="prices">
                  <div className="Slider--Main">
                    <div className="MinAndMax">
                      <div
                        className="Min"
                        onClick={() => {
                          setPrices((prev) => {
                            const a = [...prev];
                            a[0] = !a[0];
                            return a;
                          });
                        }}
                      >
                        {values[0]}
                      </div>
                      <div className="exchange">
                        <div
                          className="lAndD"
                          onClick={() => {
                            setLAndD(!lAndD);
                          }}
                        >
                          <p className={lAndD == false ? "lari" : "lari--Y"}>
                            ₾
                          </p>
                          <p>/</p>
                          <p className={lAndD == true ? "dolari" : "Dollar--Y"}>
                            $
                          </p>
                        </div>
                      </div>
                      <div
                        className="Max"
                        onClick={() => {
                          setPrices((prev) => {
                            const a = [...prev];
                            a[1] = !a[1];
                            return a;
                          });
                        }}
                      >
                        {values[1]}
                      </div>
                    </div>
                    {prices[0] == true || prices[1] == true ? (
                      <div className="Min-Max--Prices">
                        {prices[0] == true ? (
                          <div
                            className="first--Min"
                            onClick={() => {
                              setPrices((prev) => {
                                const a = [...prev];
                                a[0] = !a[0];
                                return a;
                              });
                            }}
                          >
                            {allInput.choosePrice.first.map((e, i) => (
                              <div
                                onClick={() => {
                                  setValues((prev) => {
                                    const a = [...prev];
                                    a[0] = e;
                                    return a;
                                  });
                                  if (e > values[1]) {
                                    setValues((prev) => {
                                      const a = [...prev];
                                      a[1] = e;
                                      return a;
                                    });
                                  }
                                  setPrices((prev) => {
                                    const a = [...prev];
                                    a[0] = true;
                                    return a;
                                  });
                                }}
                                className="price--dropdown--min"
                              >
                                <div>{e}</div>
                              </div>
                            ))}
                          </div>
                        ) : null}
                        {prices[1] === true ? (
                          <div className="second--Max">
                            {allInput.choosePrice.second.map((e, i) => {
                              if (e > values[0]) {
                                return (
                                  <div
                                    onClick={() => {
                                      setValues((prev) => {
                                        const a = [...prev];
                                        a[1] = e;
                                        return a;
                                      });
                                      setPrices((prev) => {
                                        const a = [...prev];
                                        a[1] = false;
                                        return a;
                                      });
                                    }}
                                    className="price--dropdown--max"
                                  >
                                    {e}
                                  </div>
                                );
                              }
                            })}
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <div className="sliders">
                        <Slider
                          className="slider"
                          onChange={setValues}
                          value={values}
                          min={MIN}
                          max={MAX}
                        />
                        <div className="button--h3s">
                          <button>ძებნა</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="body--Cars--First--Filters--Second"></div>
          </div>
          <div
            className="body--Cars--Second"
            onClick={() => {
              setMarkaClicked((prev) => {
                const a = [...prev];
                a[0] = "dropdown-content--offClicked";
                a[1] = "dropdown-content--offClicked";
                return a;
              });
              setArrow((prev) => {
                const a = [...prev];
                a[0] = "arrowDown";
                a[1] = "arrowDown";
                return a;
              });
            }}
          >
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
