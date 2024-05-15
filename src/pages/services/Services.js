import React from "react";
import "./service.css";
import Navbar from "../../components/navbar/Navbar";
import Shape1 from "../../images/service shape1.PNG";
import Shape2 from "../../images/service shape2.PNG";
import Shape3 from "../../images/service shape3.PNG";
import Shape4 from "../../images/service shape4.PNG";
import Shape5 from "../../images/service shape5.PNG";
import Covid from '../../images/badge_02.png'
import girlImage from '../../images/image_02_home_02.jpg'
import boyImage from '../../images/image_03_home_02.jpg'

// import FmdGoodIcon from '@mui/icons-material/FmdGood';

const Services = () => {
  return (
    <div>
      <div className="servicePagess soraaa">
        <Navbar className="navnav" />
        <div className="smallText ">
          <h4>SERVICES</h4>
          <p>
            Effective therapy <br /> that gets <span> results </span>{" "}
          </p>
        </div>
      </div>
      <div className="serviceItems">
        <div className="serviceItemsPartone">
          <div className="firstService">
            <img src={Shape1} alt="" />
            <h1>Speech therapy</h1>
            <p>
              Therapists have a minimum of 7 years of <br /> experience, and are
              accredited and <br /> insured to practice privately.
            </p>
            <button>See More</button>
          </div>

          <div className="secondService">
            <img src={Shape2} alt="" />
            <h1>Occupational therapy</h1>
            <p>
              Our therapists have met selection criteria <br /> and are vetted
              to ensure you receive the <br />
              best support to heal your life.
            </p>
            <button>See More</button>
          </div>

          <div className="open">
            <div className="greenDiv">
              <h2>We are open</h2>

              <div className="location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <p>
                  8895 North Military Trail, <br /> Florida 33410
                </p>
              </div>
            </div>

            <div className="ulandbtn">
              <ul>
                <li>
                  Monday-Friday
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9AM-7PM
                </li>
                <li style={{ opacity: "0.6" }}>
                  Saturday
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp; 9AM-4PM
                </li>
                <li style={{ border: "none", opacity: "0.6" }}>
                  Sunday
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Closed
                </li>
              </ul>
              <button
                style={{
                  color: "black",
                  // fontWeight:"600",
                  paddingLeft: "130px",
                  paddingRight: "130px",
                  paddingTop: "10.95px",
                  paddingBottom: "10.95px",
                  borderRadius: "25px",
                  border: "none",
                  fontSize: "15px",
                  fontWeight: "600",
                  background: "#ffc0b5",
                  marginBottom: "35px",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="serviceItemsParttwo">
          <div className="thirdService">
            <img src={Shape3} alt="" />
            <h1>Psychological services</h1>
            <p>
              We are passionate and compassionate <br /> professionals, driven
              by the mission of <br />
              helping kids and young people.
            </p>
            <button>See More</button>
          </div>

          <div className="fourthService">
            <img src={Shape4} alt="" />
            <h1>Specialty services</h1>
            <p>
              We are growing fast and always looking <br /> for new talented
              therapists. If you love <br /> people – come and join us!
            </p>
            <button style={{ marginTop: "25px" }}>See More</button>
          </div>

          <div className="fifthService">
            <img src={Shape5} alt="" />
            <h1>Physical therapy</h1>
            <p>
              Over 20 years of experience working with <br /> children. If your
              teen has problems in <br /> school, or needs a professional
              opinion.{" "}
            </p>
            <button>See More</button>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className="clink">
      <div className="clinkText">

        <h4>IN CLINIC & ONLINE</h4>
        <h1>Speech therapy</h1>
        <h6>
          Our speech pathologists help children who struggle or fail to <br />
          develop normal communication. Speech pathologists use a variety <br />
          of proven strategies to help a child’s speech and language.
        </h6>
        <h5>THERAPIST</h5>
        <div className="tobeonsameline">
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
            Jordana Nolan
          </li>
        </ul>

        <h5>ON WORKING DAYS</h5>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-clock"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
            8:00am - 6:00pm
          </li>
        </ul>
</div>
        <button>
          Book Now
        </button>
        <img src={Covid} alt="" />
        </div>

        <div className="clinkImg1">
          <img src={girlImage} alt="" />
        </div>
      </div>

      <div className="clink2">
      <div className="clinkImg2">
          <img src={boyImage} alt="" />
        </div>

        <div className="clink2text">
        <h4>IN CLINIC & ONLINE</h4>
        <h1>Child traumatic  stress <br /> treatment</h1>
        <h6>
        A mental health professional trained in evidence-based trauma <br /> treatment can help children and families cope with the impact of <br /> traumatic events and move toward recovery.
        </h6>
        <h5>THERAPIST</h5>
        <div className="tobeonsameline">
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
            Jordana Nolan
          </li>
        </ul>

        <h5>ON WORKING DAYS</h5>
        
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-clock"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
            8:00am - 6:00pm
          </li>
        </ul>
</div>
        <button>
          Book Now
        </button>
        <img src={Covid} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
