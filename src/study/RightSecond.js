import React, { useState } from "react";
import "./Study.css";

const RightSecond = () => {
  const [first, setFirst] = useState(["Learn the basics"]);
  const [taskAdd, setTaskAdd] = useState("");
  return (
    <>
      <h2 className="Tasks">Tasks</h2>
      <div className="input--button">
        <input
          value={taskAdd}
          className="Task--Input"
          type="text"
          onChange={(prev) => {
            setTaskAdd(prev.target.value);
          }}
        />
        <button
          onClick={() => {
            setFirst((prev) => {
              const a = [...prev];
              a.push(taskAdd);
              setTaskAdd("");
              return a;
            });
          }}
        >
          Add Task
        </button>
      </div>
      <div className="after--Task">
        {first.map((e, i) => (
          <>
            <div className="checking">
              <p>{e} </p>
              <button
                onClick={() => {
                  setFirst((prev) => prev.filter((_, index) => index !== i));
                }}
              >
                Clear
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default RightSecond;
