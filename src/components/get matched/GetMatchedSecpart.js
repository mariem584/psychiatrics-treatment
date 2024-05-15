import React from 'react';
import './GetMatchedSecpart.css';
import img1 from '../../images/num85.PNG'
import img2 from '../../images/num15.PNG'
import img3 from '../../images/num20.PNG'
import img4 from '../../images/num19.PNG'



const GetMatchedSecpart = () => {
  return (
    <div>
      <div className="contain">
        <div className="row">
          <div className="one">
          <div className="image">
              <img src={img1} alt="" />
            </div>
            <div className="texting">
            <h2>Unique patients</h2>
            <p>
              Over 80 unique patients helped each month. In <br /> order to improve mental health and overall well- <br />being with our expert therapists.
            </p>

            </div>

            
          </div>

          <div className="two">
          <div className="image">
              <img src={img2} alt="" />
            </div>
            <div className="texting">
            <h2>Professional caregivers</h2>
            <p>
              15 professional caregivers, devoted to your child. <br /> Each therapist was chosen for work based on their <br /> personal and professional accolades.
            </p>
            </div>
             
            

          </div>
        </div>

        <div className="row">
          <div className="three">
          <div className="image">
              <img src={img3} alt="" />
            </div>
            <div className="texting">
            <h2>Years of experience</h2>
            <p>
              Over 20 years of experience in working with <br /> children. If your teen is struggling in school, at <br /> home, or just needs a professional opinion.
            </p>
 
            
            </div>

          </div>

          <div className="fourth">
          <div className="image">
              <img src={img4} alt="" />
            </div>
            <div className="texting">
            <h2>Counselling techniques</h2>
            <p>
              19 different counseling techniques & worksheets <br /> for children. We offer goal-oriented individual, <br /> couple and family mental health counseling.
            </p>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMatchedSecpart;