import React from "react";
import "./OurLicensed.css";
import img1 from "../../images/image_03.png";
const OurLicensed = () => {
  return (
    <div className=" scrolling-bgg  ">
      <div className="container">
        <div className="textttt">
          <h4>GET MATCHED TO A THERAPIST</h4>
          <h1>Our licensed <span className="spany">therapists</span></h1>
          <button className="button">
            BOOK AN APPOINTMENT <br />
            <span>
             <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-calendar-week"
              viewBox="0 0 16 16"
            >
              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
            020 8003 4154
            </span>
          </button>

          <div className="shapess">
            <span className="shape4">
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
            <span className="shape5">
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
            <span className="shape6">
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
        </div>

        <div className="seconnd">
          <img src={img1} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default OurLicensed;
