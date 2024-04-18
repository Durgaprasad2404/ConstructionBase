import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare, FaYoutubeSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <hr />
    <footer>
            <div className="footCon1">
                <b>Logo</b>
                <p>Your one-stop shop for the tools that build tomorrow.</p>
            </div>
          <div className="footCon2">
            <b>Products</b>
              <ul className='footlist'>
                  <Link style={{textDecoration:'none',color:'#000'}} to='/RentedVehicles'><li className='footlistItem'>Rental Vehicles</li></Link>
                  <Link style={{textDecoration:'none',color:'#000'}} to='/Equipment'><li className='footlistItem'>Construction Equipment</li></Link>
                  <Link style={{textDecoration:'none',color:'#000'}} to='/EEpath'><li className='footlistItem'>Electronic & Electrics</li></Link>
                  <Link style={{textDecoration:'none',color:'#000'}} to="/Bcpath"><li className='footlistItem'>Building Material</li></Link>
              </ul>
          </div>
          <div className="footCon3">
              <b>Contact Us</b><br/>
              <div>
                <input type='text'/>
              <button>contact</button>
              </div>
              <div className='connect'>
                <i>Connect With Us</i><br/>
                <span className='icon'><FaWhatsappSquare/></span>
                <span className='icon'><FaFacebookSquare /></span>
                <span className='icon'><FaYoutubeSquare /></span>
                <span className='icon'><FaTwitterSquare /></span>
                <span className='icon'><FaInstagramSquare /></span>
              </div>
          </div>
      </footer>
      <hr/>
      <div className='copyright'>2024 @copyright</div>
      </>
  )
}

export default Footer
