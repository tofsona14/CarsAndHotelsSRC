import React, { useState, useRef } from "react";
import "./Contact.css";
import Location from "../Photos/location.svg";
import Mobile from "../Photos/mobile.svg";
import Email from "../Photos/email.svg";
import Exit from "../Photos/exit.svg";

const Contact = React.forwardRef(
  ({ setParentState, setParentSecondState }, ref) => {
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
    const contentRef = useRef(null); // Create a ref for the contenteditable div
    console.log(contentRef.current);
    console.log("s");
    console.log(contentRef.current);
    const handleFocus = () => {
      if (isPlaceholderVisible) {
        contentRef.current.textContent = ""; // Clear the text directly using the ref
        setIsPlaceholderVisible(false);
      }
    };

    const handleBlur = () => {
      if (contentRef.current.textContent.trim() === "") {
        setIsPlaceholderVisible(true);
      }
    };

    const handleChange = () => {
      setIsPlaceholderVisible(contentRef.current.textContent.trim() === "");
    };
    return (
      <div className="Contact--Main">
        <div className="Contact--Content" ref={ref}>
          <div
            className="exit-icon"
            onClick={() => {
              setTimeout(() => {
                setParentState(false);
              }, 300);
              setParentSecondState(true);
            }}
          >
            <img src={Exit}></img>
          </div>
          <h2 className="Contact--Content--h2">საკონტაქტო ინფორმაცია</h2>
          <div className="Contact--Main--Both">
            <div className="first--Half">
              <div className="First--Content">
                <div className="img--Loc">
                  <img src={Location}></img>
                </div>
                <div className="second--Loc">
                  <h3 className=""> მისამართი</h3>
                  <p>თბილისი მუხიანის მე-4 ბ/მ რაიონი კორპუსი 42</p>
                </div>
              </div>
              <div className="Second--Content">
                <div className="img--Loc">
                  <img src={Mobile}></img>
                </div>
                <div className="second--Loc">
                  <h3 className=""> ტელეფონი:</h3>
                  <p>+995 591-68-84-52</p>
                </div>
              </div>
              <div className="Third--Content">
                <div className="img--Loc">
                  <img src={Email}></img>
                </div>
                <div className="second--Loc">
                  <h3 className=""> @Email:</h3>
                  <p>Topuria2074@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="Second--Half">
              <div className="Second--Half--Child">
                <input placeholder="მიუთითეთ თქვენი ემაილი"></input>
                <input placeholder="მიუთითეთ თქვენი ტელეფონის ნომერი"></input>
                <div
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onInput={handleChange}
                  ref={contentRef}
                  contentEditable="true"
                  className="Big--Text"
                  style={{
                    color: isPlaceholderVisible ? "gray" : "black", // Adjust colors here
                  }}
                >
                  {isPlaceholderVisible ? "მოგვწერეთ თქვენი კითხვა" : ""}
                </div>
                {console.log(contentRef)}
                <button>გაგზავნა</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
export default Contact;
