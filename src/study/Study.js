import React, { useState, useRef } from "react";
import "./Study.css";
import LeftComp from "./LeftComp.js";
import RightFirst from "./RightFirst";
import RightSecond from "./RightSecond.js";
import Add from "./RightAdd.js";

const Study = () => {
  const [iden, setIden] = useState();
  const [title, setTitle] = useState(["first"]);
  const [add, setAdd] = useState(false);
  const [allInput, setAllInput] = useState([
    {
      first: "Title",
      second: "Description",
      third: "Date",
    },
  ]);
  const handleInfos = (as) => {
    setAllInput((prev) => {
      const a = [...prev];
      a.push({
        first: as[0],
        second: as[1],
        third: as[2],
      });
      return a;
    });
  };
  const handleFalse = (prev) => {
    setAdd(false);
  };
  const handleTitle = (prevs) => {
    setTitle((prev) => {
      const a = [...prev];
      a.push(prevs);
      return a;
    });
  };
  const idenHandler = (prev) => {
    setIden(prev);
  };
  const trueHandler = (prev) => {
    setAdd(prev);
    setIden(undefined);
  };
  const idenHandlerNd = (prevs) => {
    setTitle((prev) => prev.filter((_, index) => index !== prevs));
    setAllInput((prev) => prev.filter((_, index) => index !== prevs));
  };
  return (
    <div className="Body--Component">
      <LeftComp
        iden={idenHandlerNd}
        first={allInput}
        True={trueHandler}
        title={title}
        second={idenHandler}
      />
      <div className="Right--Component">
        <div className="Right--Component--Child">
          {add ? (
            <>
              <Add
                infos={handleInfos}
                falses={handleFalse}
                TitleLeft={handleTitle}
              />
            </>
          ) : (
            <>
              <RightFirst choosed={iden} first={allInput} />
              <RightSecond />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Study;
