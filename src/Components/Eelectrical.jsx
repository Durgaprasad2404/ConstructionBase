import React from 'react'
import {construction_equipment} from '../itemsData/Electrical'
import ElectronicsElectricalItems from './ElectronicsElectricalFolder/ElectronicsElectricalItems'


function ElectronicsElectrical() {
  return (
    <div className='backGround' >
      <h1>Electronics & Electrical</h1>
      <div style={{margin:'20px 25px'}}>
        <h2>Cables & wires</h2>
        <div className='allItems'>
          {construction_equipment.map((i)=>{
            if (i.category==="Wires"){
              return <ElectronicsElectricalItems id={i.id} key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer}/>
            }else{
              return null
            }
          })}
        </div>
      </div>
      <div style={{margin:'20px 25px'}}>
        <h2>Circuites</h2>
        <div className='allItems'>
          {construction_equipment.map((i)=>{
            if (i.category==="Circuits"){
              return <ElectronicsElectricalItems id={i.id} key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer}/>
            }else{
              return null
            }
          })}
        </div>
      </div>
      <div style={{margin:'20px 25px'}}>
        <h2>Pannels</h2>
        <div className='allItems'>
          {construction_equipment.map((i)=>{
            if (i.category==="Panels"){
              return <ElectronicsElectricalItems id={i.id} key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer}/>
            }else{
              return null
            }
          })}
        </div>
      </div>
       <div style={{margin:'20px 25px'}}>
        <h2>Pipes</h2>
        <div className='allItems'>
          {construction_equipment.map((i)=>{
            if (i.category==="Pipes"){
              return <ElectronicsElectricalItems id={i.id} key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer}/>
            }else{
              return null
            }
          })}
        </div>
      </div>
      <div style={{margin:'20px 25px'}}>
        <h2>Wire Cutters</h2>
        <div className='allItems'>
          {construction_equipment.map((i)=>{
            if (i.category==="Wire Cutters"){
              return <ElectronicsElectricalItems id={i.id} key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer}/>
            }else{
              return null
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default ElectronicsElectrical

