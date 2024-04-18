import React from 'react'
import { Link } from 'react-router-dom'
import './electronics.css'

function ElectronicsElectricalItems(props) {
  return (
    <div className='item-con'>
      <p>{props.itemname}</p>
      <Link to={`/EEpath/${props.id}`}>
      <img src={props.imgUrl} alt="#img" className='img'  />
      </Link>
      <p>
        &#8377;  {props.price} <br/>
      <span className='oldprice'>	&#8377; {props.oldprice}</span> 
      <span className='offer'>{props.offer}% OFF</span>
      </p>
    </div>
  )
}

export default ElectronicsElectricalItems