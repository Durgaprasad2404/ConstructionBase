import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Footer from './Footer';
import Shoppingfeatures from './shoppingfeatures';

function Home() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

   };
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
      <Slider {...settings}>
        <div>
          <img src='../Assets/bgs/Caro1.jpg' alt='#' className='carImg' />
        </div>
        <div>
          <img src='../Assets/bgs/Caro2.jpg' alt='#' className='carImg' />
        </div>
        <div>
          <img src='../Assets/bgs/Caro3.jpg' alt='#' className='carImg' />
        </div>
      </Slider>
    </div>
    <div className='shopCategory'>
          <h1 className='homeHeading'>
          Shop By Category wise
        </h1>
        <div className='shopItemCon'>
         <Link to='/Bcpath' style={{textDecoration:'none'}}>
           <div className="shopItem">
            <img src="../Assets/ShopCategory/tmt-bar.jpg" alt="#" className='shopImg'/>
              <h2>
              TMT Steel
            </h2>
          </div>
          </Link>
          <Link to='/Bcpath' style={{textDecoration:'none'}}>
          <div className="shopItem">
            <img src="../Assets/ShopCategory/cement.jpg" alt="#" className='shopImg' />
            <h2>
              Top Rated Cement
            </h2>
          </div>
          </Link>
          <Link to='/Bcpath' style={{textDecoration:'none'}}>
          <div className="shopItem">
            <img src="../Assets/ShopCategory/redBricks.jpeg" alt="#" className='shopImg' />
            <h2>
              Red Bricks
            </h2>
          </div>
          </Link>
          <Link to='/EEpath' style={{textDecoration:'none'}}>
          <div className="shopItem">
            <img src="../Assets/ShopCategory/wires.jpeg" alt="#" className='shopImg' />
            <h2>
              Wires & Cables
            </h2>
          </div>
          </Link>
          <Link to='/Bcpath' style={{textDecoration:'none'}}>
          <div className="shopItem">
            <img src="../Assets/ShopCategory/sand.jpeg" alt="#" className='shopImg' />
            <h2>
              Pure Sand
            </h2>
          </div>
          </Link>
        </div>
      </div>
      <div  className='offerBg'>
      <h1 className='offerHeading'>
        Top Offers
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
        Buy Building & Construction Materials Online in <q style={{color:'red',fontSize:'35px',fontStyle:'oblique'}}>Nalgonda</q>
      </h1>
      <p>We supply complete building and construction materials like Cement, TMT Steel, Bricks & Blocks, Sand, Tiles, Electrical Materials, Plywood, Plumbing Materials, etc. at wholesale prices across nalgonda. </p>
    </div>
    <Shoppingfeatures />
    <Footer/>
      </>
  );
}

export default Home

