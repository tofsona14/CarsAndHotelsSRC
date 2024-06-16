import React, { forwardRef, useState } from "react";
import "./Login.css";
import Exit from "../Photos/exit.svg";
import Profile from "../Photos/profile.svg";
import Password from "../Photos/password.svg";
import Enter from "../Photos/enters.svg";
import Fb from "../Photos/Facebook.svg";
import Google from "../Photos/google.svg";

const Login = forwardRef(({ loginsUp, loginsSecond }, logins) => {
  return (
    <div className="Login">
      <div className="login" ref={logins}>
        <div
          className="closeIcon"
          onClick={() => {
            setTimeout(() => {
              loginsSecond(false);
            }, 200);
            loginsUp(true);
          }}
        >
          <img src={Exit} className="close"></img>
        </div>
        <div className="icons--Social">
          <div className="icons--Social--Child">
            <img src={Fb}></img>
            <img src={Google}></img>
          </div>
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
});

export default Login;
