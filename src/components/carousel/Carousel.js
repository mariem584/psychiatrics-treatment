import Carousel from "react-bootstrap/Carousel";
import img1 from "../../images/hero_background.jpg";
import img2 from "../../images/hero_background_02.jpg";
// import Test from "../test";
import "./carousel.css";
import Navbar from "../navbar/Navbar";
function CarouselFadeExample() {
  return (
    
    <div className="wave-container">
      <Carousel
        fade
        controls={false}
        indicators={false}
        interval={2000}
        className="w-100 h-30px"
      >
        <Carousel.Item className="carousel">
          <img className="d-block w-100 sora" src={img1} alt="First slide" />
          <Carousel.Caption className="forimage">
            <div className="text ">
                <h3>COVID-19 UPDATE | <span className="font">Most sessions are now online </span></h3>
                <h4>Serving the needs <br /> of <span className="i"><i>children</i></span></h4>
                <p>We are a multidisciplinary practice offering diagnostic and <br /> therapeutic services to all children, adolescents, young adults <br /> and their families which is important in our community.</p>
                <button>Book An Appointmen</button>
            </div>
            <div className="shapes">
            <span className="shape1" >
              <img
                width="161"
                height="245"
                src="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_02.png"
                class="attachment-full size-full"
                alt="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_02.png"
                decoding="async"
                data-full_image_src="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_02.png"
                title="floating_image_02"
              />
            </span>
            <span className="shape2">
              <img
                width="84"
                height="96"
                src="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_03.png"
                class="attachment-full size-full"
                alt="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_03.png"
                decoding="async"
                data-full_image_src="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_03.png"
                title="floating_image_03"
              />
            </span>
            <span className="shape3">
              <img
                width="75"
                height="84"
                src="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_01.png"
                class="attachment-full size-full"
                alt="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_01.png"
                decoding="async"
                data-full_image_src="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_01.png"
                title="floating_image_01"
              />
            </span>
          </div>
          </Carousel.Caption>
          
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img className="d-block w-100 sora" src={img2} alt="Second slide" />

          <Carousel.Caption className="forimage">
            <div className="text" >
            <h3>IN CLINIC &amp; ONLINE | <span className="font">Book effective therapy</span></h3>
            <h4>Serving the needs <br /> of <span className="i"><i>adolescents</i></span></h4>
            {/* <br /> <br /> */}
            <p>Leverage agile frameworks to provide a robust synopsis for <br /> high level overviews.  Iterative approaches to corporate <br /> strategy  foster collaborative  thinking touchpoints.</p>
            <button>Book An Appointmen</button>
            
            </div>
            <div className="shapes">
            <span className="shape1">
              <img
                width="161"
                height="245"
                src="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_02.png"
                class="attachment-full size-full"
                alt="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_02.png"
                decoding="async"
                data-full_image_src="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_02.png"
                title="floating_image_02"
              />
            </span>
            <span className="shape2">
              <img
                width="84"
                height="96"
                src="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_03.png"
                class="attachment-full size-full"
                alt="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_03.png"
                decoding="async"
                data-full_image_src="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_03.png"
                title="floating_image_03"
              />
            </span>
            <span className="shape3">
              <img
                width="75"
                height="84"
                src="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_01.png"
                class="attachment-full size-full"
                alt="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_01.png"
                decoding="async"
                data-full_image_src="https://lycka.bold-themes.com/playful/wp-content/uploads/sites/3/2021/12/floating_image_01.png"
                title="floating_image_01"
              />
            </span>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default CarouselFadeExample;
