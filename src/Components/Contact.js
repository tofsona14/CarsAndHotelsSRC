import React from "react";
import "./Contact.css";
import Location from "../Photos/location.svg";
import Mobile from "../Photos/mobile.svg";
import Email from "../Photos/email.svg";
import Exit from "../Photos/exit.svg";

const Contact = React.forwardRef(
  ({ setParentState, setParentSecondState }, ref) => {
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
        </div>
      </div>
    );
  }
);
export default Contact;
