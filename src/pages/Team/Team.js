import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import team1 from "../../images/team_01.jpg";
import team2 from "../../images/team_02.jpg";
import team3 from "../../images/team_03.jpg";
import team4 from "../../images/team_04.jpg";
import Navbar from "../../components/navbar/Navbar";
import twitter from "../../images/twitter (1).png";
import linkedin from "../../images/linkedin.png";
import GetMatchedSecpart from "../../components/get matched/GetMatchedSecpart";
import OurLicensed from '../../components/Our licensed/OurLicensed'
import Footer from "../../components/footer/Footer";

import "./Team.css";


const Team = () => {
  const options = {
    margin: 10,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: [
    //   `<img src=${front} className='custom-prev' />`,
    // `<img src=${next} className='custom-next'/>`
      "<span class='custom-prev'>←</span>",
    "<span class='custom-next'>→</span>"
    ],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      // 1000: {
      //   items: 5,
      // },
    },
  };
  return (
    <div>
      <div className=" teamPagess soraaa">
        <Navbar className="navnav" />

        <div className="smallText ">
          <h4>OUR TEAM</h4>
          <p>
          The best pro Lycka <br /> team in <span>  town</span>{" "}
          </p>
        </div>
      </div>
      <br /> 
      <div className="owl">
      <h1>WHO WE ARE</h1>
      <br />
      <p >Meet our <span className="smallTexttt">therapists</span></p>

</div>
      <OwlCarousel loop className="slider-items owl-carousel" {...options}>
        <div class="item item1">
          {/* <img src={team1} alt="" /> */}
          <div class="card" style={{ width: "400px", border: "none" }}>
            <img src={team1} className="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Simone Lawrence</h5>
              <p class="card-text">Mental Health Counselor</p>
              <div className="imageIcons">
                <img
                  src={linkedin}
                  alt=""
                  style={{ width: "35px", height: "35px", marginLeft: "15px" }}
                />
                <img
                  src={twitter}
                  alt=""
                  style={{ width: "35px", height: "35px", marginLeft: "10px" }}
                />
                <div className="viewMore">
                  <h5>View Profile</h5>
                  <svg
                    className="iconView "
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item item2">
          <div class="card" style={{ width: "400px", border: "none" }}>
            <img src={team2} className="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Emily Rosenberg</h5>
              <p class="card-text">Licensed psychologist</p>
              <div className="imageIcons">
                <img
                  src={linkedin}
                  alt=""
                  style={{ width: "35px", height: "35px", marginLeft: "15px" }}
                />
                <img
                  src={twitter}
                  alt=""
                  style={{ width: "35px", height: "35px", marginLeft: "10px" }}
                />
                <div className="viewMore">
                  <h5>View Profile</h5>
                  <svg
                    className="iconView "
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item item3">
          <div class="card" style={{ width: "400px", border: "none" }}>
            <img src={team3} className="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Norman Robinson</h5>
              <p class="card-text">Mental Health Counselor</p>

              <div className="imageIcons">
                <img
                  src={linkedin}
                  alt=""
                  style={{ width: "35px", height: "35px", marginLeft: "15px" }}
                />
                <img
                  src={twitter}
                  alt=""
                  style={{ width: "35px", height: "35px", marginLeft: "10px" }}
                />
                <div className="viewMore">
                  <h5>View Profile</h5>
                  <svg
                    className="iconView "
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item item4">
          <div class="card" style={{ width: "400px", border: "none" }}>
            <img src={team4} className="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Leona Raine</h5>
              <p class="card-text">Licensed psychologist</p>

              {/* <span>in</span> */}
              <div className="imageIcons">
                <img
                  src={linkedin}
                  alt=""
                  style={{ width: "35px", height: "35px", marginLeft: "15px" }}
                />
                <img
                  src={twitter}
                  alt=""
                  style={{ width: "35px", height: "35px", marginLeft: "10px" }}
                />
                <div className="viewMore">
                  <h5>View Profile</h5>
                  <svg
                    className="iconView "
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
      <br /> <br />
      <br /> <br />
      <br /> <br />
      <br /> <br /> 
      <OurLicensed/>
      <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br />

      <GetMatchedSecpart/>
      <br /> <br /> <br /> <br /> <br /> <br />
 <br /> <br />
      <Footer/>
    </div>
  );
};

export default Team;
