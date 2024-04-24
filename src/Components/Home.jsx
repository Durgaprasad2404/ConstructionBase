import React from 'react'
import Slider from "react-slick";
import Footer from './Footer';
import Shoppingfeatures from './shoppingfeatures';
import { Link } from 'react-router-dom';
import { Slide } from "react-awesome-reveal";

function Home() {
   const sets = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
  };
  return (
    <>
    <div className='HomepageBg'>
      <div className='homePageCon'>
        <div>
          <Slide direction='down'><h1 className='homeHeading'>Destination for<br/> Construction Equipment&Materials</h1></Slide>
          <Slide direction='up'>
            <p className='homePara'>where quality meets construction. Explore our curated collection of top-tier equipment and materials to elevate your projects with confidence.</p>
          </Slide>
        </div>
        {/* <div>
          <img src="../Assets/bgs/3.jpg" alt="#" className='homeImg' />
        </div> */}
      </div>
    </div>
    <div className='linebt'></div>
    <div className='shopCategory'>
          <h2 className='categoryHeading'>
          Shop By Category Wise
        </h2>
        <div className='shopItemCon'>
          <h4>Construction Equipment</h4>
         <div className='shoplanding'>
          <div>
            <img src="../Assets/EquipmentImages/equipLanding.jpg" alt="#" className='shopImg'/>
          </div>
          <div>
            <p className='shopPara'>
              Construction equipment, from excavators to cranes, is essential for project execution. Advancements enhance efficiency, safety, and environmental impact. Proper equipment selection boosts productivity and reduces costs. Utilizing the right tools ensures timely project completion and shapes infrastructure development.            </p>
            <Link to='/Equipment'><button className="shopBtn">Shop Now</button></Link>
          </div>
         </div>
        </div>
        <div className='shopItemCon'>
          <h4>Electronics & Electrical</h4>
         <div className='shoplanding'>
          <div>
            <img src="../Assets/electrical/EElanding.jpeg" alt="#" className='shopImg'/>
          </div>
          <div>
            <p className='shopPara'>Electronics and electrical items are essential in construction, powering lighting, HVAC, security, and automation systems. They encompass wiring, circuitry, and power distribution, ensuring buildings are functional and safe. Incorporating smart technologies optimizes resource usage, driving innovation for smarter, more connected spaces.</p>
            <Link to='/EEpath'><button className="shopBtn">Shop Now</button></Link>
          </div>
         </div>
        </div>
        <div className='shopItemCon'>
          <h4>Building & Construction Material</h4>
         <div className='shoplanding'>
          <div>
            <img src="../Assets/building/Blanding.png" alt="#" className='shopImg'/>
          </div>
          <div>
            <p className='shopPara'>Building materials are the backbone of construction, ranging from wood and concrete to advanced composites. They determine structural integrity, aesthetics, and environmental impact. Innovations in material science offer enhanced durability and sustainability. Careful selection shapes functional excellence and sustainability goals in the built environment.</p>
            <Link to='/Bcpath'><button className="shopBtn">Shop Now</button></Link>
          </div>
         </div>
        </div>
      </div>
      <div  className='offerBg'>
      <h1 className='offerHeading'>
        Brand New Offers
      </h1>
      <div className='offerBG'>
        <Slider {...sets}>
        <div className='offerCon'>
        <img src='../Assets/offers/bricksOffer.jpg' alt='#' className='offer'/>
      </div>
      <div className='offerCon'>
        <img src='../Assets/offers/cementOffer.jpg' alt='#' className='offer'/>
      </div>
      <div className='offerCon'>
        <img src='../Assets/offers/sand.jpg' alt='#' className='offer'/>
      </div>
      <div className='offerCon'>
        <img src='../Assets/offers/ironOffer.jpg' alt='#' className='offer'/>
      </div>
      <div className='offerCon'>
        <img src='../Assets/offers/cementOffer.jpg' alt='#' className='offer'/>
      </div>
      </Slider>
      </div>
    </div>
    <div className='promot'>
      <h1>
        Buy Building & Construction Materials Online in <span className='nalgonda'>Nalgonda</span>
      </h1>
      <p>We supply complete building and construction materials like Cement, TMT Steel, Bricks & Blocks, Sand, Tiles, Electrical Materials, Plywood, Plumbing Materials, etc. at wholesale prices across nalgonda. </p>
    </div>
    <Shoppingfeatures />
    <Footer/>
      </>
  );
}

export default Home

