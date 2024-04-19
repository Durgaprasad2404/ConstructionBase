import React from 'react'
import { useParams } from 'react-router-dom'
import { WorkersData } from '../../itemsData/workers'; 
import { MdAddIcCall } from "react-icons/md";

function Showworkers() {
    const {category}=useParams()
  return (
    <div className='backGround'>
      <h1>Here are some <q style={{color:'red',fontSize:'35px'}}>{category}</q> </h1>
      {WorkersData.map((i)=>{
        if (i.category===category){
            return(
                <div className='owners'>
                    <h2 style={{width:'150px'}}>
                        {i.ownerName}
                    </h2>
                    <div style={{width:'150px'}}>
                      <p><MdAddIcCall /> {i.contactNumber}</p>
                    </div>
                    <p style={{width:'150px'}}>&#8377; {i.amount}/- <span style={{fontSize:'xx-small'}}>Per Day</span></p>
                </div>
            )
        }else{
            return null
        }
      })}
    </div>
  )
}

export default Showworkers
