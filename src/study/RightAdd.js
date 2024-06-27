import React, { useState } from "react";
import "./Study.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Add = ({ infos, falses, TitleLeft }) => {
  const [calendar, setCalendar] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState("mm.dd.yyyy");
  const handleDateChange = (date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    setSelectedDate(`${month}.${day}.${year}`);
    setCalendar(false);
  };
  return (
    <div className="Add--Main">
      <div className="Add--Main--First">
        <div>
          <button className="Cancel">Cancel</button>
          <button
            className="Save"
            onClick={() => {
              falses(false);
              infos([title, description, selectedDate]);
              TitleLeft(title);
            }}
          >
            Save
          </button>
        </div>
      </div>
      <div className="Add--Main--Second">
        <p>TITLE</p>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <p>Description</p>
        <input
          onChange={(arg) => {
            setDescription(arg.target.value);
          }}
          type="text"
          className="input--Desc"
        />
        <p>DUE DATE</p>
        <div
          className="calendar--input"
          onClick={() => {
            setCalendar(true);
          }}
        >
          {selectedDate}
        </div>
        <div className="calendar--Calendar">
          {calendar ? <Calendar onChange={handleDateChange} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Add;
