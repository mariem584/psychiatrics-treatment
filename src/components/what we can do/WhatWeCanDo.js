import React from "react";
import "./whatWeCanDo.css";
import img1 from "../../images/image_02.png";
import img2 from '../../images/triangle.png'
import img3 from '../../images/rectangle.png'

const WhatWeCanDo = () => {
  return (
    <div className="container">
      <div className="first">
        <img className="img1" src={img1} alt="" />
        <img style={{height:"90px", width:"90px"}} className="img2" src={img2} alt=""   />
        <img style={{height:"125px", width:"110px"}} className="img3" src={img3} alt="" />
      </div>

      <div className="second">
        <div className="part">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-bookmark"
            viewBox="0 0 16 16"
          >
            <path
              d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4"
              stroke-width="3"
            />
          </svg>

          <h4>Licensed therapists</h4>
          <p>
            Therapists have a minimum of 7 <br />
            years experience, are accredited <br />
            and insured to practice privately.
          </p>
        </div>

        <div className="part">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-heart-pulse"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Z" />
            <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z" />
          </svg>
          <h4>The best match</h4>

          <p>
            Our therapists have met selection <br />
            criteria and are vetted to ensure you <br /> receive the best
            support.
          </p>
        </div>

        <div className="part">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-award"
            viewBox="0 0 16 16"
          >
            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
          </svg>
          <h4>Quality guaranteed</h4>
          <p>
            We are passionate and <br />
            compassionate professionals, <br /> driven by the mission of
            helping.
          </p>
        </div>

        <div className="part">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <h4>Selection process</h4>
          <p>
            We are growing fast and always <br /> looking for new talent. If you
            love <br /> people – come and join us!
          </p>
        </div>

        <button className="bttn">Meet The Team</button>
      </div>
    </div>
  );
};

export default WhatWeCanDo;
