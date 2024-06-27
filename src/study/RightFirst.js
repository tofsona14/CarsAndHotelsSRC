import React, { useEffect, useState } from "react";
const RightFirst = ({ first, choosed }) => {
  console.log(choosed);

  return (
    <>
      <div className="endOfLearning">
        <div className="Right--Component--Child--First">
          <h1>Learning React</h1>
          <div className="but1">
            <button>Delete</button>
          </div>
        </div>
        <p style={{ color: "gray" }}>
          {choosed !== undefined
            ? first[choosed].third
            : first[first.length - 1].third}
        </p>
        <p>
          {choosed !== undefined
            ? first[choosed].first
            : first[first.length - 1].first}
        </p>
        <p>
          {choosed !== undefined
            ? first[choosed].second
            : first[first.length - 1].second}
        </p>
      </div>
    </>
  );
};

export default RightFirst;
