import React from 'react'
// import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import WhatWeDo from '../../components/what we do/WhatWeDo'
import WhatWeCanDo from '../../components/what we can do/WhatWeCanDo'
import GetInTouch from '../../components/get in touch with/GetInTouch'
import OurServices from '../../components/our services/OurServices'
import Review from '../../components/review carousel/Review'
import OurLicensed from '../../components/Our licensed/OurLicensed'
import GetMatchedSecpart  from '../../components/get matched/GetMatchedSecpart.js'
import Covid from '../../components/covid/Covid'
// import { Form } from 'react-bootstrap'
import Form from '../../components/form/Form'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './home.css'
const Home = () => {
  return (

    <div>
    {/* <br />
    <br />  */}
    <div className="Hcarousel">
<Carousel />
</div>
<div className="Hnav">
<Navbar />
</div>






<br /><br />
<WhatWeDo/>
<br /><br /> 
<WhatWeCanDo/>
<br /><br /> 
<GetInTouch/>
<br /> <br /> <br />
<OurServices/>
<br /> <br /> <br /> <br /> <br /> 
<br /> <br /> <br /> <br /> <br /> 

<Review/>

<br /> <br /> <br /> <br /> <br /> <br />
<br /> <br /> <br /> <br /> <br /> <br />
<br /> <br /> <br /> <br /> <br /> <br />

<OurLicensed/>

<br /> <br />
<br /> <br /> <br />
<br /> <br /> <br />


<GetMatchedSecpart />
<br /> <br /> <br />

<Covid/>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<Form/>
<Footer/>

</div> 
  )
}

export default Home