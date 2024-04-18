import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineFileProtect } from "react-icons/ai"; 

function Shoppingfeatures() {
  return (
    <div className='Shoppingfeatures'>
      <div className='Shoppingfeatures1'>
        <span style={{fontSize:'35px'}}><TbTruckDelivery /></span>
        <h3>Fast and Free Shipping</h3>
        <p>Enjoy lightning-fast delivery with no shipping charges to hold you back.</p>
      </div>
      <hr/>
      <div className='Shoppingfeatures1'>
        <span style={{fontSize:'35px'}}> <AiOutlineFileProtect /></span>
        <h3>Quality Assurance</h3>
        <p>We are dedicated to providing you with products that meet the highest standards of quality and craftsmanship.</p>
      </div>
    </div>
  )
}

export default Shoppingfeatures
