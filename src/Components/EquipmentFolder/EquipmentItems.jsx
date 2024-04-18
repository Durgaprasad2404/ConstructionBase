import React from 'react'
import { Link } from 'react-router-dom'
import './equipment.css'

function Equipmentitems(props) {
  return (
    <div className='item-con'>
      <p>{props.itemname}</p>
      <Link to={`/Equipment/${props.id}`}>
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

export default Equipmentitems