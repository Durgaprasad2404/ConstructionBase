import React from 'react'
import { vehicles } from '../itemsData/rented'
import DisplayVehicles from './rentalFolder/DisplayVehicles'
import Footer from './Footer'


function RentedVehicles() {
  return (
    <><div className='backGround'>
      <h1>
        Rental Vehicles
      </h1>
      <div className='rentalVehicles'>
        {vehicles.map((i, index) => {
          return (<DisplayVehicles key={i.id} category={i.name} imgUrl={i.imgUrl} />)
        })}
      </div>
    </div><Footer /></> 
  )
}

export default RentedVehicles
