// import React from "react";
// import "./ourServices.css";
// import img1 from '../../images/Capture1.PNG'
// import img2 from '../../images/Capture2.PNG'
// import img3 from '../../images/Capture3.PNG'
// import img4 from '../../images/Capture4.PNG'

// const OurServices = () => {
//   return (
//     <div className="container">
//       <div className="firstttt">
//         <h4>OUR SERVICES</h4>
//         <p>
//           Together we can <br />
//           make great <span className="spannnn">progress</span>
//         </p>

//         <p className="secondPart">
//           Since 1999, Center for Child Counseling has been <br />
//           building the foundation for playful, healthful, and <br />
//           hopeful living for children, families, and communities.
//         </p>
//         <button className="btttn">View Services</button>
//       </div>

//       <div className="secondd">
//         <div className="box box1">
//             <img src={img1} alt="" />
//             <h3>Speech-language <br /> therapy</h3>
//             <ul>
//                 <li>Articulation</li>
//                 <li>Auditory Processing</li>
//                 <li>Oral Movement</li>
//                 <li>Voice/ Fluency</li>
//                 {/* <br /> */}
//             </ul>
//         </div>
//         <div className="box box2">

//             <img src={img2} alt="" />

//             <h3>Psychological <br /> services</h3>
//             <ul>
//                 <li>Anxiety and mood</li>
//                 <li>Autism Spectrum Disorder</li>
//                 <li>Behavioral problems</li>
//                 <li>Learning disabilities</li>
                
//             </ul>
//         </div>
//         <br />
//         <div className="box box3">

//             <img src={img3} alt="" />
//             <h3>Educational <br /> services</h3>
//             <ul>
//                 <li>ADHD</li>
//                 <li>Dyslexia</li>
//                 <li>Dysgraphia</li>
//                 <li>Learning differences</li>
                
//             </ul>

//         </div>
//         <div className="box box4">

//             <img src={img4} alt="" />
//             <h3>Physical body <br /> therapy</h3>
//             <ul>
//                 <li>Balance & Coordination</li>
//                 <li>Strength & Flexibility</li>
//                 <li>Postural Alignment</li>
//                 <li>Surgical Rehabittation</li>
                
//             </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurServices;



import React, { useEffect } from "react";
import "./ourServices.css";
import img1 from '../../images/Capture1.PNG'
import img2 from '../../images/Capture2.PNG'
import img3 from '../../images/Capture3.PNG'
import img4 from '../../images/Capture4.PNG'

const OurServices = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll(".box");

    function fadeInBoxes() {
      boxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxTop < windowHeight) {
          box.classList.add("fade-in");
        }
      });
    }

    window.addEventListener("scroll", fadeInBoxes);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", fadeInBoxes);
    };
  }, []);

  return (
    <div className="container">
      <div className="firstttt">
        <h4>OUR SERVICES</h4>
        <p>
          Together we can <br />
          make great <span className="spannnn">progress</span>
        </p>

        <p className="secondPart">
          Since 1999, Center for Child Counseling has been <br />
          building the foundation for playful, healthful, and <br />
          hopeful living for children, families, and communities.
        </p>
        <button className="btttn">View Services</button>
      </div>

      <div className="secondd">
        <div className="box box1">
          <img src={img1} alt="" />
          <h3>Speech-language <br /> therapy</h3>
          <ul>
            <li>Articulation</li>
            <li>Auditory Processing</li>
            <li>Oral Movement</li>
            <li>Voice/ Fluency</li>
          </ul>
        </div>
        <div className="box box2">
          <img src={img2} alt="" />
          <h3>Psychological <br /> services</h3>
          <ul>
            <li>Anxiety and mood</li>
            <li>Autism Spectrum Disorder</li>
            <li>Behavioral problems</li>
            <li>Learning disabilities</li>
          </ul>
        </div>
        <br />
        <div className="box box3">
          <img src={img3} alt="" />
          <h3>Educational <br /> services</h3>
          <ul>
            <li>ADHD</li>
            <li>Dyslexia</li>
            <li>Dysgraphia</li>
            <li>Learning differences</li>
          </ul>
        </div>
        <div className="box box4">
          <img src={img4} alt="" />
          <h3>Physical body <br /> therapy</h3>
          <ul>
            <li>Balance & Coordination</li>
            <li>Strength & Flexibility</li>
            <li>Postural Alignment</li>
            <li>Surgical Rehabittation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurServices;