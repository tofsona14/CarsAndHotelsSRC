import React, { forwardRef, useEffect, useState } from "react";
import DownArrow from "../Photos/down-arrow.svg";
import Exit from "../Photos/exit.svg";
import Slider from "react-slider";
import "./Filter.css";
import Search from "../Photos/search.svg";

const Filter = forwardRef(({ firstState, secondState }, ref) => {
  /* Sliders values */
  const MIN = 50;
  const MAX = 800;
  const [values, setValues] = useState([MIN, MAX]);
  /* Clicked states */
  const [filterState, setFilterStates] = useState({
    Search: false,
    Marka: false,
    Model: false,
    Year: [false, false],
    Location: false,
    Prices: [false, false, false],
    PriceSlider: false,
  });
  /* To avoid 2 button clicked */
  const filterDefault = {
    Search: false,
    Marka: false,
    Model: false,
    Year: [false, false],
    Location: false,
    Prices: [false, false, false],
    PriceSlider: false,
  };
  /* States of buttons */
  const [allInput, setAllInput] = useState({
    search: "",
    chooseModel: 0,
    location: ["ყველა", "თბილისი", "ბათუმი", "მესტია"],
    choosedMarka: "მწარმოებელი",
    afterChoosedMarka: ["ყველა", "Mercedes Benz", "Mazda", "Chevrolet", "Bmw"],
    choosedModel: "მოდელი",
    afterChooseModel: [
      ["ყველა"],
      ["CLS", "C-Class", "G-Class"],
      ["Mazda-6", "Mazda-9"],
      ["Chevrolet-Camaro"],
      ["M5"],
    ],
    choosedLocation: "მდებარეობა",
    afterChooseLocation: ["ყველა", "თბილისი", "ბათუმი", "მესტია"],
    choosedStYear: "დან",
    choosedNdYear: "მდე",
    afterChooseYears: {
      first: ["ყველა", 2024, 2023, 2022, 2021, 2020],
      second: ["ყველა", 2024, 2023, 2022, 2021, 2020],
    },
    choosedPrice: values,
    afterChoosePrice: {
      first: [50, 100, 200, 300, 400, 500, 600, 700, 800],
      second: [100, 200, 300, 400, 500, 600, 700, 800],
    },
  });
  useEffect(() => {
    setAllInput((prev) => {
      const a = { ...prev };
      a.choosedPrice[0] = values[0];
      a.choosedPrice[1] = values[1];
      return a;
    });
  }, [values]);
  console.log(allInput.choosedPrice);
  return (
    <div className="Filter--Main--Main">
      <div className="Filter--Main--Main--HideTag">ფილტრი</div>
      <div className="Filter--Main" ref={ref}>
        <div
          className="filter--Close"
          onClick={() => {
            firstState(true);
            setTimeout(() => {
              secondState(false);
            }, 200);
          }}
        >
          <div className="filter--Close--Button">
            <img src={Exit}></img>
          </div>
        </div>
        <div className="Filter--Search">
          <div className="Filter--Search--Child">
            <input
              type="text"
              className="Filter--Search--Button"
              placeholder="ძებნა..."
              onClick={() => {
                setFilterStates(() => {
                  const a = filterDefault;
                  a.Search = true;
                  return a;
                });
              }}
              onChange={(arg) => {
                setAllInput((prev) => {
                  const a = { ...prev };
                  a.search = arg.target.value;
                  return a;
                });
              }}
            ></input>
            <img src={Search}></img>
          </div>
        </div>
        <div className="Filter--Marka">
          <div
            className="Filter--Marka--Div"
            onClick={() => {
              setFilterStates(() => {
                const a = filterDefault;
                if (filterState.Marka === false) {
                  a.Marka = true;
                } else {
                  a.Marka = false;
                }
                return a;
              });
            }}
          >
            {allInput.choosedMarka}

            <img
              src={DownArrow}
              alt="s"
              className={filterState.Marka === true ? "arrowUps" : "arrowDowns"}
            ></img>
          </div>
          {filterState.Marka === true ? (
            <div className="Filter--Marka--True">
              {allInput.afterChoosedMarka.map((e, i) => {
                return (
                  <div
                    className="Filter--Dropdown--SameForEverone"
                    onClick={() => {
                      setAllInput((prev) => {
                        const a = { ...prev };
                        a.chooseModel = i;
                        a.choosedMarka = e;
                        return a;
                      });
                      setFilterStates(filterDefault);
                    }}
                  >
                    {e}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="Filter--Model">
          <div
            className="Filter--Model--Div"
            onClick={() => {
              setFilterStates(() => {
                const a = filterDefault;
                if (filterState.Model === true) {
                  a.Model = false;
                } else {
                  a.Model = true;
                }
                return a;
              });
            }}
          >
            {allInput.choosedModel}
            <img
              src={DownArrow}
              alt="s"
              className={filterState.Model === true ? "arrowUps" : "arrowDowns"}
            ></img>
          </div>
          {filterState.Model === true ? (
            <div className="Filter--Model--True">
              {allInput.afterChooseModel[allInput.chooseModel].map((e, i) => {
                return (
                  <div
                    className="Filter--Dropdown--SameForEverone"
                    onClick={() => {
                      setAllInput((prev) => {
                        const a = { ...prev };
                        a.choosedModel = e;
                        return a;
                      });
                      setFilterStates(filterDefault);
                    }}
                  >
                    {e}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="Filter--Year">
          <div className="Filter--Years--Both">
            <div
              className="Filter--Years--Both--St"
              onClick={() => {
                setFilterStates(() => {
                  const a = filterDefault;
                  if (filterState.Year[0] === true) {
                    a.Year[0] = false;
                  } else {
                    a.Year[0] = true;
                  }
                  return a;
                });
              }}
            >
              {allInput.choosedStYear}
              <img
                src={DownArrow}
                alt="s"
                className={
                  filterState.Year[0] === true ? "arrowUps" : "arrowDowns"
                }
              ></img>
            </div>
            {filterState.Year[0] === true ? (
              <div className="Filter--Years--St--True">
                {" "}
                {allInput.afterChooseYears.first.map((e, i) => {
                  return (
                    <div
                      className="Filter--Dropdown--SameForEverone"
                      onClick={() => {
                        setAllInput((prev) => {
                          const a = { ...prev };
                          a.choosedStYear = e;
                          return a;
                        });
                        setFilterStates(filterDefault);
                      }}
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            ) : null}
            <div
              className="Filter--Years--Both--Nd"
              onClick={() => {
                setFilterStates(() => {
                  const a = filterDefault;
                  if (filterState.Year[1] === false) {
                    a.Year[1] = true;
                  } else {
                    a.Year[1] = false;
                  }
                  return a;
                });
              }}
            >
              {allInput.choosedNdYear}
              <img
                src={DownArrow}
                alt="s"
                className={
                  filterState.Year[1] === true ? "arrowUps" : "arrowDowns"
                }
              ></img>
            </div>
            {filterState.Year[1] === true ? (
              <div className="Filter--Years--Nd--True">
                {allInput.afterChooseYears.second.map((e, i) => {
                  return (
                    <div
                      className="Filter--Dropdown--SameForEverone"
                      onClick={() => {
                        setAllInput((prev) => {
                          const a = { ...prev };
                          a.choosedNdYear = e;
                          return a;
                        });
                        setFilterStates(filterDefault);
                      }}
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
        <div className="Filter--Location">
          <div
            className="Filter--Location--Div"
            onClick={() => {
              setFilterStates(() => {
                const a = filterDefault;
                if (filterState.Location === true) {
                  a.Location = false;
                } else {
                  a.Location = true;
                }
                return a;
              });
            }}
          >
            {allInput.choosedLocation}
            <img
              src={DownArrow}
              alt="s"
              className={
                filterState.Location === true ? "arrowUps" : "arrowDowns"
              }
            ></img>
          </div>
          {filterState.Location === true ? (
            <div className="Filter--Location--True">
              {allInput.afterChooseLocation.map((e, i) => {
                return (
                  <div
                    className="Filter--Dropdown--SameForEverone"
                    onClick={() => {
                      setAllInput((prev) => {
                        const a = { ...prev };
                        a.choosedLocation = e;
                        return a;
                      });
                      setFilterStates(filterDefault);
                    }}
                  >
                    {e}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="Filter--Prices">
          <div className="Filter--Prices--Div">
            <div
              className="Filter--Prices--Div--Min"
              onClick={() => {
                setFilterStates(() => {
                  const a = filterDefault;
                  if (filterState.Prices[0] === false) {
                    a.Prices[0] = true;
                  } else {
                    a.Prices[0] = false;
                  }
                  return a;
                });
              }}
            >
              {allInput.choosedPrice[0]}
              <img
                src={DownArrow}
                alt="s"
                className={
                  filterState.Prices[0] === true ? "arrowUps" : "arrowDowns"
                }
              ></img>
            </div>
            {filterState.Prices[0] === true ? (
              <div className="Filter--Prices--Div--Min--True">
                {allInput.afterChoosePrice.first.map((e, i) => {
                  return (
                    <div
                      className="Filter--Dropdown--SameForEverone"
                      onClick={() => {
                        setValues((prev) => {
                          const a = [...prev];
                          a[0] = e;
                          return a;
                        });
                        setAllInput((prev) => {
                          const a = { ...prev };
                          a.choosedPrice[0] = e;
                          return a;
                        });
                        setFilterStates(filterDefault);
                      }}
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            ) : null}
            <div className="Filter--Prices--Div--Exchange">
              <p>ლ</p>
              <p>/</p>
              <p>$</p>
            </div>
            <div
              className="Filter--Prices--Div--Max"
              onClick={() => {
                setFilterStates(() => {
                  const a = filterDefault;
                  if (filterState.Prices[2] === false) {
                    a.Prices[2] = true;
                  } else {
                    a.Prices[2] = false;
                  }
                  return a;
                });
              }}
            >
              {allInput.choosedPrice[1]}
              <img
                src={DownArrow}
                alt="s"
                className={
                  filterState.Prices[2] === true ? "arrowUps" : "arrowDowns"
                }
              ></img>
            </div>
            {filterState.Prices[2] === true ? (
              <div className="Filter--Prices--Div--Max--True">
                {allInput.afterChoosePrice.second.map((e, i) => {
                  return (
                    <div
                      className="Filter--Dropdown--SameForEverone"
                      onClick={() => {
                        setValues((prev) => {
                          const a = [...prev];
                          a[1] = e;
                          return a;
                        });
                        setAllInput((prev) => {
                          const a = { ...prev };
                          a.choosedPrice[1] = e;
                          return a;
                        });
                        setFilterStates(filterDefault);
                      }}
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
        <div className="Filter--PriceSlider">
          <Slider
            min={MIN}
            max={MAX}
            onChange={setValues}
            className="slider"
            value={values}
          />
        </div>
        <div className="Filter--Submit">
          <button className="Filter--Submit--Button">Submit</button>
        </div>
      </div>
    </div>
  );
});

export default Filter;
