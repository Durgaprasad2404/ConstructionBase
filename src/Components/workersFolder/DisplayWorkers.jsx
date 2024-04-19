import React from 'react'
import { Link } from 'react-router-dom'

function DisplayWorkers(props) {
  return (
    <div className='workersCon'>
      <Link to={`/workers/${props.category}`}>
        <img src={props.imgUrl} alt='#' className='img'/>
      </Link>
      <h2>{props.category}</h2>
    </div>
  )
}

export default DisplayWorkers
