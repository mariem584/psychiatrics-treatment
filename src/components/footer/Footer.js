import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import img1 from "../../images/logo_footer.png";
const Footer = () => {
  return (
    <div className="contaain">
      <div className="logoo">
        <img src={img1} alt="" />
        <h4>Center for psychology & conseling</h4>
        <br />
        <div className="socialMedia">
          {/* <FaFacebookF  className="icons" /> */}

          <svg
            style={{ color: " white", width: "22px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              fill="white"
            ></path>
          </svg>

          <svg
            style={{ color: "white" }}
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              fill="white"
            ></path>{" "}
          </svg>

          <svg
            style={{ color: "white", width: "30px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              fill="white"
            ></path>
          </svg>
        </div>
        <br /> <br />
        <h3>©2023 Lycka mariam Counselling | Terms of use | Cookie policy</h3>
      </div>

      <div className="secFooter">
        <h4>
          Career opportunities <FiArrowRight />
          <br />
          Our approach <FiArrowRight />
        </h4>

        <div className="list">
          <ul>
            <li className="firstli">LINKS</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>

          <ul>
            <li className="firstli">CONTACT</li>
            <li>
              A: 714 Woodbine Ave <br />
              
              Toronto ON M4E 2J1
            </li>
 
            <li style={{marginTop:"15px"}}>T: (416) 656-1818</li>
            <li style={{marginTop:"8px"}}>E: info@lycka.com</li>
          </ul>

          <ul>
            <li className="firstli">HOURS</li>
            <li>Mon – Fri: 9am-6pm</li>
            <li>Sat: 8am – 2pm</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
