import React, { useEffect, useState } from "react";
import "./Study.css";
const LeftComp = ({ first, title, second, True, iden }) => {
  return (
    <>
      <div className="Left--Component">
        <div className="Left--Component--Child">
          <h2>Your Projects</h2>
          <button
            onClick={() => {
              True(true);
            }}
          >
            + Add Project
          </button>
          <div className="Added--Map">
            {title
              ? title.map((e, i) => (
                  <div className="eAndBut">
                    <div>
                      <div
                        onClick={() => {
                          second(i);
                        }}
                      >
                        <p>{e}</p>
                      </div>
                      <button
                        onClick={() => {
                          iden(i);
                        }}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                ))
              : "ss"}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftComp;
