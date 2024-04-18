import React from 'react'
import { useParams } from 'react-router-dom'
import { construction_equipment } from '../../itemsData/Electrical'
import { FaCartPlus } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import './electronics.css'

function ElectronicsElectricalItemDisplay() {
    const {id}=useParams()
    const item= construction_equipment.find((i)=>i.id===id)

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
          <p>$ {item.price} <span className='offer'>{item.offer}% OFF</span></p>
          <p>This essential construction tool is a heavy-duty apparatus designed to blend various construction materials with precision and efficiency.</p>
        </div>
        <div>
          <button type="button" className='cartBtn'>
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
