import React from "react";
import "./what_we_do.css";
import img1 from "../../images/image_01.png";

const WhatWeDo = () => {
  return (
    <div className="container">
      <div className="first">
        <h4>WHAT WE DO</h4>
        {/* <br /> */}
        <p>
          Connected and invested <br /> in our mission to help <br />{" "}
          <span className="spann">every child</span>
        </p>
      </div>

      <div className="second">
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default WhatWeDo;