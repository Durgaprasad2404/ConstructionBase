import React from 'react'
import { useParams } from 'react-router-dom'
import { RentalData } from '../../itemsData/Rentaldata'

function ShowOwners() {
    const {category}=useParams()
  return (
    <div>
      {RentalData.map((i)=>{
        if (i.category===category){
            return(
                <div className='owners'>
                    <h2>
                        {i.ownerName}
                    </h2>
                    <p>{i.contactNumber}</p>
                    <p>{i.amount}/- <span style={{fontSize:'xx-small'}}>Per hour</span></p>
                </div>
            )
        }else{
            return null
        }
      })}
    </div>
  )
}

export default ShowOwners
