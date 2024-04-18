import React from 'react'
import { Link } from 'react-router-dom'
import './building.css'

function BuildingItems(props) {
  return (
    <div className='item-con'>
      <p>{props.itemname}</p>
      <Link to={`/Bcpath/${props.id}`}>
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

export default BuildingItems