import React from 'react'
import { workers } from '../itemsData/rented'
import DisplayWorkers from './workersFolder/DisplayWorkers'


function Workers() {
  return (
    <div className='backGround'>
      <h1>
          Top Industrial Labour Contractors in Nalgonda
        </h1>
      <div  className='workers'>
        {workers.map((i,index)=>{
          return (<DisplayWorkers key={i.id} category={i.name} imgUrl={i.imgUrl}/>)
        })}
      </div>
        
    </div>
  )
}

export default Workers
