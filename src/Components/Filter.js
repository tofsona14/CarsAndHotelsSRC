import React, { useState } from "react";
import Slider from "react-slider";
import "./Filter.css";
const Filter = () => {
  const MIN = 50;
  const MAX = 800;
  const [values, setValues] = useState([MIN, MAX]);
  const filterDefault = {
    Search: false,
    Marka: false,
    Model: false,
    Year: [false, false],
    Location: false,
    Prices: [false, false, false],
    PriceSlider: false,
  };
  const [filterState, setFilterStates] = useState({
    Search: false,
    Marka: false,
    Model: false,
    Year: [false, false],
    Location: false,
    Prices: [false, false, false],
    PriceSlider: false,
  });
  return (
    <div className="Filter--Main">
      <div className="Filter--Search">
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
            console.log(filterState);
          }}
        ></input>
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
            console.log(filterState);
          }}
        ></div>
        {filterState.Marka === true ? (
          <div className="Filter--Marka--True">aa</div>
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
        ></div>
        {filterState.Model === true ? (
          <div className="Filter--Model--True">aa</div>
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
          ></div>
          {filterState.Year[0] === true ? (
            <div className="Filter--Years--St--True"> aa</div>
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
          ></div>
          {filterState.Year[1] === true ? (
            <div className="Filter--Years--Nd--True">aa</div>
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
        ></div>
        {filterState.Location === true ? (
          <div className="Filter--Location--True">aa</div>
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
          ></div>
          {filterState.Prices[0] === true ? (
            <div className="Filter--Prices--Div--Min--True"></div>
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
          ></div>
          {filterState.Prices[2] === true ? (
            <div className="Filter--Prices--Div--Max--True">aa</div>
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
  );
};

export default Filter;
