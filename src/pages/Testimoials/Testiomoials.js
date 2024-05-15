import React from "react";
import "./testiomoials.css";
import Navbar from "../../components/navbar/Navbar";
// import Carousel from "react-bootstrap/Carousel";
import Review from "../../components/review carousel/Review";
import img1 from "../../images/background_testimonials.jpg";
import Footer from "../../components/footer/Footer";
// import styled from 'styled-components';
import img2 from "../../images/floating_image_02_single_service.png";
import img3 from "../../images/floating_image_03_single_service.png";
import img4 from "../../images/floating_image_10.png";
import img5 from "../../images/quote2.png";
import img6 from "../../images/Capture3.PNG";
import img7 from "../../images/Capture2.PNG";
import img8 from "../../images/Capture1.PNG";

const Testiomoials = () => {
  return (
    <div>
      <div className="bgAllPages soraaa">
        <Navbar className="navnav" />

        <div className="smallText">
          <h4>TESTIMONIALS</h4>
          <p>
            What our clients <br /> say <span> about us</span>{" "}
          </p>
        </div>
      </div>
      <div className="reviewComponent">
        <Review />
      </div>

      <div className="justTalk">
        <img className="imggg2" src={img2} alt="" />
        <img className="imggg3" src={img3} alt="" />
        <img className="imggg4" src={img4} alt="" />

        <div className="moreText">
          <img src={img5} alt="" />
          <br />
          <p>
            Whatever you rest your attention on - grows. <br />
            Learn how to cultivate positive mental and <br />
            emotional states that sustain wellbeing.
          </p>

          <h5>Molly Sherman</h5>
          <h6>Psychologist</h6>
        </div>

        <br />
      </div>

      <div className="boxxs">
        <div className="ourServices">
          <h4>OUR SERVICES</h4>
          <p>
            We can help with the <br /> following{" "}
            <span className="spannuu">conditions</span>
          </p>
        </div>
        <br /> <br />
        <div className="newbox newbox1">
          <img src={img6} alt="" />
          <h3>
            Educational <br /> services
          </h3>
          <ul>
            <li>ADHD</li>
            <li>Dyslexia</li>
            <li>Dysgraphia</li>
            <li>Learning differences</li>
          </ul>
        </div>
        <div className="newbox newbox2">
          <img src={img7} alt="" />
          <h3>
            Psychological <br /> services
          </h3>
          <ul>
            <li>Anxiety and mood</li>
            <li>Autism Spectrum Disorder</li>
            <li>Behavioral problems</li>
            <li>Learning disabilities</li>
          </ul>
        </div>
        <div className="newbox newbox3">
          <img src={img8} alt="" />
          <h3>
            Speech-language <br /> therapy
          </h3>
          <ul>
            <li>Articulation</li>
            <li>Auditory Processing</li>
            <li>Oral Movement</li>
            <li>Voice/ Fluency</li>
          </ul>
        </div>
        <div className="newbox newbox4">
          {/* <img src={img8} alt="" /> */}
          <h3>We Are Open </h3>
          <ul>
            <li>
              Monday-Friday
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9AM-7PM
            </li>
            <li style={{ opacity: "0.6" }}>
              Saturday
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              9AM-4PM
            </li>
            <li style={{ border: "none", opacity: "0.6" }}>
              Sunday
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Closed
            </li>
            <button
              style={{
                color: "white",
                background: "#005b4a",
                paddingLeft: "80px",
                paddingRight: "80px",
                paddingTop: "5px",
                paddingBottom: "5px",
                borderRadius: "25px",
                border: "none",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Book Now
            </button>
            {/* <li>Voice/ Fluency</li> */}
          </ul>
        </div>
      </div>

      <br />

      <Footer />
    </div>
  );
};

export default Testiomoials;
