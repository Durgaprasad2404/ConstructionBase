import React from 'react'
import { useParams } from 'react-router-dom'
import { RentalData } from '../../itemsData/Rentaldata'
import { MdAddIcCall } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'

function ShowOwners() {
    const {category}=useParams()
    console.log(RentalData)
  return (
    <div className='backGround'>
      <h1>Here are some <q style={{color:'red',fontSize:'35px'}}>{category}</q> </h1>
      {RentalData.map((i)=>{
        if (i.category===category){
            return(
                <div className='owners'>
                    <h2 style={{width:'150px'}}>
                        <FaUser /> {i.ownerName}
                    </h2>
                    <p style={{width:'150px'}}><MdAddIcCall /> {i.contactNumber}</p>
                    <p style={{width:'150px'}}>&#8377; {i.amount}/- <span style={{fontSize:'xx-small'}}>Per hour</span></p>
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
