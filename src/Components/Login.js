import React, { useState } from "react";
import "./Login.css";
import Exit from "../Photos/exit.svg";
import Profile from "../Photos/profile.svg";
import Password from "../Photos/password.svg";
import Enter from "../Photos/enters.svg";

const Login = ({ logins }) => {
  const [loginUp, setLoginUp] = useState(false);
  const [login, setLogin] = useState(false);
  const [scrollFreezed, setScrollFreezed] = useState(false);

  return (
    <div className="Login">
      <div className="login" ref={logins}>
        <div
          className="closeIcon"
          onClick={() => {
            setTimeout(() => {
              setLogin(false);
            }, 200);
            setLoginUp(true);
            setScrollFreezed(false);
          }}
        >
          <img src={Exit} className="close"></img>
        </div>
        <div className="login--Inputs">
          <div className="sss">
            <img src={Profile} className="iconUser"></img>
            <input type="text" placeholder="Username"></input>
          </div>
          <div className="sss">
            <input type="text" placeholder="Password"></input>
            <img src={Password} className="iconUser"></img>
          </div>
        </div>
        <div className="afterLogin">
          <div className="resetAndBut">
            <p>პაროლის აღდგენა</p>
            <div className="logInButAndIcon">
              <button>შესვლა</button>
              <img src={Enter} className="iconUser"></img>
            </div>
          </div>
        </div>
        <div className="register">
          <p>რეგისტრაცია</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
