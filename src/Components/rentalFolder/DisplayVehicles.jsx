import React from 'react'
import { Link } from 'react-router-dom'

function DisplayVehicles(props) {
  return (
    <div className='rentalVehiclesCon'>
      <Link to={`/rental/${props.category}`}>
        <img src={props.imgUrl} alt='#' className='img'/>
      </Link>
      <h2>{props.category}</h2>
    </div>
  )
}

export default DisplayVehicles
