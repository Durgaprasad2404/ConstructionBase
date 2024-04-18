import React from 'react'
import {BuildingEquipment} from '../itemsData/building'
import BuildingItems from './BuildingNeedsFolder/BuildingItems'

function Building() {
  return (
    <div className='backGround'>
      <h1>Building & Construction</h1>
      <div style={{margin:'20px 25px'}}>
        <h2>Bricks</h2>
        <div className='allItems'>
          {BuildingEquipment.map((i)=>{
            if (i.category==="Bricks"){
              return <BuildingItems id={i.id} key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer} />
            }else{
              return null
            }
          })}
        </div>
      </div>
      <div style={{margin:'20px 25px'}}>
        <h2>Cement</h2>
        <div className='allItems'>
          {BuildingEquipment.map((i)=>{
            if (i.category==="Cement"){
              return <BuildingItems id={i.id}  key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer}/>
            }else{
              return null
            }
          })}
        </div>
      </div>
      <div style={{margin:'20px 25px'}}>
        <h2>Iron</h2>
        <div className='allItems'>
          {BuildingEquipment.map((i)=>{
            if (i.category==="Iron"){
              return <BuildingItems id={i.id}  key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer}/>
            }else{
              return null
            }
          })}
        </div>
      </div>
       <div style={{margin:'20px 25px'}}>
        <h2>Woods</h2>
        <div className='allItems'>
          {BuildingEquipment.map((i)=>{
            if (i.category==="Woods"){
              return <BuildingItems id={i.id}  key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer}/>
            }else{
              return null
            }
          })}
        </div>
      </div>
      <div style={{margin:'20px 25px'}}>
        <h2>Crushed stone</h2>
        <div className='allItems'>
          {BuildingEquipment.map((i)=>{
            if (i.category==="Crushed stone"){
              return <BuildingItems id={i.id}  key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer}/>
            }else{
              return null
            }
          })}
        </div>
      </div>
      <div style={{margin:'20px 25px'}}>
        <h2>Sand</h2>
        <div className='allItems'>
          {BuildingEquipment.map((i)=>{
            if (i.category==="Sand"){ 
              return <BuildingItems id={i.id} key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer}/>
            }else{
              return null
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Building

