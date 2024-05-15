import Carousel from "react-bootstrap/Carousel";
import backImg from "../../images/f4f4f4.png";
import "./review.css";
import Quotes from "../../images/quote.png";
import StarRating from "../rating/Rating";
import img1 from "../../images/image_04.png";
import img2 from "../../images/image_07.png";
import img3 from "../../images/image_08.png";
import styled from 'styled-components';

function CarouselFadeExample({className}) {

  return (
    <div className="wave-container ">
      {/* <ReviewWrapper className={className}> */}
      <Carousel
        fade
        controls={true}
        indicators={false}
        interval={2000}
        className="w-100 h-30px"

        
      >
        <Carousel.Item className="carousell">
          <img
            className="d-block w-100 soraa"
            src={backImg}
            alt="First slide"
          />
          <Carousel.Caption className="forimage">
          <div className="ddd">
              <img src={img2} alt="" />
            </div>
            <div className="texttt ">
              <h3>REVIEW FOR: </h3>
              <h2>Molly Sherman</h2>
              <h6>Psychologis</h6>
              <img src={Quotes} alt="" />
              {/* <h4>Serving the needs <br /> of <span className="i"><i>children</i></span></h4> */}
              <p>
                Amazing kind hearted person. Really
              {" "} <i>
                  <b>
                    cares <br /> about
                  </b>{" "}
                </i>
                who the client is and what their <br /> lifestyle is and how to
                improve it. Made me <br /> feel hopeful about my life. Amazing
                kind <br /> hearted person. Really{" "}
                <i>
                  <b>cares about</b>
                </i>{" "}
                who <br /> the client is and what their lifestyle is and <br />{" "}
                how to improve it. Made me feel hopeful <br /> about my life.
                Amazing kind hearted <br /> person. Really{" "}
                <i>
                  <b>cares about</b>
                </i>{" "}
                who the client <br /> is and what their lifestyle is and how to{" "}
                <br /> improve it. Made me feel hopeful about <br /> my life.
              </p>

              <StarRating />
              <h5>Tiffany Sarchett</h5>
              <h1>Client</h1>
            </div>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousell">
          <img
            className="d-block w-100 soraa"
            src={backImg}
            alt="Second slide"
          />

          <Carousel.Caption className="forimage">
          <div className="ddd">
              <img src={img3} alt="" />
            </div>
            <div className="texttt">
              <h3>REVIEW FOR: </h3>
              <h2>Nancy Koene</h2>
              <h6>Pediatrician</h6>
              <img src={Quotes} alt="" />
              <p>
                Nancy has helped my son through figuring <br /> out his{" "}
                <i>
                  <b>complex emotions</b>
                </i>
                , and how to <br /> navigate through life without letting them{" "}
                <br /> disrupt his day to day life.
              </p>
              <StarRating />
              <h5>Chad Spencer</h5>
              <h1>Father</h1>
            </div>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousell">
          <img
            className="d-block w-100 soraa"
            src={backImg}
            alt="Third slide"
          />
          <Carousel.Caption className="forimage">
          <div className="ddd">
              <img src={img1} alt="" />
            </div>
            <div className="texttt ">
              <h3>REVIEW FOR: </h3>
              <h2>Susan Brier</h2>
              <h6>Pediatrician</h6>
              <img src={Quotes} alt="" />
              {/* <h4>Serving the needs <br /> of <span className="i"><i>children</i></span></h4> */}
              <p>
                At Lycka, they encourage my child and <br /> continue to provide{" "}
                <i>
                  <b>positive environment</b> <br />
                </i>{" "}
                for her. We are thankful for their excellent <br /> care and
                positive attitude.
              </p>

              <StarRating />
              <h5>Alexa Chung</h5>
              <h1>Mother</h1>
            </div>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* </ReviewWrapper> */}
    </div>
  );
}

export default CarouselFadeExample;
