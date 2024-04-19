import React from 'react'
import Equipmentitems from './EquipmentFolder/EquipmentItems'
import { productData } from '../itemsData/productsData'

function Equipment() {
  return (
    <div className='backGround'>
      <h1>Equipment Needs for Construction</h1>
      <div style={{margin:'20px 25px'}} id='#Electrical'>
        <h2>Electrical</h2>
        <div className='allItems'>
          {productData.map((i)=>{
            if (i.category==="Electrical"){
              return <Equipmentitems key={i.id} id={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer} />
            }else{
              return null
            }
          })}
        </div>
      </div>
      <div style={{margin:'20px 25px'}} id='Handtools'>
        <h2>Hard Tools</h2>
        <div className='allItems'>
          {productData.map((i)=>{
            if (i.category==="Hard Tools"){
              return <Equipmentitems key={i.id} id={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer} />
            }else{
              return null
            }
          })}
        </div>
      </div>
      <div style={{margin:'20px 25px'}} id='Heavy'>
        <h2>Heavy Machinery</h2>
        <div className='allItems'>
          {productData.map((i)=>{
            if (i.category==="Heavy Machinery"){
              return <Equipmentitems key={i.id} id={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer} />
            }else{
              return null
            }
          })}
        </div>
      </div>
      <div style={{margin:'20px 25px'}} id='Ladders'>
        <h2>Ladders</h2>
        <div className='allItems'>
          {productData.map((i)=>{
            if (i.category==="Ladders"){ 
              return <Equipmentitems key={i.id} id={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer} />
            }else{
              return null
            }
          })}
        </div>
      </div>
      <div style={{margin:'20px 25px'}} id='Safety'>
        <h2>Safety Gear</h2>
        <div className='allItems'>
          {productData.map((i)=>{
            if (i.category==="Safety Gear"){
              return <Equipmentitems key={i.id} id={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer} />
            }else{
              return null
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Equipment
