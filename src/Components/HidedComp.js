import React, { useState } from "react";
import "./HidedComp.css";
import firstImage from "../Photos/d.jpg";
import secondImage from "../Photos/second--brabus.jpg";
import thirdImage from "../Photos/third--brabus.jpg";
import fourthImage from "../Photos/fourth--brabus.jpg";
import arrow from "../Photos/arrow.svg";

const HidedComp = () => {
  const [selectedImage, setSelectedImage] = useState(firstImage);
  const a = [firstImage, secondImage, thirdImage, fourthImage];
  return (
    <div className="HidedComp--Main">
      <div className="HidedComp--Main--St">
        <div className="HidedComp--Main--Child--St">
          <div className="arrows">
            <div className="leftt">
              <img src={arrow} className="left--arrowsssss"></img>
            </div>
            <div className="rightt">
              <img
                src={arrow}
                className="right--arrow"
                onClick={() => {
                  setSelectedImage((prev) => {
                    if (
                      a.findIndex((image) => image === selectedImage) ===
                      a.length - 1
                    ) {
                      return a[0];
                    } else {
                      return a[
                        a.findIndex((image) => image === selectedImage) + 1
                      ];
                    }
                  });
                }}
              ></img>
            </div>
          </div>
          <img src={selectedImage}></img>
        </div>
        <div className="HidedComp--Main--Child--Nd">
          <h2>Mercedes Benz</h2>
          <div className="HidedComp--Main--Child--Nd--Child">
            <p>მანქანის ძრავი: 5.0</p>
            <p>მგზავრთა რაოდენობა: 4 ადგილიანი</p>
            <p>მანქანის გამართულობა: ძალიან კარგი</p>
            <p>ვიზუალური მდგომარეობა: უნაკაწრო</p>
          </div>
          <p>ფასი: 850 ლარი</p>
        </div>
        <div className="HidedComp--Main--Child--Th">
          {a.map((e, i) => {
            return (
              <div className="secondary--Photos">
                <img
                  src={e}
                  onClick={() => {
                    setSelectedImage(e);
                  }}
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HidedComp;
