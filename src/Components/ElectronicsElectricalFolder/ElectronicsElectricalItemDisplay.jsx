import React from 'react'
import { useParams } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import './electronics.css'
import { productData } from '../../itemsData/productsData';

function ElectronicsElectricalItemDisplay(props) {
    const {id}=useParams()
    const item= productData.find((i)=>i.id===id)

  return (
    <>
    <div className='singleItem'>
      <div>
        <img src={item.imgUrl} alt="#" className='singleimg' />
        <p>{item.description}</p>
      </div>
      <div className='singleitem-details'>
        <div>
          <h1>{item.itemname}</h1>
          <p>&#8377; {item.price} <span className='offer'>{item.offer}% OFF</span></p>
          <p>This essential construction tool is a heavy-duty apparatus designed to blend various construction materials with precision and efficiency.</p>
        </div>
        <div>
          <button type="button" className='cartBtn' onClick={()=>props.handleClick(item)}>
            <FaCartPlus />  Add To Cart
          </button>
          <button type="button" className='buyBtn'>
            Buy Now <ImPower />
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ElectronicsElectricalItemDisplay
