import React, { useState, useRef, useEffect, forwardRef } from "react";
import Right from "../Photos/right.svg";
import Contact2 from "../Photos/ContactOut.svg";
import Filters from "../Components/filter";
import Benz from "../Photos/b.webp";
import Mazda from "../Photos/d.jpg";
import { gsap, Power3 } from "gsap";
import Filtersa from "../Photos/filter.svg";
import Search from "../Photos/search.svg";
import Hot1 from "../Photos/Hot1.jpg";
import Hot2 from "../Photos/Hot2.jpg";

const SliderCar = forwardRef(
  ({ setScrollFreezed, setContacts, setOpenProduct }, ref) => {
    const [blurBackground, setBlurBackground] = useState(
      "body--cars--background"
    );

    const [filterBool, setFilterBool] = useState(true);
    const [filterBoolUp, setFilterBoolUp] = useState(false);
    const [prodBlur, setProdBlur] = useState(false);
    const [mouseHov, setMouseHov] = useState(null);

    let Filter = useRef(null);
    let Product = useRef(null);
    let right = useRef(null);
    let left = useRef(null);

    const gridRight = () => {
      Product.current.scrollLeft += 400;
    };
    const gridleft = () => {
      Product.current.scrollLeft -= 400;
    };
    const [allInput, setAllInput] = useState({
      Cars: [Benz, Mazda, Benz, Mazda, Benz, Benz, Benz, Benz],
    });
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
    return (
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
            <div className="cars--Container" ref={ref}>
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
    );
  }
);
const SliderHotel = forwardRef(
  ({ setScrollFreezed, setContacts, setOpenProduct }, ref) => {
    const [blurBackground, setBlurBackground] = useState(
      "body--hotels--background"
    );

    const [filterBool, setFilterBool] = useState(true);
    const [filterBoolUp, setFilterBoolUp] = useState(false);
    const [prodBlur, setProdBlur] = useState(false);
    const [mouseHov, setMouseHov] = useState(null);

    let Filter = useRef(null);
    let Product = useRef(null);
    let right = useRef(null);
    let left = useRef(null);

    const gridRight = () => {
      Product.current.scrollLeft += 400;
    };
    const gridleft = () => {
      Product.current.scrollLeft -= 400;
    };
    const [allInput, setAllInput] = useState({
      Cars: [Hot1, Hot2, Hot1, Hot2, Hot1, Hot2, Hot1, Hot2],
    });
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
    return (
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
            <div className="cars--Container" ref={ref}>
              {allInput.Cars.map((e, i) => (
                <div className={`cars--Each`}>
                  {mouseHov === null || mouseHov === i ? (
                    <div
                      className="hidden-div"
                      onMouseEnter={() => {
                        setBlurBackground("body--hotels--background--Blured");
                        setMouseHov(i);
                      }}
                      onMouseLeave={() => {
                        setBlurBackground("body--hotels--background");
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
                      setBlurBackground("body--hotels--background--Blured");

                      setMouseHov(i);
                    }}
                    onMouseLeave={() => {
                      setBlurBackground("body--hotels--background");
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
    );
  }
);

export { SliderCar, SliderHotel };
